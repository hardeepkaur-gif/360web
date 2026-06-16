import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Virco Dental | 360 Web Solutions eBay Marketplace Growth",
  description:
    "How 360 Web Solutions built marketplace authority for Virco Dental on eBay UK marketplace SEO, and e-commerce in a trust-critical healthcare category.",
  openGraph: {
    title: "Virco Dental | 360 Web Solutions eBay Marketplace Growth",
    description:
      "How 360 Web Solutions built marketplace authority for Virco Dental on eBay UK marketplace SEO, and e-commerce in a trust-critical healthcare category.",
  },
};

export default function VircoDentalCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/virco-dental.html");

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="virco-dental" />
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

