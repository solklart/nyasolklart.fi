import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogContent } from "@/content/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogContent.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogContent.posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Artikel hittades inte" };
  }

  return {
    title: `${post.title} | Solklart Blogg`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogContent.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#4a6fa5] to-[#2a3a52]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogg"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Tillbaka till bloggen
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#f26621] text-white text-sm font-medium px-4 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-300">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-300">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="relative -mt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-[#4a6fa5] prose-a:text-[#f26621] prose-strong:text-[#4a6fa5]">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-12 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-8 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="ml-6">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </article>

          {"specTable" in post && post.specTable && (
            <div className="mt-12">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="grid grid-cols-2 bg-gray-100 px-6 py-4">
                  <span className="font-bold text-[#4a6fa5]">Egenskap</span>
                  <span className="font-bold text-[#4a6fa5]">Värde</span>
                </div>
                {(post.specTable as { caption: string; rows: { label: string; value: string }[] }).rows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-2 px-6 py-4 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <span className="text-gray-700">{row.label}</span>
                    <span className="text-gray-700">{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 italic mt-3">
                {(post.specTable as { caption: string; rows: { label: string; value: string }[] }).caption}
              </p>
            </div>
          )}

          {/* Share */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-gray-500 mb-4">Dela artikeln:</p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#f26621] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#f26621] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">
            Intresserad av solceller?
          </h2>
          <p className="text-gray-600 mb-8">
            Kontakta oss för en kostnadsfri offert och ta steget mot solenergi.
          </p>
          <Link
            href="/kontakt"
            className="btn-gradient inline-flex rounded-full px-8 py-4 font-semibold text-white"
          >
            Få en offert
          </Link>
        </div>
      </section>
    </>
  );
}
