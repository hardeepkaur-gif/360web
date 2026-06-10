import Script from "next/script";
import type { Metadata } from "next";

import { HomeSchemaScript } from "@/components/HomeSchemaScript";
import { loadLegacyHomeHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Award-Winning Digital Marketing Agency London | SEO and PPC",
  description:
    "UK digital marketing agency for SEO, PPC, web design, and content — in-house strategy, execution, and measurable growth across every channel.",
  openGraph: {
    title: "Award-Winning Digital Marketing Agency London | SEO and PPC",
    description:
      "UK digital marketing agency for SEO, PPC, web design, and content — in-house strategy, execution, and measurable growth across every channel.",
  },
};

export default function Home() {
  const html = loadLegacyHomeHtml();

  return (
    <>
      <HomeSchemaScript />
      <link rel="preload" href="/css/home.css" as="style" />
      <link
        rel="preload"
        href="/assets/images/hero-home-digital-agency.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script src="/js/work-filters-fix.js" strategy="lazyOnload" />
    </>
  );
}
