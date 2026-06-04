import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Email Marketing Services UK | Campaigns, Automation & ROI",
  description:
    "Professional email marketing services for UK businesses. Strategy, design, automation and reporting to turn subscribers into customers.",
  openGraph: {
    title: "Email Marketing Services UK | Campaigns, Automation & ROI",
    description:
      "Professional email marketing services for UK businesses. Strategy, design, automation and reporting to turn subscribers into customers.",
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
`;

export default function EmailMarketingServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/email-marketing-services.html",
  );

  return (
    <>
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
    </>
  );
}
