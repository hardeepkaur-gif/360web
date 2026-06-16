import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "SEO Content Writing Services for Google & AI Search",
  description:
    "Rank faster with SEO content built on keyword research. Written by an in-house UK team so you rank on Google and get cited by tools like ChatGPT and Perplexity.",
  openGraph: {
    title: "SEO Content Writing Services for Google & AI Search",
    description:
      "Rank faster with SEO content built on keyword research. Written by an in-house UK team so you rank on Google and get cited by tools like ChatGPT and Perplexity.",
  },
};

export default function SeoContentWritingServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/seo-content-writing-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="seo-content-writing-services" />
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

