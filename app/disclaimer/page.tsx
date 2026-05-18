import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Disclaimer | 360 Web Solutions",
  description:
    "Website disclaimer for 360 Smart Solutions Limited trading as 360 Web Solutions: no guarantee of SEO results, content accuracy, third-party links, and limitation of liability.",
  openGraph: {
    title: "Disclaimer | 360 Web Solutions",
    description:
      "Legal disclaimer for 360websolutions.co.uk — read alongside our Privacy Policy, Cookie Policy, and Terms and Conditions.",
  },
};

export default function DisclaimerPage() {
  const html = loadLegacySiteHtml("disclaimer.html");


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
