import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Xogo Sports Case Study | 360 Web Solutions — eBay Marketplace Growth",
  description:
    "How 360 Web Solutions shifted Xogo Sports from price competition to positioned brand value on eBay UK — marketplace SEO, on-page SEO, and CRO for sports equipment retail.",
  openGraph: {
    title: "Xogo Sports Case Study | 360 Web Solutions",
    description:
      "Winning the comparison view on eBay — from undifferentiated seller to positioned brand with 100% positive feedback across 13,000+ items sold.",
  },
};

export default function XogoSportsCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/xogo-sports.html");

  return (
    <>
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
