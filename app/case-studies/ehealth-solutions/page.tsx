import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "eHealth Solutions | 360 Web Solutions Healthcare Digital",
  description:
    "How 360 Web Solutions delivered secure healthcare software including ePrivate Prescription, EMRpro and LabLink for UK providers.",
  openGraph: {
    title: "eHealth Solutions | 360 Web Solutions Healthcare Digital",
    description:
      "How 360 Web Solutions delivered secure healthcare software including ePrivate Prescription, EMRpro and LabLink for UK providers.",
  },
};

export default function EhealthSolutionsCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/ehealth-solutions.html");

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="ehealth-solutions" />
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

