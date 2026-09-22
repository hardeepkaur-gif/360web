import Script from "next/script";
import type { Metadata } from "next";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Real Estate Agents London Case Study | Local SEO Results",
  description:
    "How 360 Web Solutions took Real Estate Agents London from average map rank 8.9 to 1.1 in 6 months — 448 page-1 queries, 1,649 enquiries, and 413 Google reviews at 4.8★.",
  openGraph: {
    title: "Real Estate Agents London Case Study | Local SEO Results",
    description:
      "How 360 Web Solutions took Real Estate Agents London from average map rank 8.9 to 1.1 in 6 months — 448 page-1 queries, 1,649 enquiries, and 413 Google reviews at 4.8★.",
  },
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
