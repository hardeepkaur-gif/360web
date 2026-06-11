import Script from "next/script";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Case Studies | 360 Web Solutions",
  description:
    "Explore all 360 Web Solutions case studies across SEO, content writing, web development, and AI consultancy.",
  openGraph: {
    title: "Case Studies | 360 Web Solutions",
    description:
      "See how we delivered growth for RDX Sports, Virco Dental, Xogo Sports, Propday CRM, and eHealth Solutions.",
  },
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

