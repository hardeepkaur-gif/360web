import { ORG_ID } from "@/lib/siteSchema";
import { SITE_URL } from "@/lib/site";

export type ServiceSchemaEntry = {
  slug: string;
  name: string;
  serviceType: string;
  path: string;
  description: string;
};

export const SERVICE_SCHEMAS = {
  "on-page-seo-services": {
    slug: "on-page-seo-services",
    name: "On-Page SEO Services",
    serviceType: "Search Engine Optimisation",
    path: "/services/on-page-seo-services",
    description:
      "On-page SEO services to build organic visibility that compounds over time. Full in-house execution for UK businesses struggling to rank in search results.",
  },
  "local-seo-services": {
    slug: "local-seo-services",
    name: "Local SEO Services",
    serviceType: "Local Search Engine Optimisation",
    path: "/services/local-seo-services",
    description:
      "Local SEO services tailored for UK businesses to improve Google rankings, maps visibility, traffic, and local leads.",
  },
  "seo-audit-services": {
    slug: "seo-audit-services",
    name: "SEO Audit Services",
    serviceType: "SEO Audit",
    path: "/services/seo-audit-services",
    description:
      "Professional SEO audit covering technical SEO, content, rankings, backlinks, competitors, and AI visibility with clear action points.",
  },
  "seo-content-writing-services": {
    slug: "seo-content-writing-services",
    name: "SEO Content Writing Services",
    serviceType: "SEO Content Writing",
    path: "/services/seo-content-writing-services",
    description:
      "SEO content built on keyword research, search intent, and topical authority so pages rank on Google and get cited by AI search tools.",
  },
  "ai-consultancy-services": {
    slug: "ai-consultancy-services",
    name: "AI Consultancy Services",
    serviceType: "AI Consultancy",
    path: "/services/ai-consultancy-services",
    description:
      "AI consultancy services for UK businesses — practical use cases, workflow improvements, and production-ready AI solutions that deliver real ROI.",
  },
  "ai-marketing-agency": {
    slug: "ai-marketing-agency",
    name: "AI Marketing Agency",
    serviceType: "AI Marketing",
    path: "/services/ai-marketing-agency",
    description:
      "Human-led AI marketing combining strategy and automation to drive better results across SEO, paid media, and content for UK businesses.",
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    serviceType: "Social Media Marketing",
    path: "/services/social-media-marketing",
    description:
      "Social media strategies, content systems, and paid campaigns that drive measurable business growth for brands across the UK.",
  },
  "email-marketing-services": {
    slug: "email-marketing-services",
    name: "Email Marketing Services",
    serviceType: "Email Marketing",
    path: "/services/email-marketing-services",
    description:
      "Email marketing services where strategy, automation, and design work together to turn your inbox into a revenue-generating engine.",
  },
  "google-ads-management-services": {
    slug: "google-ads-management-services",
    name: "Google Ads Management",
    serviceType: "Google Ads Management",
    path: "/services/google-ads-management-services",
    description:
      "Google Ads management for UK businesses — end-to-end campaign strategy, keyword targeting, landing page performance, and transparent pricing.",
  },
  "conversion-rate-optimisation-services": {
    slug: "conversion-rate-optimisation-services",
    name: "Conversion Rate Optimisation Services",
    serviceType: "Conversion Rate Optimisation",
    path: "/services/conversion-rate-optimisation-services",
    description:
      "Conversion rate optimisation services that fix conversion barriers and convert more visitors without increasing ad spend.",
  },
  "web-development-services": {
    slug: "web-development-services",
    name: "Web Development Services",
    serviceType: "Web Development",
    path: "/services/web-development-services",
    description:
      "Web development services built for speed, UX, SEO, growth, and conversion — custom websites and ecommerce platforms for UK businesses.",
  },
  "link-building-services": {
    slug: "link-building-services",
    name: "Link Building Services",
    serviceType: "Link Building",
    path: "/services/link-building-services",
    description:
      "Manual link building services for UK businesses through white-hat outreach, digital PR, and editorial placements that Google rewards.",
  },
  "wordpress-development-services": {
    slug: "wordpress-development-services",
    name: "WordPress Development Services",
    serviceType: "WordPress Development",
    path: "/services/wordpress-development-services",
    description:
      "WordPress development services for UK businesses: custom builds, SEO-ready architecture, migrations, speed optimisation, and ongoing support.",
  },
} as const satisfies Record<string, ServiceSchemaEntry>;

export type ServiceSchemaSlug = keyof typeof SERVICE_SCHEMAS;

export function createServiceNode(entry: ServiceSchemaEntry) {
  return {
    "@type": "Service",
    name: entry.name,
    serviceType: entry.serviceType,
    url: `${SITE_URL}${entry.path}`,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    description: entry.description,
  };
}

export function createServiceSchema(entry: ServiceSchemaEntry) {
  return {
    "@context": "https://schema.org",
    ...createServiceNode(entry),
  };
}
