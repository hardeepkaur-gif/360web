import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

type SitemapEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticPages: SitemapEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
];

const servicePages: SitemapEntry[] = [
  "ai-consultancy-services",
  "ai-marketing-agency",
  "conversion-rate-optimisation-services",
  "email-marketing-services",
  "link-building-services",
  "local-seo-services",
  "on-page-seo-services",
  "seo-audit-services",
  "seo-content-writing-services",
  "social-media-marketing",
  "web-development-services",
  "wordpress-development-services",
].map((slug) => ({
  path: `/services/${slug}`,
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));

const caseStudyPages: SitemapEntry[] = [
  "ehealth-solutions",
  "propday-crm",
  "rdx-sports",
  "virco-dental",
  "xogo-sports",
].map((slug) => ({
  path: `/case-studies/${slug}`,
  changeFrequency: "monthly" as const,
  priority: 0.7,
}));

const legalPages: SitemapEntry[] = [
  "/acceptable-use-policy",
  "/cookie-policy",
  "/disclaimer",
  "/intellectual-property-notice",
  "/privacy-policy",
  "/refund-cancellation-policy",
  "/terms-and-conditions",
].map((path) => ({
  path,
  changeFrequency: "yearly" as const,
  priority: 0.3,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...staticPages, ...servicePages, ...caseStudyPages, ...legalPages].map(
    ({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );
}
