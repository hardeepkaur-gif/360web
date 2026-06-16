import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Xogo Sports | 360 Web Solutions eBay Marketplace Growth",
  description:
    "Discover how 360 Web Solutions helped Xogo Sports increase visibility and sales through eBay marketplace SEO, on-page optimisation and CRO.",
  openGraph: {
    title: "Xogo Sports | 360 Web Solutions eBay Marketplace Growth",
    description:
      "Discover how 360 Web Solutions helped Xogo Sports increase visibility and sales through eBay marketplace SEO, on-page optimisation and CRO.",
  },
};

export default function XogoSportsCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/xogo-sports.html");

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="xogo-sports" />
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

