"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import { faqContent } from "@/content/faq";

export default function FAQPage() {
  const { hero, categories, contact } = faqContent;
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Category navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-28 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      activeCategory === category.id
                        ? "bg-[#4a6fa5] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* FAQ content */}
            <div className="lg:col-span-3">
              <div id={activeCategory}>
                <h2 className="text-2xl font-bold text-[#4a6fa5] mb-8">
                  {currentCategory?.name}
                </h2>
                {currentCategory && (
                  <FAQ items={currentCategory.questions} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">
            {contact.title}
          </h2>
          <p className="text-gray-600 mb-8">{contact.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-[#4a6fa5] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#2a3a52] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#4a6fa5] text-[#4a6fa5] rounded-full px-8 py-4 font-semibold hover:bg-[#4a6fa5] hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {contact.email}
            </a>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-20 bg-[#4a6fa5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Redo att ta steget mot solenergi?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Kontakta oss idag för en kostnadsfri konsultation och offert.
          </p>
          <Link
            href="/kontakt"
            className="btn-gradient inline-flex rounded-full px-10 py-5 text-lg font-semibold text-white"
          >
            Få en offert
          </Link>
        </div>
      </section>
    </>
  );
}
