import Script from "next/script";
import type { Metadata } from "next";
import { socialMeta } from "@/lib/socialMeta";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Case Studies | 360 Web Solutions",
  description:
    "Explore 360 Web Solutions case studies showing real, measurable results in local SEO, Google Ads, Shopify, web development and Amazon growth for UK firms.",
  ...socialMeta({
    path: "/case-studies",
    title: "Case Studies | 360 Web Solutions",
    description:
      "See how we delivered growth for RDX Sports, Virco Dental, XOGO Sports, Koolmax, Brodex, Propday CRM and eHealth Solutions with measurable, proven results.",
  }),
};

export default function CaseStudiesPage() {
  const html = loadLegacySiteHtml("case-studies/index.html");

  return (
    <>
      <BreadcrumbSchemaScript pageKey="caseStudies" />
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

