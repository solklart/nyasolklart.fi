export const packagesContent = {
  hero: {
    title: "Våra solcellspaket",
    subtitle: "Nyckelfärdigt paket installerat i Ekenäs. Alla priser inkl. 25,5% moms. Beställningar inom april 2026 – begränsat antal.",
  },

  packages: [
    {
      id: "s",
      name: "Paket S",
      description: "Perfekt för mindre hushåll",
      originalPrice: "4 000",
      price: "2 990",
      priceUnit: "€",
      priceNote: "inkl. installation & moms",
      priceAfterDeduction: "2 580",
      panels: "8 st",
      power: "3.7 kW",
      production: "~3 300 kWh/år",
      savings: "500–1 000 €/år",
      features: [
        "8 st AIKO 460W helsvart back-contact solpanel",
        "3-fas inverter Sungrow SG8.0RT",
        "Produktgaranti 25 år, effektgaranti 30 år",
        "Takfastsättning för ditt specifika tak",
        "Planering, installation, ibruktagning",
        "Alltid gratis platsbesök",
      ],
      popular: false,
    },
    {
      id: "m",
      name: "Paket M",
      description: "Populärt val för villor",
      originalPrice: "5 000",
      price: "3 880",
      priceUnit: "€",
      priceNote: "inkl. installation & moms",
      priceAfterDeduction: "3 330",
      panels: "12 st",
      power: "5.5 kW",
      production: "~4 900 kWh/år",
      savings: "500–1 000 €/år",
      features: [
        "12 st AIKO 460W helsvart back-contact solpanel",
        "3-fas inverter Sungrow SG8.0RT",
        "Produktgaranti 25 år, effektgaranti 30 år",
        "Takfastsättning för ditt specifika tak",
        "Planering, installation, ibruktagning",
        "Alltid gratis platsbesök",
      ],
      popular: true,
    },
    {
      id: "l",
      name: "Paket L",
      description: "Maximal produktion för större hushåll",
      originalPrice: "6 000",
      price: "4 740",
      priceUnit: "€",
      priceNote: "inkl. installation & moms",
      priceAfterDeduction: "4 050",
      panels: "16 st",
      power: "7.4 kW",
      production: "~6 600 kWh/år",
      savings: "500–1 000 €/år",
      features: [
        "16 st AIKO 460W helsvart back-contact solpanel",
        "3-fas inverter Sungrow SG8.0RT",
        "Produktgaranti 25 år, effektgaranti 30 år",
        "Takfastsättning för ditt specifika tak",
        "Planering, installation, ibruktagning",
        "Alltid gratis platsbesök",
      ],
      popular: false,
    },
  ],

  addons: [
    {
      id: "batteri",
      name: "Batterilager",
      description: "Lagra din överskottsenergi för användning på kvällen eller vid strömavbrott. Kontakta oss för pris.",
      options: [] as { name: string; price: string }[],
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600",
    },
  ],

  financing: {
    title: "Flexibel finansiering",
    description: "Vi erbjuder flera finansieringsalternativ så att du kan börja spara på elräkningen redan idag.",
    options: [
      {
        name: "Direktköp",
        description: "Betala hela beloppet direkt och äg ditt system från dag ett.",
      },
      {
        name: "Delbetalning",
        description: "Dela upp betalningen på 12–60 månader med fast ränta.",
      },
      {
        name: "Leasing",
        description: "Hyr systemet och byt till nyare teknik efter avtalstiden.",
      },
    ],
  },

  taxBenefits: {
    title: "Hushållsavdrag",
    description: "I Finland kan du få hushållsavdrag för installation av solceller, vilket sänker din faktiska investeringskostnad. Priser ovan gäller tak med lutning ≤30° och enfamiljshus i ett plan. För brantare tak eller tvåvåningshus ges pris enligt offert.",
    benefits: [
      "Hushållsavdrag för installation",
      "Momsfri försäljning av överskottsel",
      "Batteri tillgängligt på förfrågan",
    ],
  },
};
