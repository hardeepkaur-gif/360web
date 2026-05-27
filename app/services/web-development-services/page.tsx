import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Web Development Services | Custom Websites That Convert",
  description:
    "Web development services built for speed, UI-UX, SEO, growth, and conversion. 360 Web Solutions builds custom websites, WordPress, Shopify, and ecommerce platforms for UK businesses.",
  openGraph: {
    title: "Web Development Services | Custom Websites That Convert",
    description:
      "Web development services built for speed, UI-UX, SEO, growth, and conversion. 360 Web Solutions builds custom websites, WordPress, Shopify, and ecommerce platforms for UK businesses.",
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
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}

