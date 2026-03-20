import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import { homeContent } from "@/content/home";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-72 sm:pb-32">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <MuxPlayer
            playbackId={process.env.NEXT_PUBLIC_MUX_HERO_PLAYBACK_ID}
            autoPlay="muted"
            loop
            muted
            nohotkeys
            startTime={1}
            thumbnailTime={1}
            className="absolute inset-0 w-full h-full [--controls:none] [--media-object-fit:cover] [--media-object-position:center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/70"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-gray-200 leading-relaxed mb-10">
            {hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="btn-gradient rounded-full px-8 py-4 text-center text-base font-semibold text-white"
            >
              {hero.cta}
            </Link>
            <Link
              href="/paket"
              className="rounded-full border-2 border-white/30 px-8 py-4 text-center text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      {/* Feature cards at bottom */}
      <div className="absolute -bottom-24 left-0 right-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {homeContent.features.map((feature, index) => (
              <div
                key={feature.title}
                className={`animate-fade-in-up animation-delay-${(index + 1) * 100} bg-white rounded-2xl p-6 shadow-xl card-hover`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#f26621]/10 flex items-center justify-center mb-4">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="font-semibold text-[#4a6fa5] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    sun: (
      <svg className="w-6 h-6 text-[#f26621]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    battery: (
      <svg className="w-6 h-6 text-[#f26621]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    car: (
      <svg className="w-6 h-6 text-[#f26621]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    leaf: (
      <svg className="w-6 h-6 text-[#f26621]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  };

  return icons[name] || null;
}
