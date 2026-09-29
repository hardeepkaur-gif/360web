import Script from "next/script";
import type { Metadata } from "next";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Virco Dental Case Study | eBay & Shopify E-Commerce Growth",
  description:
    "How we built a two-channel ecommerce presence for British Dental Health (Virco): 98k+ items sold, 99.8% positive feedback and 319 products now on Shopify.",
  openGraph: {
    title: "Virco Dental Case Study | eBay & Shopify E-Commerce Growth",
    description:
      "How we built a two-channel ecommerce presence for British Dental Health (Virco): 98k+ items sold, 99.8% positive feedback and 319 products now on Shopify.",
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
