import { SITE_URL } from "@/lib/site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const HOMEPAGE_ID = `${SITE_URL}/#webpage`;

/** Keep in sync with header navigation / sitemap service list. */
export const SITE_SERVICES = [
  {
    name: "On-Page SEO Services",
    path: "/services/on-page-seo-services",
  },
  {
    name: "Local SEO Services",
    path: "/services/local-seo-services",
  },
  {
    name: "SEO Audit Services",
    path: "/services/seo-audit-services",
  },
  {
    name: "SEO Content Writing Services",
    path: "/services/seo-content-writing-services",
  },
  {
    name: "AI Consultancy Services",
    path: "/services/ai-consultancy-services",
  },
  {
    name: "AI Marketing Agency",
    path: "/services/ai-marketing-agency",
  },
  {
    name: "Social Media Marketing",
    path: "/services/social-media-marketing",
  },
  {
    name: "Email Marketing Services",
    path: "/services/email-marketing-services",
  },
  {
    name: "Google Ads Management",
    path: "/services/google-ads-management-services",
  },
  {
    name: "Conversion Rate Optimisation Services",
    path: "/services/conversion-rate-optimisation-services",
  },
  {
    name: "Web Development Services",
    path: "/services/web-development-services",
  },
] as const;

const SOCIAL_PROFILES = [
  "https://www.facebook.com/360websolutionsuk/",
  "https://www.instagram.com/360websolutionsuk/",
  "https://uk.pinterest.com/360websolutionsuk/",
  "https://x.com/360websolution",
  "https://www.linkedin.com/company/360-websolutions-uk/",
  "https://www.tiktok.com/@360websolutionsuk",
  "https://www.youtube.com/@360WebSolutionsUK",
];

export const organizationNode = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "360 Web Solutions",
  legalName: "360 Smart Solutions Limited",
  alternateName: "360 Web Solutions Ltd",
  url: SITE_URL,
  image: `${SITE_URL}/assets/images/logo.webp`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/images/logo.webp`,
  },
  description:
    "UK digital marketing agency for SEO, PPC, web design, and content — in-house strategy, execution, and measurable growth across every channel.",
  telephone: "+442071835339",
  email: "info@360websolutions.co.uk",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "68 Claremont Cl",
    addressLocality: "London",
    postalCode: "E16 2LR",
    addressCountry: "GB",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "City",
      name: "London",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: SOCIAL_PROFILES,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: SITE_SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${SITE_URL}${service.path}`,
        provider: { "@id": ORG_ID },
      },
    })),
  },
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "360 Web Solutions",
  inLanguage: "en-GB",
  publisher: { "@id": ORG_ID },
};

export function createHomepageWebPageNode(title: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": HOMEPAGE_ID,
    url: SITE_URL,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

export function createSchemaGraph(
  ...nodes: Record<string, unknown>[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export const siteSchemaGraph = createSchemaGraph(organizationNode, websiteNode);
