import { NextRequest, NextResponse } from 'next/server';
import { fromArrayBuffer } from 'geotiff';

interface RoofSegmentStat {
  pitchDegrees: number;
  azimuthDegrees: number;
  stats: { areaMeters2: number; sunshineQuantiles: number[] };
}

interface RoofSegmentSummary {
  pitchDegrees: number;
  azimuthDegrees: number;
  panelsCount: number;
  yearlyEnergyDcKwh: number;
  segmentIndex: number;
}

interface PanelConfig {
  panelsCount: number;
  yearlyEnergyDcKwh: number;
  roofSegmentSummaries: RoofSegmentSummary[];
}

// Turbo colormap: blue → cyan → green → yellow → red
function turboColor(t: number): [number, number, number] {
  t = Math.max(0, Math.min(1, t));
  const r = Math.round(255 * Math.max(0, Math.min(1,
    t < 0.13 ? 0.18 + t * 4.5 :
    t < 0.42 ? 0.76 + (t - 0.13) * 0.8 :
    t < 0.71 ? 0.99 - (t - 0.42) * 2.4 :
    0.30 - (t - 0.71) * 1.0)));
  const g = Math.round(255 * Math.max(0, Math.min(1,
    t < 0.2 ? t * 2.8 :
    t < 0.5 ? 0.56 + (t - 0.2) * 1.5 :
    t < 0.8 ? 1.0 - (t - 0.5) * 0.5 :
    0.85 - (t - 0.8) * 4.0)));
  const b = Math.round(255 * Math.max(0, Math.min(1,
    t < 0.15 ? 0.5 + t * 3.0 :
    t < 0.35 ? 0.95 - (t - 0.15) * 0.5 :
    t < 0.65 ? 0.85 - (t - 0.35) * 2.8 :
    0.01)));
  return [r, g, b];
}

async function buildHeatmapPng(
  tiffUrl: string,
  apiKey: string
): Promise<{ png: string; width: number; height: number } | null> {
  try {
    const res = await fetch(`${tiffUrl}&key=${apiKey}`, {
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;

    const buf = await res.arrayBuffer();
    const tiff = await fromArrayBuffer(buf);
    const image = await tiff.getImage();
    const [data] = (await image.readRasters()) as unknown as [Float32Array];
    const width = image.getWidth();
    const height = image.getHeight();

    // Find min/max ignoring nodata (-9999)
    let min = Infinity;
    let max = -Infinity;
    for (const v of data) {
      if (v > -9000) {
        if (v < min) min = v;
        if (v > max) max = v;
      }
    }
    const range = max - min || 1;

    // Build RGBA pixel buffer
    const rgba = new Uint8Array(width * height * 4);
    for (let i = 0; i < data.length; i++) {
      const v = data[i];
      if (v <= -9000) {
        // nodata → fully transparent
        rgba[i * 4 + 3] = 0;
      } else {
        const t = (v - min) / range;
        const [r, g, b] = turboColor(t);
        rgba[i * 4] = r;
        rgba[i * 4 + 1] = g;
        rgba[i * 4 + 2] = b;
        rgba[i * 4 + 3] = 200;
      }
    }

    // Encode as PNG via raw pixel data URI using canvas-compatible base64
    // We use a minimal PNG encoder since we're in a Node.js edge/server context
    const png = await encodePng(rgba, width, height);
    return { png, width, height };
  } catch {
    return null;
  }
}

// Minimal PNG encoder (no deps beyond built-in) using deflate via zlib
async function encodePng(rgba: Uint8Array, width: number, height: number): Promise<string> {
  // Build raw PNG using Node.js zlib
  const { deflateSync } = await import('zlib');

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  // Raw image data with filter byte per row
  const raw = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    raw[y * (1 + width * 4)] = 0; // filter type None
    for (let x = 0; x < width; x++) {
      const src = (y * width + x) * 4;
      const dst = y * (1 + width * 4) + 1 + x * 4;
      raw[dst] = rgba[src];
      raw[dst + 1] = rgba[src + 1];
      raw[dst + 2] = rgba[src + 2];
      raw[dst + 3] = rgba[src + 3];
    }
  }

  const compressed = deflateSync(raw, { level: 6 });

  function chunk(type: string, data: Buffer): Buffer {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeB = Buffer.from(type, 'ascii');
    const body = Buffer.concat([typeB, data]);
    const crc = crc32(body);
    const crcB = Buffer.alloc(4);
    crcB.writeUInt32BE(crc >>> 0, 0);
    return Buffer.concat([len, body, crcB]);
  }

  const png = Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ]);

  return png.toString('base64');
}

