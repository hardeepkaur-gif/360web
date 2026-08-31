import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Shopify Development Services UK | 360 Web Solutions",
  description:
    "360 Web Solutions provides Shopify development services in the UK, building custom stores, themes, app integrations, and optimised ecommerce solutions.",
  openGraph: {
    title: "Shopify Development Services UK | 360 Web Solutions",
    description:
      "360 Web Solutions provides Shopify development services in the UK, building custom stores, themes, app integrations, and optimised ecommerce solutions.",
  },
};

export default function ShopifyDevelopmentServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/shopify-development-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="shopify-development-services" />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script src="/js/hero-lead-form.js?v=20260718" strategy="afterInteractive" />
    </>
  );
}
