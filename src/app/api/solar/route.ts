import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  if (!lat || !lng) {
    return NextResponse.json({ error: 'Missing lat/lng' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_SOLAR_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Solar API key not configured' }, { status: 500 });
  }

  const solarRes = await fetch(
    `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=LOW&key=${apiKey}`
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

  // Last config that uses only good-facing segments
  let bestConfig = configs[0];
  for (const config of configs) {
    const allGood = config.roofSegmentSummaries.every((s) => goodIndices.has(s.segmentIndex));
    if (allGood) bestConfig = config;
    else break;
  }

  const panelWatts: number = solar.solarPotential.panelCapacityWatts;
  const peakPowerKw = (bestConfig.panelsCount * panelWatts) / 1000;

  // Weighted average azimuth + pitch for PVGIS
  const totalPanels = bestConfig.panelsCount;
  const weightedAzimuth =
    bestConfig.roofSegmentSummaries.reduce((sum, s) => sum + s.azimuthDegrees * s.panelsCount, 0) / totalPanels;
  const weightedPitch =
    bestConfig.roofSegmentSummaries.reduce((sum, s) => sum + s.pitchDegrees * s.panelsCount, 0) / totalPanels;

  // PVGIS: 0=South, negative=East, positive=West (subtract 180 from Google azimuth)
  const pvgisAspect = Math.round(weightedAzimuth - 180);
  const pvgisPitch = Math.round(weightedPitch);

  let pvgis = null;
  try {
    const pvgisRes = await fetch(
      `https://re.jrc.ec.europa.eu/api/v5_2/PVcalc?lat=${lat}&lon=${lng}&peakpower=${peakPowerKw.toFixed(2)}&loss=14&angle=${pvgisPitch}&aspect=${pvgisAspect}&outputformat=json`,
      { signal: AbortSignal.timeout(9000) }
    );
    if (pvgisRes.ok) pvgis = await pvgisRes.json();
  } catch {
    // PVGIS unavailable — client falls back to Google DC estimate
  }

  return NextResponse.json({ solar, bestConfig, pvgis, peakPowerKw });
}
