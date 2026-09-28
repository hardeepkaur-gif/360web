import Script from "next/script";
import type { Metadata } from "next";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Koolmax Case Study | WordPress to Shopify Migration",
  description:
    "How 360 Web Solutions migrated Bolton refrigeration supplier Koolmax from a broken WordPress site to Shopify, with 8.6K% organic traffic growth and a £1,750.08 average order value.",
  openGraph: {
    title: "Koolmax Case Study | WordPress to Shopify Migration",
    description:
      "How 360 Web Solutions migrated Bolton refrigeration supplier Koolmax from a broken WordPress site to Shopify, with 8.6K% organic traffic growth and a £1,750.08 average order value.",
  },
  // Draft: remove `robots` and add "koolmax" to app/sitemap.ts when going live.
  robots: { index: false, follow: false },
};

export default function KoolmaxCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/koolmax.html");

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="koolmax" />
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
