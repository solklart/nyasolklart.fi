import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { packagesContent } from "@/content/packages";

export const metadata = {
  title: "Solceller & paket | Solklart",
  description: "Välj ett färdigt solcellspaket med AIKO Neostar 2S+ och Sungrow växelriktare. Alla priser inkluderar installation och 25 års garanti.",
};

const specs = [
  { label: "Modell", value: "AIKO Neostar 2S+" },
  { label: "Effekt per panel", value: "460 W" },
  { label: "Verkningsgrad", value: "23,1 %" },
  { label: "Celltyp", value: "N-Type ABC (All Back Contact)" },
  { label: "Glas", value: "Dubbelglas, 2,0 + 2,0 mm härdat" },
  { label: "Ram", value: "Svart anodiserat aluminium" },
  { label: "Antal celler", value: "108 st (6×18)" },
  { label: "Mått", value: "1757 × 1134 × 30 mm" },
  { label: "Vikt", value: "24,2 kg" },
  { label: "Temperaturkoefficient (Pmax)", value: "−0,26 %/°C" },
  { label: "Produktgaranti", value: "25 år" },
  { label: "Effektgaranti", value: "30 år" },
  { label: "Effekt kvar efter 30 år", value: "≥ 88,85 %" },
  { label: "Degradering år 2–30", value: "≤ 0,35 % / år" },
];

