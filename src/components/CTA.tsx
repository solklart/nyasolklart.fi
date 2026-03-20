import Link from "next/link";
import { homeContent } from "@/content/home";

export default function CTA() {
  const { cta } = homeContent;

  return (
    <section className="py-24 bg-[#f4f4f5]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#4a6fa5] mb-6">
          {cta.title}
        </h2>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          {cta.description}
        </p>
        <Link
          href="/kontakt"
          className="btn-gradient inline-flex rounded-full px-10 py-5 text-lg font-semibold text-white"
        >
          {cta.button}
        </Link>
      </div>
    </section>
  );
}
