import Script from "next/script";
import type { Metadata } from "next";
import { caseStudySocialImage, socialMeta } from "@/lib/socialMeta";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Koolmax Case Study | WordPress to Shopify Migration",
  description:
    "We moved Bolton refrigeration supplier Koolmax from a failing WordPress site to Shopify, driving 8.6K% organic growth and a £1,750.08 average order value.",
  ...socialMeta({
    path: "/case-studies/koolmax",
    title: "Koolmax Case Study | WordPress to Shopify Migration",
    description:
      "We moved Bolton refrigeration supplier Koolmax from a failing WordPress site to Shopify, driving 8.6K% organic growth and a £1,750.08 average order value.",
    image: caseStudySocialImage("og-koolmax.webp", "Koolmax"),
  }),
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
