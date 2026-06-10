import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { PAGE_BREADCRUMBS } from "@/lib/breadcrumbSchema";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us | 360 Web Solutions",
  description:
    "360 Web Solutions is a UK AI-powered digital agency headquartered in London. One partner, no seams — strategy, execution, and accountable growth under one roof.",
  openGraph: {
    title: "About Us | 360 Web Solutions",
    description:
      "Learn how 360 Web Solutions closes the gap between strategy and execution — systems-led SEO, AI, content, web, and performance for ambitious UK businesses.",
  },
};

export default function AboutUsPage() {
  const html = loadLegacySiteHtml("about-us.html");

  return (
    <>
      <BreadcrumbSchemaScript items={PAGE_BREADCRUMBS.aboutUs} />
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

