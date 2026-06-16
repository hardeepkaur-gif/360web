import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Propday CRM | 360 Web Solutions Custom PropTech Platform",
  description:
    "See how 360 Web Solutions built Propday CRM, a custom lettings platform with compliance workflows, automation and real-time reporting.",
  openGraph: {
    title: "Propday CRM | 360 Web Solutions Custom PropTech Platform",
    description:
      "See how 360 Web Solutions built Propday CRM, a custom lettings platform with compliance workflows, automation and real-time reporting.",
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

