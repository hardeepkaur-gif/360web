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

const WEBDEV_ROUTE_CSS = `
#main.svc-page.svc-page--webdev{display:flex;flex-direction:column}
#main.svc-page.svc-page--webdev>.hero.hero--webdev{order:1!important;position:relative;z-index:2}
#main.svc-page.svc-page--webdev>.svc-webdev-ticker{order:2!important}
#main.svc-page.svc-page--webdev>#svc-webdev-transform{order:3!important}
#main.svc-page.svc-page--webdev>#include{order:4!important}
#main.svc-page.svc-page--webdev>#website-types{order:5!important}
#main.svc-page.svc-page--webdev>#agency-compare{order:6!important}
#main.svc-page.svc-page--webdev>#dev-process{order:7!important}
#main.svc-page.svc-page--webdev>.wd-migration{order:8!important}
#main.svc-page.svc-page--webdev>#webdev-case-studies{order:9!important}
#main.svc-page.svc-page--webdev>#faq-webdev{order:10!important}
.hero.hero--webdev .hero-lead__title{font-size:clamp(17px,1.7vw,21px)!important}
`;

export default function WebDevelopmentServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/web-development-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="web-development-services" />
      <link
        rel="preload"
        href="/assets/images/web-development-services-hero.webp?v=20260825c"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <style dangerouslySetInnerHTML={{ __html: WEBDEV_ROUTE_CSS }} />
      <div
        className="site-legacy"
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script src="/js/hero-lead-form.js?v=20260719" strategy="afterInteractive" />
    </>
  );
}
