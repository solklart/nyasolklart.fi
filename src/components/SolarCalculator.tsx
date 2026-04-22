'use client';

import { useState, useRef, useCallback } from 'react';
import { useJsApiLoader, GoogleMap, Autocomplete, GroundOverlay } from '@react-google-maps/api';
import Link from 'next/link';

const LIBRARIES: ['places'] = ['places'];
const ELECTRICITY_PRICE_EUR = 0.13;
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

interface RoofSegmentSummary {
  pitchDegrees: number;
  azimuthDegrees: number;
  panelsCount: number;
  yearlyEnergyDcKwh: number;
  segmentIndex: number;
}

interface Heatmap {
  png: string;
  bounds: { north: number; south: number; east: number; west: number };
}

interface SolarResult {
  bestConfig: {
    panelsCount: number;
    yearlyEnergyDcKwh: number;
    roofSegmentSummaries: RoofSegmentSummary[];
  };
  peakPowerKw: number;
  heatmap: Heatmap | null;
  pvgis: {
    outputs: {
      totals: { fixed: { E_y: number } };
      monthly: { fixed: Array<{ month: number; E_m: number }> };
    };
  } | null;
  solar: {
    solarPotential: {
      panelCapacityWatts: number;
      carbonOffsetFactorKgPerMwh: number;
    };
  };
}

