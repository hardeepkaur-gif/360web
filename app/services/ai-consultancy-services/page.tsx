import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "AI Consultancy Services UK| 360 Web Solutions",
  description:
    "Are you looking for AI consultancy services for your business? We delivered a production-ready AI solution that delivers real ROI. Get a free consultation today.",
  openGraph: {
    title: "AI Consultancy Services UK| 360 Web Solutions",
    description:
      "Are you looking for AI consultancy services for your business? We delivered a production-ready AI solution that delivers real ROI. Get a free consultation today.",
  },
};

export default function AiConsultancyServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/ai-consultancy-services.html",
  );

  return (
    <>
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