function crc32(buf: Buffer): number {
  const table = makeCrcTable();
  let crc = 0xffffffff;
  for (const byte of buf) {
    crc = (table[(crc ^ byte) & 0xff] ^ (crc >>> 8)) >>> 0;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

let _crcTable: Uint32Array | null = null;
function makeCrcTable(): Uint32Array {
  if (_crcTable) return _crcTable;
  _crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    _crcTable[n] = c;
  }
  return _crcTable;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const latStr = searchParams.get('lat');
  const lngStr = searchParams.get('lng');

  if (!latStr || !lngStr) {
    return NextResponse.json({ error: 'Missing lat/lng' }, { status: 400 });
  }

  const lat = parseFloat(latStr);
  const lng = parseFloat(lngStr);
  if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    return NextResponse.json({ error: 'Invalid lat/lng' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_SOLAR_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Solar API key not configured' }, { status: 500 });
  }

  const solarRes = await fetch(
    `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=LOW&key=${apiKey}`,
    { next: { revalidate: 86400 } }
  );

  if (!solarRes.ok) {
    if (solarRes.status === 404) {
      return NextResponse.json({ error: 'No building found at this location' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Solar API error' }, { status: solarRes.status });
  }

  const solar = await solarRes.json();
  const segments: RoofSegmentStat[] = solar.solarPotential.roofSegmentStats;
  const configs: PanelConfig[] = solar.solarPotential.solarPanelConfigs;

  // South-facing hemisphere: azimuth 90°–270°
  const goodIndices = new Set(
    segments
      .map((_: RoofSegmentStat, i: number) => i)
      .filter((i: number) => {
        const az = segments[i].azimuthDegrees;
        return az >= 90 && az <= 270;
      })
  );

  // Find the largest config that uses only good-facing segments
  let bestConfig = configs[0];
  for (const config of configs) {
    const allGood = config.roofSegmentSummaries.every((s) => goodIndices.has(s.segmentIndex));
    if (allGood) bestConfig = config;
  }

  const panelWatts: number = solar.solarPotential.panelCapacityWatts;
  const peakPowerKw = (bestConfig.panelsCount * panelWatts) / 1000;

  // Weighted average azimuth + pitch for PVGIS
  const totalPanels = bestConfig.panelsCount;
  const weightedAzimuth =
    bestConfig.roofSegmentSummaries.reduce((sum, s) => sum + s.azimuthDegrees * s.panelsCount, 0) / totalPanels;
  const weightedPitch =
    bestConfig.roofSegmentSummaries.reduce((sum, s) => sum + s.pitchDegrees * s.panelsCount, 0) / totalPanels;

  // PVGIS: 0=South, negative=East, positive=West
  const pvgisAspect = Math.round(weightedAzimuth - 180);
  const pvgisPitch = Math.round(weightedPitch);

  // Fetch PVGIS and data layers in parallel
  const [pvgisResult, dataLayersResult] = await Promise.allSettled([
    fetch(
      `https://re.jrc.ec.europa.eu/api/v5_2/PVcalc?lat=${lat}&lon=${lng}&peakpower=${peakPowerKw.toFixed(2)}&loss=14&angle=${pvgisPitch}&aspect=${pvgisAspect}&outputformat=json`,
      { signal: AbortSignal.timeout(9000), next: { revalidate: 86400 } }
    ).then((r) => (r.ok ? r.json() : null)),

    fetch(
      `https://solar.googleapis.com/v1/dataLayers:get?location.latitude=${lat}&location.longitude=${lng}&radius_meters=50&required_quality=LOW&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    ).then((r) => (r.ok ? r.json() : null)),
  ]);

  const pvgis = pvgisResult.status === 'fulfilled' ? pvgisResult.value : null;
  const dataLayers = dataLayersResult.status === 'fulfilled' ? dataLayersResult.value : null;

  // Build heatmap PNG from annual flux GeoTIFF
  let heatmap: { png: string; bounds: { north: number; south: number; east: number; west: number } } | null = null;
  if (dataLayers?.annualFluxUrl) {
    const result = await buildHeatmapPng(dataLayers.annualFluxUrl, apiKey);
    if (result && dataLayers.boundingBox) {
      heatmap = {
        png: result.png,
        bounds: {
          north: dataLayers.boundingBox.ne.latitude,
          south: dataLayers.boundingBox.sw.latitude,
          east: dataLayers.boundingBox.ne.longitude,
          west: dataLayers.boundingBox.sw.longitude,
        },
      };
    }
  }

  return NextResponse.json({ solar, bestConfig, pvgis, peakPowerKw, heatmap });
}
