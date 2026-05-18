import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | 360 Web Solutions",
  description:
    "Standards of conduct for using 360websolutions.co.uk and services from 360 Smart Solutions Limited trading as 360 Web Solutions.",
  openGraph: {
    title: "Acceptable Use Policy | 360 Web Solutions",
    description:
      "Permitted use, prohibited conduct, client obligations, breach consequences, and reporting — England and Wales.",
  },
};

export default function AcceptableUsePolicyPage() {
  const html = loadLegacySiteHtml("acceptable-use-policy.html");


  return (
    <>
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
