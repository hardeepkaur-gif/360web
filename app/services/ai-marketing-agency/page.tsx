import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Human-Led AI Marketing Agency | 360 Web Solutions UK",
  description:
    "Our AI-powered marketing agency is a blend of human strategy and AI automation. Designed for UK businesses, we help them drive better results across SEO, paid media, and content automation.",
  openGraph: {
    title: "Human-Led AI Marketing Agency | 360 Web Solutions UK",
    description:
      "Our AI-powered marketing agency is a blend of human strategy and AI automation. Designed for UK businesses, we help them drive better results across SEO, paid media, and content automation.",
  },
};

export default function AiMarketingAgencyPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/ai-marketing-agency.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="ai-marketing-agency" />
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

