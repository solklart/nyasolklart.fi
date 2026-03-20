import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Allmänna villkor | Solklart",
  description: "Allmänna villkor för köp och installation av solcellssystem hos Solklart – The Solar Company Oy.",
};

const sections = [
  { id: "allmannat", title: "1. Allmänt" },
  { id: "offert", title: "2. Offert och beställning" },
  { id: "priser", title: "3. Priser och betalning" },
  { id: "installation", title: "4. Installation" },
  { id: "leveranstid", title: "5. Leveranstid" },
  { id: "garanti", title: "6. Garanti" },
  { id: "energiproduktion", title: "7. Energiproduktion" },
  { id: "ansvar", title: "8. Ansvarsbegränsning" },
  { id: "tvist", title: "9. Tvistlösning" },
  { id: "andring", title: "10. Ändringar av villkoren" },
];

export default function VillkorPage() {
  return (
    <>
      <PageHero
        title="Allmänna villkor"
        subtitle="Villkor för köp och installation av solcellssystem"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Table of contents */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-lg font-bold text-[#4a6fa5] mb-4">Innehållsförteckning</h2>
            <ol className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-[#4a6fa5] hover:text-[#f26621] transition-colors text-sm"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-12 text-gray-700">

            {/* 1 */}
            <div id="allmannat">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">1. Allmänt</h2>
              <p className="leading-relaxed">
                Dessa allmänna villkor gäller för alla avtal om köp och installation av solcellssystem och tillhörande produkter som ingås mellan <strong>The Solar Company Oy</strong> (FO-nummer 3157005-7, marknadsföringsnamn Solklart, Rådhustorget 6, 10600 Ekenäs, Finland, nedan "Solklart") och kunden. Genom att acceptera en offert eller underteckna ett avtal godkänner kunden dessa villkor. Dessa villkor gäller för konsumenter såväl som företagskunder, med undantag för de avsnitt som uttryckligen avser konsumenter.
              </p>
            </div>

            {/* 2 */}
            <div id="offert">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">2. Offert och beställning</h2>
              <p className="leading-relaxed mb-4">
                En offert från Solklart är giltig i 30 dagar från utfärdandedatumet om inget annat anges. Avtal ingås när kunden skriftligen accepterat offerten och Solklart bekräftat beställningen.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Ångerrätt för konsumenter:</strong> Konsumenter har rätt att ångra köpet inom 14 dagar från avtalets ingående i enlighet med finsk konsumentskyddslag (kapitel 6). Ångerrätten utövas genom skriftligt meddelande till <a href="mailto:info@solklart.fi" className="text-[#f26621] hover:underline">info@solklart.fi</a>. Observera att ångerrätten upphör om installationsarbetet har påbörjats på kundens uttryckliga begäran och kunden har informerats om detta.
              </p>
              <p className="leading-relaxed">
                Eventuella ändringar i beställningen efter avtalets ingående ska avtalas skriftligen och kan medföra justering av pris och leveranstid.
              </p>
            </div>

            {/* 3 */}
            <div id="priser">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">3. Priser och betalning</h2>
              <p className="leading-relaxed mb-4">
                Alla priser anges i euro och inkluderar moms (25,5 %) om inget annat anges. Priset i den accepterade offerten är bindande och inkluderar material, frakt och installation enligt offertens specifikation.
              </p>
              <p className="leading-relaxed mb-4">
                Betalning sker normalt i två delar: en förskottsbetalning vid beställning (vanligtvis 30–50 % av totalsumman) och slutbetalning vid färdigställd installation. Betalningsvillkor anges i offerten. Vid försenad betalning äger Solklart rätt att debitera dröjsmålsränta i enlighet med finsk räntelag.
              </p>
              <p className="leading-relaxed">
                Solklart förbehåller sig äganderätten till levererade produkter tills full betalning erhållits.
              </p>
            </div>

            {/* 4 */}
            <div id="installation">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">4. Installation</h2>
              <p className="leading-relaxed mb-4">
                Solklart ansvarar för att installationen utförs fackmässigt och i enlighet med gällande tekniska föreskrifter och standarder i Finland.
              </p>
              <p className="leading-relaxed mb-4 font-medium">Kundens ansvar:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Säkerställa att taket är i tillräckligt gott skick för installation.</li>
                <li>Inhämta eventuella tillstånd som krävs av byggnadstillsyn eller elnätsbolag, om inte annat avtalats.</li>
                <li>Ge Solklarts montörer fri och säker tillgång till fastigheten på avtalad installationsdag.</li>
                <li>Se till att det finns tillgång till el och vatten på arbetsplatsen.</li>
              </ul>
              <p className="leading-relaxed">
                Om installationen försvåras av omständigheter som inte framgick vid offertens utfärdande – t.ex. takskador, oförutsedda elektriska förhållanden eller behov av extra arbete – kan Solklart komma att fakturera tillkommande kostnader efter överenskommelse med kunden.
              </p>
            </div>

            {/* 5 */}
            <div id="leveranstid">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">5. Leveranstid</h2>
              <p className="leading-relaxed mb-4">
                Beräknad leverans- och installationstid anges i offerten. Tiderna är ungefärliga och kan påverkas av tillgång på material, väderleksförhållanden, kötider hos elnätsbolag eller andra omständigheter utanför Solklarts kontroll.
              </p>
              <p className="leading-relaxed">
                Solklart ansvarar inte för förseningar orsakade av force majeure, såsom naturkatastrofer, strejker, myndighetsbeslut, pandemi eller leverantörsproblem. Vid väsentlig försening informerar Solklart kunden snarast möjligt.
              </p>
            </div>

            {/* 6 */}
            <div id="garanti">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">6. Garanti</h2>
              <p className="leading-relaxed mb-4">
                Solklart lämnar följande garantier, om inte annat anges i offerten:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Solpaneler:</strong> 25 års produktgaranti och effektgaranti enligt tillverkarens villkor.</li>
                <li><strong>Växelriktare (inverter):</strong> 10 års garanti enligt tillverkarens villkor.</li>
                <li><strong>Installationsarbete:</strong> 2 års arbetsgaranti på utförd installation.</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Garantin täcker tillverknings- och materialfel samt fel uppkomna vid installation. Garantin gäller inte för skador orsakade av felaktig användning, olyckshändelse, åska, yttre påverkan, obehörig modifiering eller bristande underhåll.
              </p>
              <p className="leading-relaxed">
                Garantiärenden anmäls skriftligen till <a href="mailto:info@solklart.fi" className="text-[#f26621] hover:underline">info@solklart.fi</a> med beskrivning av felet och dokumentation (foton om möjligt).
              </p>
            </div>

            {/* 7 */}
            <div id="energiproduktion">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">7. Energiproduktion</h2>
              <p className="leading-relaxed mb-4">
                Uppskattningar av energiproduktion som anges i offert eller presentationsmaterial är beräkningar baserade på systemets storlek, takets lutning och orientering samt genomsnittliga solstrålningsvärden för regionen. Faktisk produktion kan variera beroende på väderlek, årstid, skuggning och andra faktorer.
              </p>
              <p className="leading-relaxed">
                Solklart lämnar ingen garanti för en specifik energiproduktionsnivå. Uppskattningarna ska ses som vägledande och utgör inte en del av avtalet.
              </p>
            </div>

            {/* 8 */}
            <div id="ansvar">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">8. Ansvarsbegränsning</h2>
              <p className="leading-relaxed mb-4">
                Solklarts skadeståndsansvar är begränsat till direkt skada och uppgår till maximalt det belopp kunden betalat för den aktuella beställningen. Solklart ansvarar inte för indirekta skador, utebliven inkomst, produktionsbortfall eller annan följdskada, såvida inte skadan orsakats av grov vårdslöshet eller uppsåt.
              </p>
              <p className="leading-relaxed">
                Solklart ansvarar inte för skador på fastigheten som beror på befintliga brister i tak, konstruktion eller elsystem som inte var kända vid installationstillfället. Kunden ansvarar för att fastigheten är i lämpligt skick för installation.
              </p>
            </div>

            {/* 9 */}
            <div id="tvist">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">9. Tvistlösning</h2>
              <p className="leading-relaxed mb-4">
                Dessa villkor regleras av finsk lag. Vid tvist uppmanas parterna i första hand att lösa tvisten genom direkta förhandlingar.
              </p>
              <p className="leading-relaxed mb-4">
                Konsumenter har rätt att hänskjuta en tvist till <strong>Konsumenttvistenämnden</strong> (kuluttajariitalautakunta, <a href="https://www.kuluttajariita.fi" target="_blank" rel="noopener noreferrer" className="text-[#f26621] hover:underline">www.kuluttajariita.fi</a>), som erbjuder kostnadsfri och opartisk tvistlösning.
              </p>
              <p className="leading-relaxed">
                Tvister som inte kan lösas i godo avgörs av Raseborgs tingsrätt som första instans, om inte tvingande lagstiftning föreskriver annat forum.
              </p>
            </div>

            {/* 10 */}
            <div id="andring">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">10. Ändringar av villkoren</h2>
              <p className="leading-relaxed">
                Solklart förbehåller sig rätten att uppdatera dessa allmänna villkor. Den senaste versionen publiceras alltid på vår webbplats. Ändringar påverkar inte redan ingångna avtal. Dessa villkor uppdaterades senast den <strong>20 mars 2026</strong>.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-2xl p-8 mt-8">
              <h3 className="text-lg font-bold text-[#4a6fa5] mb-3">Frågor om villkoren?</h3>
              <p className="text-gray-600 mb-2">Kontakta oss gärna:</p>
              <ul className="space-y-1 text-gray-700">
                <li><strong>E-post:</strong> <a href="mailto:info@solklart.fi" className="text-[#f26621] hover:underline">info@solklart.fi</a></li>
                <li><strong>Telefon:</strong> <a href="tel:+358407202565" className="text-[#f26621] hover:underline">+358 40 720 2565</a></li>
                <li><strong>Adress:</strong> The Solar Company Oy, Rådhustorget 6, 10600 Ekenäs, Finland</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
