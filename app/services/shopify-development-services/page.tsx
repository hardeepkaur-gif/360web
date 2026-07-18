import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Shopify Development Services UK | Custom Ecommerce Stores",
  description:
    "Shopify development services UK for custom ecommerce stores: theme customisation, migrations, Shopify Plus, performance optimisation, and ongoing support.",
  openGraph: {
    title: "Shopify Development Services UK | Custom Ecommerce Stores",
    description:
      "Shopify development services UK for custom ecommerce stores: theme customisation, migrations, Shopify Plus, performance optimisation, and ongoing support.",
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
