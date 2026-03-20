import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Integritetspolicy | Solklart",
  description: "Läs om hur Solklart – The Solar Company Oy samlar in, använder och skyddar dina personuppgifter.",
};

const sections = [
  { id: "introduktion", title: "1. Introduktion" },
  { id: "personuppgiftsansvarig", title: "2. Personuppgiftsansvarig" },
  { id: "uppgifter-vi-behandlar", title: "3. Personuppgifter vi behandlar" },
  { id: "insamling", title: "4. Hur vi samlar in dina personuppgifter" },
  { id: "syften", title: "5. Syften och rättsliga grunder" },
  { id: "delning", title: "6. Delning av dina personuppgifter" },
  { id: "skydd", title: "7. Skydd och överföring" },
  { id: "lagring", title: "8. Lagring av personuppgifter" },
  { id: "rattigheter", title: "9. Dina rättigheter" },
  { id: "kontakt", title: "10. Kontaktuppgifter" },
  { id: "uppdateringar", title: "11. Uppdateringar" },
];

export default function IntegritetspolicyPage() {
  return (
    <>
      <PageHero
        title="Integritetspolicy"
        subtitle="Hur vi samlar in, använder och skyddar dina personuppgifter"
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

          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">

            {/* 1 */}
            <div id="introduktion">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">1. Introduktion</h2>
              <p>
                Vi på Solklart – The Solar Company Oy är måna om att behandla dina personuppgifter på ett ansvarsfullt sätt och i enlighet med tillämplig dataskyddslagstiftning (EU:s dataskyddsförordning GDPR samt finsk dataskyddslag). Denna integritetspolicy beskriver hur vi samlar in, använder, delar och lagrar dina personuppgifter när du kontaktar oss, köper eller använder våra produkter och tjänster, eller på annat sätt interagerar med oss.
              </p>
            </div>

            {/* 2 */}
            <div id="personuppgiftsansvarig">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">2. Personuppgiftsansvarig</h2>
              <p>
                Personuppgiftsansvarig är <strong>The Solar Company Oy</strong> (marknadsföringsnamn Solklart), FO-nummer 3157005-7, med adress Rådhustorget 6, 10600 Ekenäs, Finland. Som personuppgiftsansvarig ansvarar vi för att dina uppgifter hanteras korrekt och säkert i enlighet med gällande lag.
              </p>
            </div>

            {/* 3 */}
            <div id="uppgifter-vi-behandlar">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">3. Personuppgifter vi behandlar</h2>
              <p>De personuppgifter vi kan komma att behandla om dig är:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Person- och kontaktuppgifter</strong> – namn, adress, e-postadress och telefonnummer.</li>
                <li><strong>Information om förfrågningar</strong> – detaljer om din fastighet, tak, elförbrukning och önskad lösning.</li>
                <li><strong>Avtals- och transaktionsdata</strong> – beställningar, offerter, fakturor och betalningsstatus.</li>
                <li><strong>Information om din fastighet</strong> – fastighetsbeteckning, bilder från platsbesök, tekniska uppgifter om installationen.</li>
                <li><strong>Onlinedata och identifierare</strong> – IP-adress och cookiedata vid besök på vår webbplats.</li>
              </ul>
            </div>

            {/* 4 */}
            <div id="insamling">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">4. Hur vi samlar in dina personuppgifter</h2>
              <p>Vi samlar in personuppgifter från följande källor:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Direkt från dig</strong> – när du fyller i ett kontaktformulär, begär en offert, ringer oss eller på annat sätt tar kontakt.</li>
                <li><strong>Vid platsbesök</strong> – foton och mätdata från din fastighet som samlas in av våra tekniker.</li>
                <li><strong>Tredje parter</strong> – t.ex. adressregister eller samarbetspartners, i den mån det är tillåtet enligt lag.</li>
              </ul>
            </div>

            {/* 5 */}
            <div id="syften">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">5. Syften och rättsliga grunder</h2>

              <h3 className="text-xl font-semibold text-[#4a6fa5] mt-6 mb-2">5.1 Hantera kundrelationen</h3>
              <p>Vi behandlar dina personuppgifter för att kunna ge dig en offert, ingå avtal, leverera och installera produkter och tjänster samt hantera betalningar och kundservice. Rättslig grund: <em>fullgörande av avtal</em>.</p>

              <h3 className="text-xl font-semibold text-[#4a6fa5] mt-6 mb-2">5.2 Marknadsföring</h3>
              <p>Med ditt samtycke kan vi skicka nyhetsbrev och erbjudanden om produkter och tjänster som kan vara relevanta för dig. Du kan när som helst avsäga dig dessa utskick. Rättslig grund: <em>samtycke</em>.</p>

              <h3 className="text-xl font-semibold text-[#4a6fa5] mt-6 mb-2">5.3 Rättsliga skyldigheter</h3>
              <p>Vi behandlar viss data för att uppfylla lagkrav, t.ex. bokföring och skatterapportering. Rättslig grund: <em>rättslig förpliktelse</em>.</p>

              <h3 className="text-xl font-semibold text-[#4a6fa5] mt-6 mb-2">5.4 Förbättra våra tjänster</h3>
              <p>Vi kan använda aggregerade och avidentifierade uppgifter för att förbättra våra tjänster och kundupplevelse. Rättslig grund: <em>berättigat intresse</em>.</p>
            </div>

            {/* 6 */}
            <div id="delning">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">6. Delning av dina personuppgifter</h2>
              <p>Vi delar dina personuppgifter endast när det är nödvändigt och med följande kategorier av mottagare:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Underleverantörer och installatörer</strong> som utför arbete på vår uppdrag och som är bundna av sekretessavtal.</li>
                <li><strong>IT- och systemleverantörer</strong> för t.ex. e-post, bokföring och CRM.</li>
                <li><strong>Myndigheter</strong> när det krävs enligt lag, t.ex. Skatteförvaltningen vid ansökan om energistöd.</li>
              </ul>
              <p className="mt-4">Vi säljer aldrig dina personuppgifter till tredje part.</p>
            </div>

            {/* 7 */}
            <div id="skydd">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">7. Skydd och överföring</h2>
              <p>
                Vi använder lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter från obehörig åtkomst, förlust eller missbruk. Tillgång till personuppgifter begränsas till de personer som behöver dem för sitt arbete.
              </p>
              <p className="mt-4">
                Vi behandlar i första hand dina personuppgifter inom EU/EES. Om uppgifter skulle behöva överföras utanför EU/EES säkerställer vi att lämpliga skyddsåtgärder vidtas i enlighet med GDPR, t.ex. genom EU-kommissionens standardavtalsklausuler.
              </p>
            </div>

            {/* 8 */}
            <div id="lagring">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">8. Lagring av personuppgifter</h2>
              <p>
                Vi sparar dina personuppgifter endast så länge det är nödvändigt för de ändamål de samlades in för, eller så länge det krävs enligt lag. Bokföringsuppgifter sparas i enlighet med finsk bokföringslag (normalt 7 år). Kunddata raderas på ett säkert sätt när de inte längre behövs.
              </p>
            </div>

            {/* 9 */}
            <div id="rattigheter">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">9. Dina rättigheter</h2>
              <p>Enligt GDPR har du följande rättigheter:</p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li><strong>Rätt till tillgång</strong> – du kan begära en kopia av de personuppgifter vi har om dig.</li>
                <li><strong>Rätt till rättelse</strong> – du kan begära att felaktiga eller ofullständiga uppgifter korrigeras.</li>
                <li><strong>Rätt till radering</strong> – under vissa förutsättningar kan du begära att vi raderar dina uppgifter.</li>
                <li><strong>Rätt till begränsning</strong> – du kan begära att vi begränsar behandlingen av dina uppgifter.</li>
                <li><strong>Rätt till dataportabilitet</strong> – du kan begära att få ut dina uppgifter i ett maskinläsbart format.</li>
                <li><strong>Rätt att invända</strong> – du kan invända mot behandling som grundar sig på berättigat intresse eller mot direktmarknadsföring.</li>
                <li><strong>Rätt att återkalla samtycke</strong> – om behandlingen grundar sig på samtycke kan du när som helst återkalla det.</li>
              </ul>
              <p className="mt-4">
                För att utöva dina rättigheter, kontakta oss via uppgifterna i avsnitt 10. Du har även rätt att lämna klagomål till <strong>Dataombudsmannens byrå</strong> (tietosuoja.fi), som är ansvarig tillsynsmyndighet i Finland.
              </p>
            </div>

            {/* 10 */}
            <div id="kontakt">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">10. Kontaktuppgifter</h2>
              <p>Om du har frågor om vår behandling av personuppgifter är du välkommen att kontakta oss:</p>
              <ul className="mt-4 space-y-2 not-prose">
                <li className="text-gray-700"><strong>E-post:</strong> <a href="mailto:info@solklart.fi" className="text-[#f26621] hover:underline">info@solklart.fi</a></li>
                <li className="text-gray-700"><strong>Telefon:</strong> <a href="tel:+358407202565" className="text-[#f26621] hover:underline">+358 40 720 2565</a></li>
                <li className="text-gray-700"><strong>Adress:</strong> The Solar Company Oy, Rådhustorget 6, 10600 Ekenäs, Finland</li>
              </ul>
            </div>

            {/* 11 */}
            <div id="uppdateringar">
              <h2 className="text-2xl font-bold text-[#4a6fa5] mb-4">11. Uppdateringar av denna integritetspolicy</h2>
              <p>
                Denna policy uppdaterades senast den <strong>20 mars 2026</strong>. The Solar Company Oy kan när som helst göra ändringar i denna integritetspolicy. Den senaste versionen finns alltid tillgänglig på vår webbplats.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
