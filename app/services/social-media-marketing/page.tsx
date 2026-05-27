import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Social Media Marketing Services UK - 360 Web Solutions",
  description:
    "We build social media strategies, content systems and paid campaigns that drive measurable business growth. Trusted social media marketing agency serving brands across the UK.",
  openGraph: {
    title: "Social Media Marketing Services UK - 360 Web Solutions",
    description:
      "We build social media strategies, content systems and paid campaigns that drive measurable business growth. Trusted social media marketing agency serving brands across the UK.",
  },
};

export default function SocialMediaMarketingPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/social-media-marketing.html",
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

