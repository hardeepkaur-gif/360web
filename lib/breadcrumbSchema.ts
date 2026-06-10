import { SITE_URL } from "@/lib/site";
import { SERVICE_SCHEMAS, type ServiceSchemaSlug } from "@/lib/serviceSchema";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  const trail: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
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
