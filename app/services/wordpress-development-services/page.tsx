import Script from "next/script";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { getServiceBreadcrumbTrail } from "@/lib/breadcrumbSchema";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title:
    "WordPress Development Services UK | Custom WordPress Websites — 360 Web Solutions",
  description:
    "WordPress development services for UK businesses: custom builds, technical SEO-ready architecture, migrations, speed optimisation, and ongoing support.",
  openGraph: {
    title: "WordPress Development Services | 360 Web Solutions",
    description:
      "Custom WordPress websites built for speed, visibility, and conversions.",
  },
};

export default function WordPressDevelopmentServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/wordpress-development-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="wordpress-development-services" />
      <BreadcrumbSchemaScript items={getServiceBreadcrumbTrail("wordpress-development-services")} />
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

