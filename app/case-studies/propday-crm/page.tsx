import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { getCaseStudyBreadcrumbTrail } from "@/lib/breadcrumbSchema";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Propday CRM Case Study | 360 Web Solutions — Custom PropTech Platform",
  description:
    "How 360 Web Solutions built Propday CRM from the ground up — custom lettings management, compliance workflows, and real-time reporting for a PropTech lettings operation.",
  openGraph: {
    title: "Propday CRM Case Study | 360 Web Solutions",
    description:
      "A property management system built from the ground up — web development, AI consultancy, and automation for real lettings operations.",
  },
};

export default function PropdayCrmCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/propday-crm.html");

  return (
    <>
      <BreadcrumbSchemaScript items={getCaseStudyBreadcrumbTrail("propday-crm")} />
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

