import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Disclaimer | 360 Web Solutions",
  description:
    "Website disclaimer for 360 Smart Solutions Limited trading as 360 Web Solutions covering SEO results, content accuracy, third-party links and liability.",
  openGraph: {
    title: "Disclaimer | 360 Web Solutions",
    description:
      "Website disclaimer for 360 Smart Solutions Limited trading as 360 Web Solutions covering SEO results, content accuracy, third-party links and liability.",
  },
};

export default function DisclaimerPage() {
  const html = loadLegacySiteHtml("disclaimer.html");


  return (
    <>
      <BreadcrumbSchemaScript pageKey="disclaimer" />
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

