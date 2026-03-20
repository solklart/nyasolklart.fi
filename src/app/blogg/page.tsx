"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogContent } from "@/content/blog";

export default function BloggPage() {
  const { hero, categories, posts } = blogContent;
  const [activeCategory, setActiveCategory] = useState("Alla");

  const filteredPosts =
    activeCategory === "Alla"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      {/* Featured post */}
      {featuredPost && activeCategory === "Alla" && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blogg/${featuredPost.slug}`}
              className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#f26621] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Utvald artikel
                  </span>
                  <span className="text-sm text-gray-500">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#4a6fa5] mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

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

      {/* Posts grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="bg-gray-50 rounded-3xl overflow-hidden card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-[#f26621]">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4a6fa5] mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
