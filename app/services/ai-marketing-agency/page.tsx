import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title:
    "AI Marketing Agency UK | 360 Web Solutions — Campaigns, Content & Growth",
  description:
    "UK AI marketing agency: brand-safe creative, paid and organic campaigns, and measurable growth — with AI used where it genuinely improves speed and performance.",
  openGraph: {
    title: "AI Marketing Agency UK | 360 Web Solutions",
    description:
      "Strategy-led marketing with practical AI — not gimmicks. Talk to our UK in-house team about your next campaign.",
  },
};

export default function AiMarketingAgencyPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/ai-marketing-agency.html",
  );

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
