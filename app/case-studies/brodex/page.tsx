import Script from "next/script";
import type { Metadata } from "next";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Brodex Case Study | Brand, SEO & WooCommerce Build",
  description:
    "How 360 Web Solutions built a full digital estate for UK manufacturer Brodex: brand system, 72-product WooCommerce store, 33 categories and 8.7× faster page delivery.",
  openGraph: {
    title: "Brodex Case Study | Brand, SEO & WooCommerce Build",
    description:
      "How 360 Web Solutions built a full digital estate for UK manufacturer Brodex: brand system, 72-product WooCommerce store, 33 categories and 8.7× faster page delivery.",
  },
  // Draft: remove `robots` and re-add "brodex" to app/sitemap.ts when going live.
  robots: { index: false, follow: false },
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
