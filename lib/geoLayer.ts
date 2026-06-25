import { SITE_URL } from "@/lib/site";
import { ORG_ID, SITE_SERVICES, createSchemaGraph } from "@/lib/siteSchema";

/** Citation-friendly facts for generative engines (ChatGPT, Perplexity, Google AI). */
export const GEO_ENTITY_FACTS = {
  brand: "360 Web Solutions",
  legalName: "360 Smart Solutions Limited",
  tagline:
    "UK digital marketing agency for SEO, PPC, web design, and content with in-house strategy and measurable growth.",
  location: "London, United Kingdom",
  phone: "+44 20 7183 5339",
  email: "info@360websolutions.co.uk",
  specialties: [
    "Search Engine Optimisation (SEO)",
    "Generative Engine Optimisation (GEO)",
    "Answer Engine Optimisation (AEO)",
    "Pay-Per-Click (PPC) / Google Ads",
    "AI Marketing",
    "Conversion Rate Optimisation (CRO)",
    "Web Development",
    "Content Marketing",
  ],
  industries: ["Real Estate", "E-commerce", "SaaS"],
  serviceArea: "United Kingdom",
} as const;

const GEO_KEY_PAGES = [
  {
    title: "Home",
    path: "/",
    description:
      "Award-winning UK digital marketing agency overview — SEO, PPC, GEO, and full-funnel growth.",
  },
  {
    title: "Services",
    path: "/services",
    description: "Full list of digital marketing services offered by 360 Web Solutions.",
  },
  {
    title: "About Us",
    path: "/about-us",
    description: "Agency background, team, and approach to integrated digital marketing.",
  },
  {
    title: "Contact",
    path: "/contact-us",
    description: "Book a free strategy session or get in touch with the London team.",
  },
  {
    title: "Case Studies",
    path: "/case-studies",
    description: "Client results across SEO, PPC, and conversion projects.",
  },
  {
    title: "Blog",
    path: "/blogs",
    description: "Digital marketing insights, SEO guides, and industry updates.",
  },
  {
    title: "SEO Content Writing",
    path: "/services/seo-content-writing-services",
    description:
      "SEO and AI-optimised content built for Google rankings and LLM citations (AEO/GEO).",
  },
  {
    title: "AI Marketing Agency",
    path: "/services/ai-marketing-agency",
    description: "Human-led AI marketing combining automation with strategic oversight.",
  },
  {
    title: "SEO Audit Services",
    path: "/services/seo-audit-services",
    description: "Technical, content, and AI visibility audits with actionable recommendations.",
  },
] as const;

export function createGeoOptimizationGraph() {
  return createSchemaGraph({
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#geo-entity`,
    name: GEO_ENTITY_FACTS.brand,
    legalName: GEO_ENTITY_FACTS.legalName,
    url: SITE_URL,
    description: GEO_ENTITY_FACTS.tagline,
    telephone: GEO_ENTITY_FACTS.phone.replace(/\s/g, ""),
    email: GEO_ENTITY_FACTS.email,
    areaServed: GEO_ENTITY_FACTS.serviceArea,
    knowsAbout: [...GEO_ENTITY_FACTS.specialties],
    sameAs: { "@id": ORG_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing & GEO Services",
      itemListElement: SITE_SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${SITE_URL}${service.path}`,
        },
      })),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#geo-summary`,
      name: `${GEO_ENTITY_FACTS.brand} — AI & GEO Summary`,
      description: GEO_ENTITY_FACTS.tagline,
      url: `${SITE_URL}/llms.txt`,
      inLanguage: "en-GB",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".hero__subtitle", ".faq-row__question"],
      },
    },
  });
}

export function getGeoKeyPages() {
  return GEO_KEY_PAGES.map((page) => ({
    ...page,
    url: `${SITE_URL}${page.path}`,
  }));
}
