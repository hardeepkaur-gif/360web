import Script from "next/script";
import type { Metadata } from "next";

import "../real-estate-london.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Real Estate Agents London Case Study | Google Ads Results",
  description:
    "How 360 Web Solutions ran Google Ads across eight dedicated property websites to generate 470 quality enquiries for Real Estate Agents London in 8 months.",
  openGraph: {
    title: "Real Estate Agents London Case Study | Google Ads Results",
    description:
      "How 360 Web Solutions ran Google Ads across eight dedicated property websites to generate 470 quality enquiries for Real Estate Agents London in 8 months.",
  },
  // Draft: remove `robots` and re-add "real-estate-agents-london-google-ads" to app/sitemap.ts when going live.
  robots: { index: false, follow: false },
};

export default function RealEstateAgentsLondonGoogleAdsCaseStudyPage() {
  const html = loadLegacySiteHtml(
    "case-studies/real-estate-agents-london-google-ads.html",
  );

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="real-estate-agents-london-google-ads" />
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