export default function SolpanelerPage() {
  const { packages, addons, financing, taxBenefits } = packagesContent;

  return (
    <>
      <PageHero
        title="Solceller & paket"
        subtitle="Färdiga paket med AIKO Neostar 2S+ och Sungrow växelriktare – installation ingår"
      />

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4a6fa5] mb-4">Välj ditt paket</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Alla paket inkluderar AIKO 460W-paneler, Sungrow växelriktare, montering, kabeldragning och driftsättning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-3xl shadow-lg card-hover overflow-hidden ${
                  pkg.popular ? "ring-2 ring-[#f26621]" : ""
                }`}
              >
                {/* Campaign ribbon */}
                <div className="absolute top-6 -left-8 w-36 bg-gradient-to-r from-[#f26621] to-amber-500 py-1.5 text-center shadow-md -rotate-45 z-10">
                  <span className="text-white text-xs font-bold tracking-wider uppercase">Vårkampanj</span>
                </div>

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#4a6fa5] mb-2">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="inline-block bg-[#4a6fa5] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Mest populär
                      </span>
                    )}
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <p className="text-sm text-gray-400 line-through mb-1">Ord. {pkg.originalPrice} €</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#4a6fa5]">{pkg.price}</span>
                      <span className="text-xl text-gray-600 ml-1">{pkg.priceUnit}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{pkg.priceNote}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Paneler</p>
                      <p className="font-semibold text-[#4a6fa5]">{pkg.panels}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Effekt</p>
                      <p className="font-semibold text-[#4a6fa5]">{pkg.power}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Produktion</p>
                      <p className="font-semibold text-[#4a6fa5]">{pkg.production}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Besparing</p>
                      <p className="font-semibold text-[#f26621]">{pkg.savings}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#f26621] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className={`w-full block text-center rounded-full px-6 py-4 font-semibold transition-all ${
                      pkg.popular ? "btn-gradient text-white" : "bg-gray-100 text-[#4a6fa5] hover:bg-gray-200"
                    }`}
                  >
                    Få offert
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax benefits */}
      <section className="py-20 bg-[#4a6fa5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{taxBenefits.title}</h2>
              <p className="text-white/80 mb-8">{taxBenefits.description}</p>
              <ul className="space-y-4">
                {taxBenefits.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #fb7185 100%)" }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Link href="/kontakt" className="btn-gradient inline-flex rounded-full px-10 py-5 text-lg font-semibold text-white">
                Kontakta oss för mer info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AIKO panel intro */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#f26621]/10 text-[#f26621] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                AIKO Neostar 2S+ · Red Dot Award 2023
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4a6fa5] mb-6 leading-tight">
                Panelen som ingår i alla våra paket
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vi valde AIKO Neostar 2S+ efter att ha utvärderat paneler från ett flertal tillverkare. Det som avgjorde var kombinationen av n-type ABC-teknik, dubbelglas och en av marknadens starkaste garantier – 30 år på effekten, med Munich Re som garantipartner.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                AIKO är klassad som Tier 1-tillverkare av BloombergNEF. Det är en panel byggd för att hålla – och leverera – i decennier.
              </p>
              <a
                href="/aiko-neostar-datablad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#f26621] font-semibold hover:underline"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Ladda ner datablad (PDF)
              </a>
            </div>
            <div className="relative">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                <Image src="/Aiko-460.webp" alt="AIKO Neostar 2S+ solpanel" fill className="object-cover object-center" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-56 h-56 bg-[#f26621]/10 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-28 h-28 bg-amber-100 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Back contact */}
      <section className="py-20 bg-[#4a6fa5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                ABC – All Back Contact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Inga synliga ledningar.<br />Bara ren panel.
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I en traditionell solpanel löper metalltrådar synligt över cellernas framsida. De reflekterar ljus och blockerar en del av cellen. AIKO:s ABC-teknik flyttar <strong className="text-white">alla kontakter till baksidan</strong> – framsidan är helt ren, djupsvart och utan ett enda synligt metalltråd.
              </p>
              <ul className="space-y-3">
                {[
                  "Hela cellens yta tar emot solljus – utan hinder",
                  "Lägre effektförlust vid höga temperaturer",
                  "Renare utseende som passar alla typer av tak",
                  "Mikrosprickor sprider sig inte längs bussbars",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #fb7185 100%)" }}
                    >
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/Aiko-460.webp" alt="AIKO panel – ren framsida utan synliga kontakter" fill className="object-cover object-center brightness-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Framsidan är helt fri från metalltrådar</p>
                <p className="text-white/70 text-sm mt-1">Alla kontakter sitter på baksidan – osynliga och skyddade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spec table */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4a6fa5] text-center mb-12">Tekniska specifikationer</h2>
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
            {specs.map((spec, i) => (
              <div key={i} className={`flex justify-between items-center px-8 py-5 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <span className="text-gray-600">{spec.label}</span>
                <span className="font-semibold text-[#4a6fa5]">{spec.value}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/aiko-neostar-datablad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f26621] font-semibold hover:underline text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Fullständigt datablad (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Sungrow */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/sungrow-inverter.webp" alt="Sungrow SG RT växelriktare" fill className="object-cover object-center" />
            </div>
            <div>
              <span className="inline-block bg-[#f26621]/10 text-[#f26621] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Sungrow SG RT-serien
              </span>
              <h2 className="text-3xl font-bold text-[#4a6fa5] mb-6 leading-tight">
                Växelriktaren som styr din solel
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Sungrow är en av världens största tillverkare av växelriktare med över 400 GW installerad kapacitet globalt. SG RT-serien omvandlar solpanelernas likström till nätanpassad växelström med upp till 98,5 % verkningsgrad – tyst, kompakt och utan fläktar.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "98,5 % maxverkningsgrad – minimalt svinn",
                  "2 oberoende MPPT-ingångar för optimering per taksektion",
                  "Inbyggt AFCI-ljusbågsskydd och överspänningsskydd Type II",
                  "WLAN/Ethernet – realtidsövervakning via iSolarCloud-appen",
                  "Naturlig kylning – tyst drift dygnet runt",
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f26621] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/blogg/sungrow-sg-rt-vaxelriktare" className="btn-gradient inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white">
                  Läs mer om Sungrow
                </Link>
                <a href="/sungrow-sg-rt-datablad.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#f26621] font-semibold hover:underline text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Datablad (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section id="batteri" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4a6fa5] mb-4">Tillval & tillägg</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Komplettera ditt solcellssystem med batterilager, elbilsladdare eller serviceavtal.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {addons.map((addon) => (
              <div key={addon.id} id={addon.id} className="bg-white rounded-3xl overflow-hidden card-hover">
                <div className="relative h-48">
                  <Image src={addon.image} alt={addon.name} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#4a6fa5] mb-3">{addon.name}</h3>
                  <p className="text-gray-600 mb-6">{addon.description}</p>
                  {addon.options.length > 0 && (
                    <ul className="space-y-3">
                      {addon.options.map((option, index) => (
                        <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                          <span className="text-gray-700">{option.name}</span>
                          <span className="font-semibold text-[#4a6fa5]">{option.price}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4a6fa5] mb-4">{financing.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{financing.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {financing.options.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-[#4a6fa5] mb-3">{option.name}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-16 bg-gradient-to-r from-amber-400 via-orange-300 to-rose-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "460 W", label: "Effekt per panel" },
              { value: "23,1 %", label: "Verkningsgrad" },
              { value: "30 år", label: "Effektgaranti" },
              { value: "≥ 88,85 %", label: "Effekt kvar efter 30 år" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-white/80 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#4a6fa5] mb-4">
            Osäker på vilket paket som passar dig?
          </h2>
          <p className="text-lg text-gray-500 mb-10">
            Vi gör ett kostnadsfritt platsbesök och tar fram ett förslag anpassat för just din fastighet.
          </p>
          <Link href="/kontakt" className="btn-gradient inline-flex justify-center rounded-full px-10 py-5 text-lg font-semibold text-white">
            Boka kostnadsfritt besök
          </Link>
        </div>
      </section>
    </>
  );
}
