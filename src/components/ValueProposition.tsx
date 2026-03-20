import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";

export default function ValueProposition() {
  const { valueProposition } = homeContent;

  return (
    <section className="py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4a6fa5] mb-6">
              {valueProposition.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {valueProposition.description}
            </p>
            <ul className="space-y-4 mb-10">
              {valueProposition.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f26621]/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-[#f26621]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/paket"
              className="btn-gradient inline-flex rounded-full px-8 py-4 text-base font-semibold text-white"
            >
              Se våra paket
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={valueProposition.image}
                alt="Solceller på tak"
                fill
                className="object-cover object-center brightness-90 saturate-90"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-[#f26621]/10 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-100 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
