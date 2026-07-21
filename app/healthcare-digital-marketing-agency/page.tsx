import Script from "next/script";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Healthcare Digital Marketing Agency - Medical Marketing London",
  description:
    "Grow your healthcare business with a digital marketing agency that combines NHS experience, SEO, PPC, content, and web design to generate qualified leads.",
  openGraph: {
    title: "Healthcare Digital Marketing Agency - Medical Marketing London",
    description:
      "Grow your healthcare business with a digital marketing agency that combines NHS experience, SEO, PPC, content, and web design to generate qualified leads.",
  },
};

const HEALTHCARE_ROUTE_RESPONSIVE_CSS = `
@media (min-width: 1081px) {
  body:has(#healthcare-hero-title) #healthcare-marketing-services-include .svc-body {
    align-items: start;
  }

  body:has(#healthcare-hero-title) #healthcare-marketing-services-include .svc-right {
    min-height: 0 !important;
  }
}

#healthcare-growth-framework .proc-circle-wrap {
  justify-content: center;
  align-items: center;
}

#healthcare-growth-framework .proc-desc__text p {
  margin: 0 0 18px;
  font-size: 14.5px;
  color: var(--ink-3);
  line-height: 1.65;
}

#healthcare-growth-framework .proc-desc__text p:last-child {
  margin-bottom: 0;
}
`;

export default function HealthcareDigitalMarketingAgencyPage() {
  const html = loadLegacyPageWithSiteFooter(
    "healthcare-digital-marketing-agency.html",
  );

  return (
    <>
      <BreadcrumbSchemaScript pageKey="healthcareDigitalMarketingAgency" />
      <style
        dangerouslySetInnerHTML={{ __html: HEALTHCARE_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script
        src="/js/healthcare-marketing-services-include.js"
        strategy="lazyOnload"
      />
      <Script
        src="/js/healthcare-growth-framework.js?v=20260721w"
        strategy="afterInteractive"
      />
      <Script src="/js/hero-lead-form.js?v=20260718" strategy="afterInteractive" />
    </>
  );
}
