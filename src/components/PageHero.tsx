interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-amber-400 via-orange-300 to-rose-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
