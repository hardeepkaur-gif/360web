import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | 360 Web Solutions",
  description:
    "How 360 Smart Solutions Limited handles refunds and cancellations for retainer and project engagements — notice periods, deposits, and statutory rights.",
  openGraph: {
    title: "Refund & Cancellation Policy | 360 Web Solutions",
    description:
      "Cancellation notice, fees during notice, project refunds, eligibility, and how to request — England and Wales.",
  },
};

export default function RefundCancellationPolicyPage() {
  const html = loadLegacySiteHtml("refund-cancellation-policy.html");


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
