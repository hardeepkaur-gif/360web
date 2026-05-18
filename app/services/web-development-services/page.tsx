import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title:
    "Web Development Services UK | Custom Websites London — 360 Web Solutions",
  description:
    "Professional web development: custom builds, WordPress, Shopify, speed optimisation & SEO-ready architecture. In-house London team — free consultation.",
  openGraph: {
    title: "Web Development Services Built to Grow Your Business | 360 Web Solutions",
    description:
      "Websites built for usability, search visibility & commercial return. Secure code, scalable architecture, no lock-in.",
  },
};

export default function WebDevelopmentServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/web-development-services.html",
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
