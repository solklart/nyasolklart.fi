import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { aboutContent } from "@/content/about";

export const metadata = {
  title: "Om oss | Solklart",
  description: "Lär känna Solklart - din lokala partner för solenergi i södra Finland sedan 2014.",
};

export default function OmOssPage() {
  const { hero, mission, story, values, impact, careers } = aboutContent;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#4a6fa5] mb-6">
                {mission.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {mission.description}
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={mission.image}
                alt="Solklart mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4a6fa5] mb-12 text-center">
            {story.title}
          </h2>
          <div className="space-y-10">
            {story.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-[#4a6fa5] mb-3">
                  {section.heading}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4a6fa5] text-center mb-16">
            Våra värderingar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#f26621]/10 flex items-center justify-center">
                  <ValueIcon name={value.icon} />
                </div>
                <h3 className="text-xl font-bold text-[#4a6fa5] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-to-r from-amber-400 via-orange-300 to-rose-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{impact.title}</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16">
            {impact.description}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="karriar" className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#4a6fa5] mb-4">
            {careers.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{careers.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {careers.benefits.map((benefit, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {benefit}
              </span>
            ))}
          </div>
          <Link
            href="/kontakt"
            className="btn-gradient inline-flex rounded-full px-8 py-4 font-semibold text-white"
          >
            {careers.cta}
          </Link>
        </div>
      </section>
    </>
  );
}

function ValueIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    quality: (
      <svg
        className="w-8 h-8 text-[#f26621]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    local: (
      <svg
        className="w-8 h-8 text-[#f26621]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    sustainability: (
      <svg
        className="w-8 h-8 text-[#f26621]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    transparency: (
      <svg
        className="w-8 h-8 text-[#f26621]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  };

  return icons[name] || null;
}
