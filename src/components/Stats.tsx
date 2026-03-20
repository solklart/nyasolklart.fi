import { homeContent } from "@/content/home";

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-400 via-orange-300 to-rose-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {homeContent.stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
