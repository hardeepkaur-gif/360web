import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Thank You | 360 Web Solutions",
  description:
    "Your message has been received. A member of the 360 Web Solutions team will be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  const html = loadLegacyPageWithSiteFooter("thank-you.html");

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
