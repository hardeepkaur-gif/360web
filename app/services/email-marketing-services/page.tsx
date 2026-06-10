import Script from "next/script";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { getServiceBreadcrumbTrail } from "@/lib/breadcrumbSchema";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Expert Email Marketing Services UK | Drive Real ROI",
  description:
    "When strategy, automation and design work together, email marketing delivers exceptional ROI. 360 Web Solutions turns your inbox into a revenue-generating engine.",
  openGraph: {
    title: "Expert Email Marketing Services UK | Drive Real ROI",
    description:
      "When strategy, automation and design work together, email marketing delivers exceptional ROI. 360 Web Solutions turns your inbox into a revenue-generating engine.",
  },
};

const EMAIL_MARKETING_ROUTE_RESPONSIVE_CSS = `
body:has(#email-marketing-hero-title) #main.svc-page {
  min-width: 0;
}

@media (max-width: 767px) {
  body:has(#email-marketing-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#email-marketing-hero-title) #email-marketing-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#email-marketing-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#email-marketing-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#email-marketing-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}

@media (min-width: 1081px) {
  body:has(#email-marketing-hero-title) #email-marketing-services-include .svc-body {
    align-items: start;
  }

  body:has(#email-marketing-hero-title) #email-marketing-services-include .svc-right {
    min-height: 0 !important;
  }
}

#email-marketing-services-include .svc-hdr .sub a.brand-link {
  color: #ff4d3a !important;
  font-weight: 600;
  text-decoration: none !important;
  -webkit-text-fill-color: #ff4d3a !important;
}

#email-marketing-services-include .svc-hdr .sub a.brand-link:hover {
  color: #ff6a5a !important;
  text-decoration: underline !important;
  -webkit-text-fill-color: #ff6a5a !important;
}

#email-marketing-why-roi .smm-diag__footer a.brand-link {
  color: #ff4d3a !important;
  font-weight: 600;
  text-decoration: none !important;
  -webkit-text-fill-color: #ff4d3a !important;
}

#email-marketing-why-roi .smm-diag__footer a.brand-link:hover {
  color: #ff6a5a !important;
  text-decoration: underline !important;
  -webkit-text-fill-color: #ff6a5a !important;
}

#email-marketing-what .seo-split__content p a.brand-link {
  color: #ff4d3a !important;
  font-weight: 600;
  text-decoration: none !important;
  -webkit-text-fill-color: #ff4d3a !important;
}

#email-marketing-what .seo-split__content p a.brand-link:hover {
  color: #ff6a5a !important;
  text-decoration: underline !important;
  -webkit-text-fill-color: #ff6a5a !important;
}
`;

export default function EmailMarketingServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/email-marketing-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="email-marketing-services" />
      <BreadcrumbSchemaScript items={getServiceBreadcrumbTrail("email-marketing-services")} />
      <link
        rel="preload"
        href="/assets/images/email-marketing-hero.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <style
        dangerouslySetInnerHTML={{ __html: EMAIL_MARKETING_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script src="/js/email-marketing-services-include.js" strategy="lazyOnload" />
      <Script
        id="email-marketing-process"
        src="/js/email-marketing-process.js"
        strategy="lazyOnload"
      />
    </>
  );
}
