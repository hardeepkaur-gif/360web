import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "LLM Optimisation & AI SEO Services UK | 360 Web Solutions",
  description:
    "Improve AI search visibility with GEO, AEO and LLM optimisation. 360 Web Solutions helps brands increase their chance of appearing in ChatGPT and AI Overviews.",
  openGraph: {
    title: "LLM Optimisation & AI SEO Services UK | 360 Web Solutions",
    description:
      "Improve AI search visibility with GEO, AEO and LLM optimisation. 360 Web Solutions helps brands increase their chance of appearing in ChatGPT and AI Overviews.",
  },
};

export default function LlmOptimisationServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/llm-optimisation-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="llm-optimisation-services" />
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
