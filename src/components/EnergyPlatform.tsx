import Image from "next/image";
import { homeContent } from "@/content/home";

export default function EnergyPlatform() {
  const { energyPlatform } = homeContent;

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video/Image placeholder */}
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-[#4a6fa5] flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
              alt="Energihantering dashboard"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a6fa5] to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#f26621] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium">Se hur appen fungerar</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4a6fa5] mb-6">
              {energyPlatform.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {energyPlatform.description}
            </p>
            <ul className="space-y-4">
              {energyPlatform.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f26621] flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
