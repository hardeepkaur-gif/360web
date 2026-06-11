import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Intellectual Property Notice | 360 Web Solutions",
  description:
    "Copyright, trade marks, permitted use of 360websolutions.co.uk content, client deliverables, and how to report IP concerns — 360 Smart Solutions Limited.",
  openGraph: {
    title: "Intellectual Property Notice | 360 Web Solutions",
    description:
      "IP ownership, brand use, deliverables framework, proprietary methodologies, and enforcement — England and Wales.",
  },
};

export default function IntellectualPropertyNoticePage() {
  const html = loadLegacySiteHtml("intellectual-property-notice.html");


  return (
    <>
      <BreadcrumbSchemaScript pageKey="intellectualPropertyNotice" />
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

