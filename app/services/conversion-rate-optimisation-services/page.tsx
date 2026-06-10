import Script from "next/script";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { getServiceBreadcrumbTrail } from "@/lib/breadcrumbSchema";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "CRO Agency UK | Conversion Rate Optimisation Services",
  description:
    "Fix conversion barriers fast with our Conversion Rate Optimisation services. Convert more visitors without more ad spend. Book your one-hour audit.",
  openGraph: {
    title: "CRO Agency UK | Conversion Rate Optimisation Services",
    description:
      "Fix conversion barriers fast with our Conversion Rate Optimisation services. Convert more visitors without more ad spend. Book your one-hour audit.",
  },
};

const CRO_ROUTE_RESPONSIVE_CSS = `
body:has(#cro-hero-title) #main.svc-page {
  min-width: 0;
}

@media (max-width: 767px) {
  body:has(#cro-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#cro-hero-title) #cro-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#cro-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#cro-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#cro-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}
`;

export default function ConversionRateOptimisationServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/conversion-rate-optimisation-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="conversion-rate-optimisation-services" />
      <BreadcrumbSchemaScript items={getServiceBreadcrumbTrail("conversion-rate-optimisation-services")} />
      <style
        dangerouslySetInnerHTML={{ __html: CRO_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script
        id="cro-process"
        src="/js/cro-process.js"
        strategy="lazyOnload"
      />
    </>
  );
}
