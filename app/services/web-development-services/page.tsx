import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Web Development Services | Custom Websites That Convert",
  description:
    "Web development services built for speed, UX, SEO and conversions. We create custom, WordPress, Shopify and ecommerce websites for UK businesses.",
  openGraph: {
    title: "Web Development Services | Custom Websites That Convert",
    description:
      "Web development services built for speed, UX, SEO and conversions. We create custom, WordPress, Shopify and ecommerce websites for UK businesses.",
  },
};

export default function WebDevelopmentServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/web-development-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="web-development-services" />
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

