import Script from "next/script";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { getServiceBreadcrumbTrail } from "@/lib/breadcrumbSchema";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "On-Page SEO Services UK | 360 Web Solutions",
  description:
    "Struggling to rank in UK search results? 360 Web Solutions delivers on-page SEO services that improves rankings and traffic with full in-house execution",
  openGraph: {
    title: "On-Page SEO Services UK | 360 Web Solutions",
    description:
      "Struggling to rank in UK search results? 360 Web Solutions delivers on-page SEO services that improves rankings and traffic with full in-house execution",
  },
};

/**
 * Responsive overrides for this route only (mirrors `seo-audit-services/page.tsx`).
 * Legacy HTML from `content/services/on-page-seo-services.html`; scope via `#seo-hero-title`.
 */
const ON_PAGE_SEO_ROUTE_RESPONSIVE_CSS = `
body:has(#seo-hero-title) #main.svc-page {
  min-width: 0;
}

@media (max-width: 767px) {
  body:has(#seo-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#seo-hero-title) #seo-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#seo-hero-title) .compare__cta-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#seo-hero-title) .compare__cta-actions .btn {
    width: 100%;
    justify-content: center;
  }
  body:has(#seo-hero-title) .svc-img img {
    width: 100%;
    object-fit: cover;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#seo-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}
`;

export default function OnPageSeoServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/on-page-seo-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="on-page-seo-services" />
      <BreadcrumbSchemaScript items={getServiceBreadcrumbTrail("on-page-seo-services")} />
      <style
        dangerouslySetInnerHTML={{ __html: ON_PAGE_SEO_ROUTE_RESPONSIVE_CSS }}
      />
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

