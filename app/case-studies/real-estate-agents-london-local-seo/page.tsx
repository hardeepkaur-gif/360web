import Script from "next/script";
import type { Metadata } from "next";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Real Estate Agents London Case Study | Local SEO Rankings",
  description:
    "How a ten-month local SEO programme took Real Estate Agents London from an average map position of 8.9 to 1.1, ahead of nine competing agencies.",
  openGraph: {
    title: "Real Estate Agents London Case Study | Local SEO Rankings",
    description:
      "How a ten-month local SEO programme took Real Estate Agents London from an average map position of 8.9 to 1.1, ahead of nine competing agencies.",
  },
  // Draft: remove `robots` and add "real-estate-agents-london-local-seo" to app/sitemap.ts when going live.
  robots: { index: false, follow: false },
};

export default function RealEstateAgentsLondonLocalSeoCaseStudyPage() {
  const html = loadLegacySiteHtml(
    "case-studies/real-estate-agents-london-local-seo.html",
  );

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="real-estate-agents-london-local-seo" />
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
