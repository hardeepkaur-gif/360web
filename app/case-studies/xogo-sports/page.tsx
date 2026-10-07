import Script from "next/script";
import type { Metadata } from "next";
import { caseStudySocialImage, socialMeta } from "@/lib/socialMeta";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "XOGO Sports Case Study | eBay & Amazon Marketplace Growth",
  description:
    "How 360 Web Solutions took XOGO Sports off the price floor: 13,000+ items sold with 100% positive feedback, 4,140 buyer ratings and an Amazon Brand Store.",
  ...socialMeta({
    path: "/case-studies/xogo-sports",
    title: "XOGO Sports Case Study | eBay & Amazon Marketplace Growth",
    description:
      "How 360 Web Solutions took XOGO Sports off the price floor: 13,000+ items sold with 100% positive feedback, 4,140 buyer ratings and an Amazon Brand Store.",
    image: caseStudySocialImage("og-xogo.webp", "XOGO Sports"),
  }),
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
