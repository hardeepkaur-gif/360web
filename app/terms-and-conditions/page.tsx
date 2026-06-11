import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Terms and Conditions | 360 Web Solutions",
  description:
    "Terms and Conditions for 360 Smart Solutions Limited trading as 360 Web Solutions — services, fees, IP, liability, and governing law.",
  openGraph: {
    title: "Terms and Conditions | 360 Web Solutions",
    description:
      "Legal terms for engaging 360 Web Solutions: contract formation, payment, client responsibilities, cancellation, and dispute resolution.",
  },
};

export default function TermsAndConditionsPage() {
  const html = loadLegacySiteHtml("terms-and-conditions.html");


  return (
    <>
      <BreadcrumbSchemaScript pageKey="termsAndConditions" />
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

