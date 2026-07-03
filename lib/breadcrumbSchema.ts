import { SITE_URL } from "@/lib/site";
import { ORG_ID, WEBSITE_ID } from "@/lib/siteSchema";
import {
  createServiceNode,
  SERVICE_SCHEMAS,
  type ServiceSchemaSlug,
} from "@/lib/serviceSchema";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

function breadcrumbUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function createBreadcrumbNode(items: BreadcrumbItem[], pagePath: string) {
  const trail: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${pagePath}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: breadcrumbUrl(item.path),
    })),
  };
}

export function createWebPageNode(
  pagePath: string,
  name: string,
  description?: string,
) {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}${pagePath}#webpage`,
    url: `${SITE_URL}${pagePath}`,
    name,
    ...(description ? { description } : {}),
    breadcrumb: { "@id": `${SITE_URL}${pagePath}#breadcrumb` },
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

export function createInnerPageSchemaGraph(
  items: readonly BreadcrumbItem[],
  description?: string,
) {
  const pagePath = items[items.length - 1]?.path ?? "/";
  const pageName = items[items.length - 1]?.name ?? "Page";

  return {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbNode([...items], pagePath),
      createWebPageNode(pagePath, pageName, description),
    ],
  };
}

export function createServicePageSchemaGraph(slug: ServiceSchemaSlug) {
  const entry = SERVICE_SCHEMAS[slug];
  const breadcrumbs = getServiceBreadcrumbTrail(slug);

  return {
    "@context": "https://schema.org",
    "@graph": [
      createServiceNode(entry),
      createBreadcrumbNode(breadcrumbs, entry.path),
      createWebPageNode(entry.path, entry.name, entry.description),
    ],
  };
}

/** @deprecated Use createInnerPageSchemaGraph or createServicePageSchemaGraph */
export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  const pagePath = items[items.length - 1]?.path ?? "/";
  return {
    "@context": "https://schema.org",
    ...createBreadcrumbNode(items, pagePath),
  };
}

export function getServiceBreadcrumbTrail(
  slug: ServiceSchemaSlug,
): BreadcrumbItem[] {
  const service = SERVICE_SCHEMAS[slug];

  return [
    { name: "Services", path: "/services" },
    { name: service.name, path: service.path },
  ];
}

export const CASE_STUDY_BREADCRUMBS = {
  "rdx-sports": "RDX Sports",
  "virco-dental": "Virco Dental",
  "xogo-sports": "Xogo Sports",
  "propday-crm": "Propday CRM",
  "ehealth-solutions": "eHealth Solutions",
  "uk-frozen-food": "UK Frozen Food",
} as const;

export type CaseStudySlug = keyof typeof CASE_STUDY_BREADCRUMBS;

export function getCaseStudyBreadcrumbTrail(
  slug: CaseStudySlug,
): BreadcrumbItem[] {
  return [
    { name: "Case Studies", path: "/case-studies" },
    { name: CASE_STUDY_BREADCRUMBS[slug], path: `/case-studies/${slug}` },
  ];
}

export const PAGE_BREADCRUMBS = {
  aboutUs: [{ name: "About Us", path: "/about-us" }],
  contactUs: [{ name: "Contact Us", path: "/contact-us" }],
  caseStudies: [{ name: "Case Studies", path: "/case-studies" }],
  services: [{ name: "Services", path: "/services" }],
  privacyPolicy: [{ name: "Privacy Policy", path: "/privacy-policy" }],
  termsAndConditions: [
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
  ],
  cookiePolicy: [{ name: "Cookie Policy", path: "/cookie-policy" }],
  disclaimer: [{ name: "Disclaimer", path: "/disclaimer" }],
  acceptableUsePolicy: [
    { name: "Acceptable Use Policy", path: "/acceptable-use-policy" },
  ],
  refundCancellationPolicy: [
    {
      name: "Refund & Cancellation Policy",
      path: "/refund-cancellation-policy",
    },
  ],
  intellectualPropertyNotice: [
    {
      name: "Intellectual Property Notice",
      path: "/intellectual-property-notice",
    },
  ],
} as const satisfies Record<string, BreadcrumbItem[]>;

export const PAGE_DESCRIPTIONS = {
  aboutUs:
    "360 Web Solutions is a UK AI-powered digital agency headquartered in London.",
  contactUs:
    "Contact 360 Web Solutions — London HQ, phone, email, and enquiry form.",
  caseStudies:
    "Case studies from 360 Web Solutions across ecommerce, SaaS, healthcare, and more.",
  services:
    "Explore 360 Web Solutions services: SEO, content, AI, social, email, CRO, and web development.",
  privacyPolicy:
    "How 360 Web Solutions collects, uses, and protects personal data under UK GDPR.",
  termsAndConditions:
    "Terms and Conditions for engaging 360 Smart Solutions Limited trading as 360 Web Solutions.",
  cookiePolicy:
    "Cookie Policy for 360websolutions.co.uk — categories, consent, and controls.",
  disclaimer:
    "Legal disclaimer for content and communications from 360 Web Solutions.",
  acceptableUsePolicy:
    "Acceptable Use Policy for 360websolutions.co.uk platforms and communications.",
  refundCancellationPolicy:
    "Refund and cancellation terms for 360 Smart Solutions Limited client engagements.",
  intellectualPropertyNotice:
    "Intellectual property notice for 360websolutions.co.uk and client deliverables.",
} as const;

export type PageBreadcrumbKey = keyof typeof PAGE_BREADCRUMBS;

export function createStaticPageSchemaGraph(key: PageBreadcrumbKey) {
  return createInnerPageSchemaGraph(
    PAGE_BREADCRUMBS[key],
    PAGE_DESCRIPTIONS[key],
  );
}

export function createCaseStudyPageSchemaGraph(slug: CaseStudySlug) {
  const items = getCaseStudyBreadcrumbTrail(slug);
  const pageName = CASE_STUDY_BREADCRUMBS[slug];

  return createInnerPageSchemaGraph(
    items,
    `${pageName} case study by 360 Web Solutions.`,
  );
}
