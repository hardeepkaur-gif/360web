import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Social Media Marketing Services UK - 360 Web Solutions",
  description:
    "We build social media strategies, content systems and paid campaigns that drive measurable business growth. Trusted social media marketing agency in the UK.",
  openGraph: {
    title: "Social Media Marketing Services UK - 360 Web Solutions",
    description:
      "We build social media strategies, content systems and paid campaigns that drive measurable business growth. Trusted social media marketing agency in the UK.",
  },
};

const SMM_ROUTE_RESPONSIVE_CSS = `
body:has(#smm-hero-title) #main.svc-page {
  min-width: 0;
}

@media (max-width: 767px) {
  body:has(#smm-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#smm-hero-title) #smm-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#smm-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#smm-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#smm-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}
`;

export default function SocialMediaMarketingPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/social-media-marketing.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="social-media-marketing" />
      <link
        rel="preload"
        href="/assets/images/social-media-hero-bg.png?v=20260730p"
        as="image"
        type="image/png"
        fetchPriority="high"
      />
      <style
        dangerouslySetInnerHTML={{ __html: SMM_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script src="/js/hero-lead-form.js?v=20260719" strategy="afterInteractive" />
    </>
  );
}
