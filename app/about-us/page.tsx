import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us | 360 Web Solutions and digital marketing agency",
  description:
    "Meet 360 Web Solutions, a UK AI-powered digital agency delivering SEO, PPC, web development and growth strategies from a single team.",
  openGraph: {
    title: "About Us | 360 Web Solutions and digital marketing agency",
    description:
      "Meet 360 Web Solutions, a UK AI-powered digital agency delivering SEO, PPC, web development and growth strategies from a single team.",
  },
};

export default function AboutUsPage() {
  const html = loadLegacySiteHtml("about-us.html");

  return (
    <>
      <BreadcrumbSchemaScript pageKey="aboutUs" />
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

