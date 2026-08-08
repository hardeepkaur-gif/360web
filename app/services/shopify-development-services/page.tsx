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

const SHOPIFY_ROUTE_CSS = `
#shopify-services .svc-img-overlay {
  pointer-events: none;
}

#shopify-services .svc-hdr .sub a.brand-link,
#shopify-growth-blockers .seo-who-needs__acc-body-inner a.brand-link,
#shopify-services .svc-img-desc a.brand-link,
#shopify-process .section__lede a.brand-link {
  color: #ff4d3a !important;
  -webkit-text-fill-color: #ff4d3a !important;
  font-weight: 600;
  text-decoration: underline !important;
  text-underline-offset: 2px;
  pointer-events: auto;
}

#shopify-services .svc-hdr .sub a.brand-link:hover,
#shopify-growth-blockers .seo-who-needs__acc-body-inner a.brand-link:hover,
#shopify-services .svc-img-desc a.brand-link:hover,
#shopify-process .section__lede a.brand-link:hover {
  color: #ff6a5a !important;
  -webkit-text-fill-color: #ff6a5a !important;
}

@media (min-width: 1081px) {
  body:has(#shopify-hero-title) #shopify-services .svc-body {
    align-items: start;
  }

  body:has(#shopify-hero-title) #shopify-services .svc-right {
    min-height: 0 !important;
  }
}
`;

export default function ShopifyDevelopmentServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/shopify-development-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="shopify-development-services" />
      <style
        dangerouslySetInnerHTML={{ __html: SHOPIFY_ROUTE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script
        src="/js/shopify-services-include.js?v=20260808a"
        strategy="lazyOnload"
      />
      <Script src="/js/hero-lead-form.js?v=20260718" strategy="afterInteractive" />
    </>
  );
}
