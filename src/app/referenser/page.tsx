"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { referencesContent } from "@/content/references";

export default function ReferencerPage() {
  const { hero, categories, projects, stats } = referencesContent;
  const [activeCategory, setActiveCategory] = useState("Alla");

  const filteredProjects =
    activeCategory === "Alla"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#f26621] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#4a6fa5] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-3xl overflow-hidden card-hover"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#f26621] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4a6fa5] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {project.location} • {project.year}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-white rounded-xl">
                    <div>
                      <p className="text-xs text-gray-500">Effekt</p>
                      <p className="font-semibold text-[#4a6fa5]">
                        {project.power}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Paneler</p>
                      <p className="font-semibold text-[#4a6fa5]">
                        {project.panels} st
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="border-t pt-4">
                    <p className="text-sm italic text-gray-600 mb-2">
                      &quot;{project.quote}&quot;
                    </p>
                    <p className="text-sm font-medium text-[#4a6fa5]">
                      – {project.customer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4a6fa5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Vill du bli vår nästa referens?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Kontakta oss idag för en kostnadsfri offert så hjälper vi dig att komma igång med solenergi.
          </p>
          <a
            href="/kontakt"
            className="btn-gradient inline-flex rounded-full px-10 py-5 text-lg font-semibold text-white"
          >
            Få en offert
          </a>
        </div>
      </section>
    </>
  );
}
