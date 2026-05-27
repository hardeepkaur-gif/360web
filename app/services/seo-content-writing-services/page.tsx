import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "SEO Content Writing Services for Google & AI Search",
  description:
    "Rank faster with SEO content built on keyword research, search intent, and topical authority. Written by an in-house UK team so pages rank on Google and get cited by tools like ChatGPT and Perplexity.",
  openGraph: {
    title: "SEO Content Writing Services for Google & AI Search",
    description:
      "Rank faster with SEO content built on keyword research, search intent, and topical authority. Written by an in-house UK team so pages rank on Google and get cited by tools like ChatGPT and Perplexity.",
  },
};

export default function SeoContentWritingServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/seo-content-writing-services.html",
  );

  return (
    <>
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

