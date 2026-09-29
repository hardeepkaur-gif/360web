import Script from "next/script";
import type { Metadata } from "next";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "XOGO Sports Case Study | eBay & Amazon Marketplace Growth",
  description:
    "How 360 Web Solutions took XOGO Sports off the price floor: 13,000+ items sold with 100% positive feedback, 4,140 buyer ratings and an Amazon Brand Store.",
  openGraph: {
    title: "XOGO Sports Case Study | eBay & Amazon Marketplace Growth",
    description:
      "How 360 Web Solutions took XOGO Sports off the price floor: 13,000+ items sold with 100% positive feedback, 4,140 buyer ratings and an Amazon Brand Store.",
  },
};

export default function XogoSportsCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/xogo-sports.html");

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="xogo-sports" />
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
