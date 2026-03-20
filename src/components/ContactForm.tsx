"use client";

import { useState } from "react";
import { contactContent } from "@/content/contact";

export default function ContactForm() {
  const { form } = contactContent;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Formspree integration placeholder
    // In production, replace with actual Formspree endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
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
        <p className="text-green-800 font-medium">{form.success}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xykdazbn"
      method="POST"
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {form.fields.name.label}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder={form.fields.name.placeholder}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#f26621] focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {form.fields.email.label}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder={form.fields.email.placeholder}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#f26621] focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {form.fields.phone.label}
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder={form.fields.phone.placeholder}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#f26621] focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {form.fields.subject.label}
          </label>
          <select
            name="subject"
            id="subject"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#f26621] focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Välj ämne...</option>
            {form.fields.subject.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {form.fields.message.label}
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          placeholder={form.fields.message.placeholder}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#f26621] focus:border-transparent outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full btn-gradient rounded-full px-8 py-4 text-base font-semibold text-white"
      >
        {form.submit}
      </button>
    </form>
  );
}
