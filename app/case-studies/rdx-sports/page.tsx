import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "RDX Sports Case Study | 360 Web Solutions — Amazon Marketplace Growth",
  description:
    "How 360 Web Solutions transformed RDX Sports from fragmented Amazon listings into a conversion-engineered marketplace operation across UK and EU.",
  openGraph: {
    title: "RDX Sports Case Study | 360 Web Solutions",
    description:
      "From storefront to scalable marketplace engine — marketplace SEO, on-page SEO, and CRO for a 25-year combat sports brand on Amazon UK/EU.",
  },
};

export default function RdxSportsCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/rdx-sports.html");

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

