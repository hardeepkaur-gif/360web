import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyHomeHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "360 Web Solutions Digital Marketing Agency London & UK",
  description:
    "UK digital marketing agency for SEO, PPC, web design, and content — in-house strategy, execution, and measurable growth across every channel.",
  openGraph: {
    title: "360 Web Solutions Digital Marketing Agency London & UK",
    description:
      "UK digital marketing agency for SEO, PPC, web design, and content — in-house strategy, execution, and measurable growth across every channel.",
  },
};

export default function Home() {
  const html = loadLegacyHomeHtml();

  return (
    <>
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
      <Script src="/js/main.js" strategy="afterInteractive" />
      <Script src="/js/work-filters-fix.js" strategy="lazyOnload" />
    </>
  );
}
