import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Google Ads Management UK | 360 Web Solutions",
  description:
    "Wasting budget on Google ads that don't convert? Our expert Google Ads management delivers real leads and full transparency, with no long contracts.",
  openGraph: {
    title: "Google Ads Management UK | 360 Web Solutions",
    description:
      "Wasting budget on Google ads that don't convert? Our expert Google Ads management delivers real leads and full transparency, with no long contracts.",
  },
};

const GOOGLE_ADS_ROUTE_RESPONSIVE_CSS = `
body:has(#google-ads-hero-title) #main.svc-page {
  min-width: 0;
}

@media (max-width: 767px) {
  body:has(#google-ads-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#google-ads-hero-title) #google-ads-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#google-ads-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#google-ads-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#google-ads-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}

#google-ads-why-underperform .seo-who-needs__lede {
  max-width: 100%;
}

#google-ads-why-underperform-title {
  white-space: normal;
}

#google-ads-why-underperform-title .google-ads-why-underperform__title-line {
  display: block;
}

@media (min-width: 768px) {
  #google-ads-process-title {
    white-space: nowrap;
  }
}

#google-ads-process .proc-circle-wrap {
  justify-content: center;
  align-items: center;
}

#google-ads-process .proc-desc__text p {
  margin: 0 0 18px;
  font-size: 14.5px;
  color: var(--ink-3);
  line-height: 1.65;
}

#google-ads-process .proc-desc__text p:last-child {
  margin-bottom: 0;
}

#google-ads-who-we-work-with {
  background: #f8fafd;
}

@media (min-width: 1081px) {
  body:has(#google-ads-hero-title) #google-ads-services-include .svc-body {
    align-items: start;
  }

  body:has(#google-ads-hero-title) #google-ads-services-include .svc-right {
    min-height: 0 !important;
  }
}
`;

export default function GoogleAdsManagementServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/google-ads-management-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="google-ads-management-services" />
      <link
        rel="preload"
        href="/assets/images/google-ads-management-hero-v2.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <style
        dangerouslySetInnerHTML={{ __html: GOOGLE_ADS_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script
        src="/js/google-ads-services-include.js"
        strategy="lazyOnload"
      />
      <Script src="/js/google-ads-process.js?v=20250709" strategy="afterInteractive" />
    </>
  );
}
