import Script from "next/script";
import type { Metadata } from "next";
import { caseStudySocialImage, socialMeta } from "@/lib/socialMeta";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Real Estate Agents London Case Study | Local SEO Results",
  description:
    "How we took Real Estate Agents London from map rank 8.9 to 1.1 in 6 months: 448 page-1 queries, 1,649 enquiries, and 413 Google reviews at a 4.8★ average.",
  ...socialMeta({
    path: "/case-studies/real-estate-agents-london",
    title: "Real Estate Agents London Case Study | Local SEO Results",
    description:
      "How we took Real Estate Agents London from map rank 8.9 to 1.1 in 6 months: 448 page-1 queries, 1,649 enquiries, and 413 Google reviews at a 4.8★ average.",
    image: caseStudySocialImage("og-real-estate-london.webp", "Real Estate Agents London"),
  }),
};

export default function RealEstateAgentsLondonCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/real-estate-agents-london.html");

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="real-estate-agents-london" />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}
