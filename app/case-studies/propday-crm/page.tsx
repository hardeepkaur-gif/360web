import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Propday CRM | 360 Web Solutions Custom PropTech Platform",
  description:
    "How 360 Web Solutions built Propday CRM, a custom lettings platform with compliance workflows, automation and real-time reporting for UK letting agencies.",
  openGraph: {
    title: "Propday CRM | 360 Web Solutions Custom PropTech Platform",
    description:
      "How 360 Web Solutions built Propday CRM, a custom lettings platform with compliance workflows, automation and real-time reporting for UK letting agencies.",
  },
};

export default function PropdayCrmCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/propday-crm.html");

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="propday-crm" />
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

