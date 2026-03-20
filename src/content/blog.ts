export const blogContent = {
  hero: {
    title: "Blogg & Nyheter",
    subtitle: "Läs om solenergi, tips för att minska dina elkostnader och nyheter från Solklart.",
  },

  categories: ["Alla", "Solenergi", "Tips", "Nyheter", "Teknik"],

  posts: [
    {
      slug: "aiko-460w-mer-el-per-kvadratmeter",
      title: "Högre effekt med AIKO Neostar 2S+ – mer el från varje kvadratmeter",
      excerpt: "Vi installerar AIKO Neostar 2S+ med 23,1 % verkningsgrad och 460 W – en av marknadens mest effektiva solpaneler. Lär dig vad ABC-tekniken innebär för dig och ditt hem.",
      category: "Teknik",
      author: "Dan Söderlund",
      date: "2026-02-04",
      readTime: "5 min",
      image: "/Aiko-460.webp",
      featured: true,
      specTable: {
        caption: "Teknisk information om AIKO Neostar 2S+ (460 W)",
        rows: [
          { label: "Effekt (Pmax)", value: "460 W" },
          { label: "Verkningsgrad", value: "23,1 %" },
          { label: "Storlek", value: "1757 × 1134 × 30 mm" },
          { label: "Yta per panel", value: "1,99 m²" },
          { label: "Effekt per m²", value: "231 W/m²" },
          { label: "Vikt", value: "24,2 kg" },
          { label: "Cellteknik", value: "N-Type ABC – All Back Contact" },
          { label: "Tolerans", value: "0–3 %" },
          { label: "Produktgaranti", value: "25 år" },
          { label: "Effektgaranti", value: "30 år" },
          { label: "Material", value: "Dubbelglas (2,0 + 2,0 mm)" },
          { label: "Degradering", value: "≤1 % första året, ≤0,35 % årligen därefter" },
          { label: "Driftstemperatur", value: "−40 °C till +85 °C" },
        ],
      },
      content: `
## Få ut mer av varje kvadratmeter

När du väljer solceller till ditt hem är det viktigt att få ut så mycket el som möjligt på den takyta du har att tillgå. AIKO Neostar 2S+ med 23,1 % verkningsgrad och 460 W är ett av de mest effektiva valen på marknaden idag – och det är panelen vi installerar hos våra kunder.

## ABC-teknik: inga synliga ledningar – bara ren panel

AIKO använder n-type ABC-celler (All Back Contact), där alla elektriska kontakter sitter på baksidan av panelen. I en vanlig solpanel löper metalltrådar synligt över cellernas framsida för att leda bort strömmen. De reflekterar ljus och blockerar en del av cellen.

Med ABC-tekniken är framsidan helt ren – en jämn, djupsvart yta utan ett enda synligt metalltråd. Det ger inte bara ett renare och snyggare utseende, det är också mer effektivt: hela cellens yta kan ta emot solljus utan hinder.

ABC-tekniken gör dessutom att panelerna presterar bättre vid höga temperaturer och i svagt ljus jämfört med konventionella PERC-paneler. Det är en klar fördel i det nordiska klimatet där solen ofta är låg på himlen.

## 30 års effektgaranti – med Munich Re som partner

Tack vare AIKO:s höga tillverkningskvalitet följer Neostar 2S+ med marknadens starkaste garantier.

### Vad omfattar garantierna?

- Produktgarantin skyddar mot tillverkningsfel i hela 25 år
- Effektgarantin garanterar minst 88,85 % kvarvarande effekt efter 30 år
- Degraderingen är låg – under 0,35 % per år från och med år 2
- Garantipartnern är Munich Re – ett av världens ledande återförsäkringsbolag

## Dubbelglas för längre livslängd

Till skillnad från paneler med bakfolie har Neostar 2S+ glas på båda sidor (2,0 + 2,0 mm härdat glas). Det ger överlägsen mekanisk styrka, bättre motstånd mot fukt och hagel samt längre livslängd. Panelen är testad för nordiskt klimat – kyla, väder och tunga snölaster.

## Sammanfattning: Därför väljer vi AIKO Neostar 2S+

- Du får mer el från mindre yta – perfekt för villatak av alla storlekar
- 23,1 % verkningsgrad ger bättre avkastning per investerad euro
- 30 års effektgaranti – du vet precis vad du får i tre decennier
- Den helsvarta designen passar på de flesta tak
- Dubbelglas och ABC-teknik ger exceptionell hållbarhet
      `,
    },
    {
      slug: "sungrow-sg-rt-vaxelriktare",
      title: "Sungrow SG RT – växelriktaren som styr din solel",
      excerpt: "Växelriktaren är hjärtat i varje solcellssystem. Vi berättar varför vi väljer Sungrow SG RT-serien och vad 98,5 % verkningsgrad faktiskt betyder för dig.",
      category: "Teknik",
      author: "Dan Söderlund",
      date: "2026-03-01",
      readTime: "5 min",
      image: "/sungrow-inverter.webp",
      featured: false,
      specTable: {
        caption: "Teknisk information om Sungrow SG8.0RT (trefas)",
        rows: [
          { label: "Modell", value: "Sungrow SG8.0RT" },
          { label: "Max AC-effekt", value: "8 000 W" },
          { label: "Max verkningsgrad", value: "98,5 %" },
          { label: "Europeisk verkningsgrad", value: "97,8 %" },
          { label: "Antal MPPT-ingångar", value: "2 st" },
          { label: "Max DC-ingångsspänning", value: "1 100 V" },
          { label: "MPPT-spänningsområde", value: "160–1 000 V" },
          { label: "Mått (B×H×D)", value: "370 × 480 × 195 mm" },
          { label: "Vikt", value: "18 kg" },
          { label: "Kylning", value: "Naturlig (tyst)" },
          { label: "Skyddsklass", value: "IP65" },
          { label: "Driftstemperatur", value: "−25 °C till +60 °C" },
          { label: "Kommunikation", value: "WLAN / Ethernet / RS485" },
          { label: "Överspänningsskydd", value: "DC Type II / AC Type II" },
          { label: "AFCI (ljusbågsskydd)", value: "Ja" },
          { label: "PID-återhämtning", value: "Ja" },
        ],
      },
      content: `
## Vad gör en växelriktare?

Solpanelerna producerar likström (DC). Ditt hem använder växelström (AC). Växelriktarens jobb är att omvandla solpanelernas DC-el till den AC-el som dina apparater, belysning och värmesystem faktiskt kan använda.

Det låter enkelt – men kvaliteten på den omvandlingen avgör hur mycket av din producerade solel du faktiskt får använda. En bra växelriktare förlorar minimalt med energi i omvandlingen och håller sig effektiv även vid låga solinstrålningsnivåer.

## Varför Sungrow?

Sungrow är en av världens största tillverkare av växelriktare med över 400 GW installerad kapacitet globalt. De har tillverkat växelriktare sedan 1997 och är sedan länge klassade som Tier 1-leverantör.

Vi väljer Sungrow SG RT-serien till trefasinstallationer för att den kombinerar hög verkningsgrad, inbyggd säkerhet och smart övervakning i ett kompakt och tyst chassi.

## 98,5 % verkningsgrad – vad innebär det?

SG8.0RT har en maximal verkningsgrad på 98,5 %. Det innebär att av varje 100 kWh solpanelerna producerar förlorar växelriktaren bara 1,5 kWh i omvandlingen. Resten når din elmätare.

Minst lika viktig är den europeiska verkningsgraden på 97,8 % – ett mätvärde som tar hänsyn till att växelriktaren sällan arbetar vid full last. I Finlands klimat, med många timmar av delskymning och varierande solinstrålning, är det den europeiska siffran som bäst speglar verklig årsproduktion.

## Multi-MPPT för fler solpaneler

SG RT-serien har två oberoende MPPT-ingångar (Maximum Power Point Tracker). Varje MPPT håller kontinuerligt koll på sin del av solpanelerna och optimerar spänningen för maximal effekt.

Det praktiska värdet är stort: om taket har paneler i olika väderstreck, eller om en del av taket skuggas vid vissa tidpunkter på dagen, kan de två MPPT-ingångarna hantera dem separat – utan att de sämre panelerna drar ner produktionen för hela systemet.

## Inbyggd säkerhet och smart övervakning

### Skyddsegenskaper

- Inbyggt ljusbågsskydd (AFCI) som automatiskt bryter strömmen vid farliga ljusbågar
- DC- och AC-överspänningsskydd Type II i samma enhet
- PID-återhämtningsfunktion som motverkar effektförlust i panelerna över tid
- IP65-klassad – tålig mot damm och vattenspray

### Övervakning

Via Sungrows iSolarCloud-app kan du se din produktion, förbrukning och nätleverans i realtid – dygnet runt. Firmware-uppdateringar sker trådlöst, vilket innebär att enheten förbättras automatiskt utan att någon behöver besöka din anläggning.

## Tyst och kompakt

Växelriktaren kyls med naturlig konvektion – inga fläktar, inget ljud. Den väger 18 kg och monteras enkelt på vägg. Trots sin kompakta storlek (370 × 480 × 195 mm) hanterar SG8.0RT upp till 12 kWp solpaneler.

## Rätt inverter för rätt system

Vi använder Sungrow SG RT-serien primärt i trefasanslutna villor och fastigheter. För enfasinstallationer och mindre system finns andra modeller i Sungrow-familjen. Vi väljer alltid inverter baserat på systemets storlek, anslutningstyp och kundens specifika behov.
      `,
    },
    {
      slug: "solceller-i-finland-guide-2024",
      title: "Komplett guide till solceller i Finland 2024",
      excerpt: "Allt du behöver veta om att installera solceller i Finland - från kostnader och stöd till tekniska överväganden.",
      category: "Solenergi",
      author: "Dan Söderlund",
      date: "2024-02-15",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      featured: true,
      content: `
## Varför solceller i Finland?

Trots att Finland ligger i norr är solceller en utmärkt investering. Under sommarmånaderna har vi extremt långa dagar med upp till 19 timmar solljus i södra Finland.

### Fördelar med solceller

- **Minskade elkostnader** - Producera din egen el och minska beroendet av elnätet
- **Miljövänligt** - Ren energi utan utsläpp
- **Värdeökning** - Solceller ökar fastighetens värde
- **Lågt underhåll** - Modern teknik kräver minimal service

### Kostnader och återbetalningstid

Ett typiskt villaystem på 6-10 kWp kostar mellan 10 000 och 20 000 euro. Med nuvarande elpriser är återbetalningstiden ofta 8-12 år, men systemet producerar el i 25-30 år.

### Stöd och avdrag

I Finland kan du få hushållsavdrag för installationsarbetet. Kontakta oss för att få reda på exakt hur mycket du kan spara.
      `,
    },
    {
      slug: "optimera-egenforbrukning",
      title: "5 tips för att optimera din egenförbrukning",
      excerpt: "Maximera nyttan av dina solceller genom att använda mer av den el du producerar själv.",
      category: "Tips",
      author: "Dan Söderlund",
      date: "2024-02-01",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      featured: false,
      content: `
## Maximera din egenförbrukning

Att använda så mycket som möjligt av den el du producerar själv är nyckeln till att få maximal avkastning på din solcellsinvestering.

### Tip 1: Anpassa din förbrukning

Kör diskmaskin, tvättmaskin och torktumlare mitt på dagen när solen skiner som mest.

### Tip 2: Investera i batterilager

Med ett batterilager kan du lagra överskottselen och använda den på kvällen.

### Tip 3: Smart laddning av elbil

Om du har elbil, ladda den under dagtid hemma när solcellerna producerar som mest.

### Tip 4: Varmvattenberedare

Värm ditt varmvatten under dagtid med hjälp av solelen.

### Tip 5: Övervaka och analysera

Använd din app för att följa produktionen och anpassa dina vanor därefter.
      `,
    },
    {
      slug: "solklart-expanderar-till-nyland",
      title: "Solklart expanderar verksamheten i Nyland",
      excerpt: "Vi är glada att meddela att vi nu erbjuder våra tjänster i hela Nyland.",
      category: "Nyheter",
      author: "Dan Söderlund",
      date: "2024-01-20",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
      featured: false,
      content: `
## Solklart växer

Vi är stolta över att kunna meddela att Solklart nu erbjuder kompletta solcellslösningar i hela Nyland.

### Nya serviceområden

Utöver vårt kärnområde i Raseborg betjänar vi nu även:

- Helsingfors
- Esbo
- Vanda
- Lojo
- Kyrkslätt
- Ingå
- Sjundeå

### Samma kvalitet, större räckvidd

Trots expansionen är vi fortsatt samma lokala företag med fokus på kvalitet och personlig service.

Kontakta oss idag för en kostnadsfri offert!
      `,
    },
    {
      slug: "batterilagring-framtiden",
      title: "Batterilagring - framtidens energilösning",
      excerpt: "Hur batteriteknologin revolutionerar hur vi använder solenergi i hemmet.",
      category: "Teknik",
      author: "Dan Söderlund",
      date: "2024-01-10",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800",
      featured: false,
      content: `
## Batterier förändrar spelet

Med moderna batterilager kan du lagra den solenergi du producerar under dagen och använda den när solen inte skiner.

### Fördelar med batterilager

- **Ökad egenförbrukning** - Använd mer av din egen el
- **Backup vid strömavbrott** - Ha el även när nätet är nere
- **Flexibilitet** - Använd el när det passar dig

### Tekniken utvecklas snabbt

Priserna på batterier har sjunkit dramatiskt de senaste åren, och kapaciteten har ökat. Idag är batterilager ett smart komplement till solceller.

### Passar det för dig?

Kontakta oss för en kostnadsfri analys av om batterilager är rätt för ditt hushåll.
      `,
    },
  ],
};
