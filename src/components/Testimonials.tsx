"use client";

import Image from "next/image";
import { homeContent } from "@/content/home";

export default function Testimonials() {
  const { testimonials } = homeContent;

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4a6fa5] mb-4">
            Vad våra kunder säger
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Läs vad våra nöjda kunder har att säga om sina upplevelser med Solklart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-3xl p-8 card-hover"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-[#f26621]/20">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Image */}
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={testimonial.image}
                  alt={`Installation hos ${testimonial.author}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#4a6fa5]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>

              {/* Stars */}
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#f26621]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