export default function SolarCalculator() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: LIBRARIES,
  });

  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SolarResult | null>(null);
  const [error, setError] = useState('');
  const [showHeatmap, setShowHeatmap] = useState(true);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const analyze = useCallback(async () => {
    const place = autocompleteRef.current?.getPlace();
    if (!place?.geometry?.location) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    setPosition({ lat, lng });
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch(`/api/solar?lat=${lat}&lng=${lng}`);
      if (res.status === 404) throw new Error('no-building');
      if (!res.ok) throw new Error('api-error');
      setResult(await res.json());
    } catch (e) {
      const msg = e instanceof Error ? e.message : '';
      setError(
        msg === 'no-building'
          ? 'Vi hittade ingen byggnad på den adressen. Prova en mer exakt adress.'
          : 'Något gick fel. Kontrollera adressen och försök igen.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const onPlaceChanged = useCallback(() => {
    analyze();
  }, [analyze]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') analyze();
    },
    [analyze]
  );

  const annualKwh = result?.pvgis?.outputs.totals.fixed.E_y ?? result?.bestConfig.yearlyEnergyDcKwh ?? 0;
  const annualSavings = Math.round(annualKwh * ELECTRICITY_PRICE_EUR);
  const co2Kg = result
    ? Math.round((annualKwh * result.solar.solarPotential.carbonOffsetFactorKgPerMwh) / 1000)
    : 0;
  const monthlyData = result?.pvgis?.outputs.monthly.fixed ?? [];
  const maxMonthly = Math.max(...monthlyData.map((m) => m.E_m), 1);
  const panelWp = result ? Math.round(result.solar.solarPotential.panelCapacityWatts) : 0;

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#f26621]/10 text-[#f26621] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Gratis analys
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4a6fa5] mb-4">
            Beräkna din solpotential
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ange din adress — vi analyserar takets solpotential på sekunder med hjälp av satellitdata och klimatmodeller.
          </p>
        </div>

        {/* Search input */}
        <div className="max-w-2xl mx-auto mb-12">
          {isLoaded ? (
            <Autocomplete
              onLoad={(ac) => { autocompleteRef.current = ac; }}
              onPlaceChanged={onPlaceChanged}
              options={{ componentRestrictions: { country: 'fi' }, types: ['address'] }}
            >
              <div className="flex gap-3 shadow-lg rounded-full bg-white border border-gray-100 p-2">
                <div className="flex items-center pl-4 text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ange din adress i Finland..."
                  className="flex-1 py-3 bg-transparent text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  onKeyDown={onKeyDown}
                />
                <button
                  onClick={analyze}
                  disabled={loading}
                  className="btn-gradient rounded-full px-7 py-3 text-sm font-semibold text-white whitespace-nowrap disabled:opacity-60"
                >
                  {loading ? 'Analyserar...' : 'Analysera'}
                </button>
              </div>
            </Autocomplete>
          ) : (
            <div className="h-16 bg-white rounded-full shadow animate-pulse" />
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block w-12 h-12 border-4 border-[#4a6fa5] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-500">Analyserar takets solpotential...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-2xl p-6 text-center text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Results */}
        {result && position && !loading && (
          <div className="space-y-6 animate-fade-in">

            {/* Satellite map with heatmap overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '420px' }}>
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={position}
                zoom={20}
                mapTypeId="satellite"
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                  fullscreenControl: true,
                  tilt: 0,
                  rotateControl: false,
                }}
              >
                {result.heatmap && showHeatmap && (
                  <GroundOverlay
                    url={`data:image/png;base64,${result.heatmap.png}`}
                    bounds={result.heatmap.bounds}
                    opacity={0.75}
                  />
                )}
              </GoogleMap>

              {/* Heatmap toggle */}
              {result.heatmap && (
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <button
                    onClick={() => setShowHeatmap((v) => !v)}
                    className="bg-white/90 backdrop-blur rounded-full px-4 py-2 text-xs font-semibold text-gray-700 shadow-md flex items-center gap-2"
                  >
                    <span
                      className="w-3 h-3 rounded-sm"
                      style={{
                        background: showHeatmap
                          ? 'linear-gradient(to right, #3b82f6, #22c55e, #facc15, #ef4444)'
                          : '#d1d5db',
                      }}
                    />
                    {showHeatmap ? 'Solpotential på' : 'Solpotential av'}
                  </button>

                  {/* Color scale legend */}
                  {showHeatmap && (
                    <div className="bg-white/90 backdrop-blur rounded-full px-3 py-2 shadow-md flex items-center gap-2">
                      <span className="text-[10px] text-gray-500">Låg</span>
                      <div
                        className="w-20 h-2.5 rounded-full"
                        style={{ background: 'linear-gradient(to right, #3b82f6, #22c55e, #facc15, #ef4444)' }}
                      />
                      <span className="text-[10px] text-gray-500">Hög</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                label="Solpaneler"
                value={result.bestConfig.panelsCount.toString()}
                unit={`st × ${panelWp} Wp`}
                icon="panel"
              />
              <StatCard
                label="Systemstorlek"
                value={result.peakPowerKw.toFixed(1)}
                unit="kWp"
                icon="bolt"
              />
              <StatCard
                label="Årsproduktion"
                value={Math.round(annualKwh).toLocaleString('sv-FI')}
                unit="kWh/år"
                icon="sun"
                note={result.pvgis ? 'PVGIS AC-beräkning' : 'Google DC-uppskattning'}
              />
              <StatCard
                label="Uppskattad besparing"
                value={annualSavings.toLocaleString('sv-FI')}
                unit="€/år"
                icon="euro"
                note={`vid ${(ELECTRICITY_PRICE_EUR * 100).toFixed(0)} ct/kWh`}
              />
            </div>

            {/* Monthly chart */}
            {monthlyData.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-base font-semibold text-[#4a6fa5] mb-6">
                  Månadsproduktion (kWh AC)
                </h3>
                <div className="flex items-end gap-1.5 h-36">
                  {monthlyData.map((m) => (
                    <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-[10px] text-gray-400 leading-none">
                        {Math.round(m.E_m)}
                      </span>
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-[#f26621] to-[#fbbf24] transition-all"
                        style={{ height: `${Math.max(4, (m.E_m / maxMonthly) * 100)}px` }}
                      />
                      <span className="text-[10px] text-gray-400">
                        {MONTH_NAMES[m.month - 1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CO2 + CTA */}
            <div className="bg-[#4a6fa5] rounded-3xl p-8 sm:p-10 text-white">
              <div className="sm:flex items-center justify-between gap-8">
                <div className="mb-6 sm:mb-0">
                  <p className="text-xl font-semibold mb-1">
                    {result.bestConfig.panelsCount} paneler · {result.peakPowerKw.toFixed(1)} kWp
                  </p>
                  <p className="text-white/70 text-sm">
                    Sparar uppskattningsvis {co2Kg.toLocaleString('sv-FI')} kg CO₂ per år ·{' '}
                    {result.pvgis ? 'PVGIS-beräknad produktion' : 'Google Solar-uppskattning'}
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="btn-gradient inline-flex rounded-full px-8 py-4 text-base font-semibold text-white whitespace-nowrap"
                >
                  Begär kostnadsfri offert
                </Link>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({
  label, value, unit, icon, note,
}: {
  label: string; value: string; unit: string; icon: string; note?: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 card-hover">
      <div className="w-9 h-9 rounded-xl bg-[#f26621]/10 flex items-center justify-center mb-3">
        <StatIcon name={icon} />
      </div>
      <div className="flex items-baseline gap-1 flex-wrap">
        <span className="text-2xl font-bold text-[#4a6fa5]">{value}</span>
        <span className="text-xs text-gray-400">{unit}</span>
      </div>
      <p className="text-sm text-gray-500 mt-0.5">{label}</p>
      {note && <p className="text-[10px] text-gray-300 mt-1">{note}</p>}
    </div>
  );
}

function StatIcon({ name }: { name: string }) {
  const cls = 'w-5 h-5 text-[#f26621]';
  switch (name) {
    case 'panel':
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>;
    case 'bolt':
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case 'sun':
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    case 'euro':
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    default:
      return null;
  }
}
