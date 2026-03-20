import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import { contactContent } from "@/content/contact";

export const metadata = {
  title: "Kontakt | Solklart",
  description: "Kontakta Solklart för en kostnadsfri offert på solceller. Vi återkommer inom 24 timmar.",
};

export default function KontaktPage() {
  const { hero, info, map } = contactContent;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-3xl p-8">
                <h2 className="text-xl font-bold text-[#4a6fa5] mb-8">
                  Kontaktuppgifter
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f26621]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#f26621]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#4a6fa5] mb-1">
                        {info.address.title}
                      </h3>
                      {info.address.lines.map((line, index) => (
                        <p key={index} className="text-gray-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f26621]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#f26621]"
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#4a6fa5] mb-1">
                        {info.phone.title}
                      </h3>
                      <a
                        href={`tel:${info.phone.value}`}
                        className="text-[#f26621] hover:underline"
                      >
                        {info.phone.value}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        {info.phone.hours}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f26621]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#f26621]"
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#4a6fa5] mb-1">
                        {info.email.title}
                      </h3>
                      <a
                        href={`mailto:${info.email.value}`}
                        className="text-[#f26621] hover:underline"
                      >
                        {info.email.value}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 h-48 rounded-2xl overflow-hidden">
                  <Map lat={map.coordinates.lat} lng={map.coordinates.lng} />
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-[#4a6fa5] mb-8">
                  Skicka meddelande
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick quote CTA */}
      <section className="py-20 bg-[#4a6fa5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Få en kostnadsfri offert
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Ring oss direkt så hjälper vi dig att komma igång med solenergi. Inget köptvång.
          </p>
          <a
            href="tel:+358407202565"
            className="btn-gradient inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg font-semibold text-white"
          >
            <svg
              className="w-6 h-6"
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
            +358 40 720 2565
          </a>
        </div>
      </section>
    </>
  );
}
