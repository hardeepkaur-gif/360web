import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { getCaseStudyBreadcrumbTrail } from "@/lib/breadcrumbSchema";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "eHealth Solutions Case Study | 360 Web Solutions — Healthcare Digital Transformation",
  description:
    "How 360 Web Solutions delivered ePrivate Prescription, EMRpro, and LabLink for eHealth Solutions — secure cloud platforms for private healthcare across the UK.",
  openGraph: {
    title: "eHealth Solutions Case Study | 360 Web Solutions",
    description:
      "Healthcare digital transformation where reliability is the product — custom cloud platforms for private clinicians and pharmacies.",
  },
};

export default function EhealthSolutionsCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/ehealth-solutions.html");

  return (
    <>
      <BreadcrumbSchemaScript items={getCaseStudyBreadcrumbTrail("ehealth-solutions")} />
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

