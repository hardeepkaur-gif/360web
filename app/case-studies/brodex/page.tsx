import Script from "next/script";
import type { Metadata } from "next";
import { caseStudySocialImage, socialMeta } from "@/lib/socialMeta";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Brodex Case Study | Brand, SEO & WooCommerce Build",
  description:
    "How we built the digital estate for UK manufacturer Brodex: one brand system, a 72-product WooCommerce store, 33 categories and 8.7× faster page delivery.",
  ...socialMeta({
    path: "/case-studies/brodex",
    title: "Brodex Case Study | Brand, SEO & WooCommerce Build",
    description:
      "How we built the digital estate for UK manufacturer Brodex: one brand system, a 72-product WooCommerce store, 33 categories and 8.7× faster page delivery.",
    image: caseStudySocialImage("og-brodex.webp", "Brodex"),
  }),
};

export default function BrodexCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/brodex.html");

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="brodex" />
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
