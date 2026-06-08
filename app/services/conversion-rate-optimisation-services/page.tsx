import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Conversion Rate Optimisation Services UK | 360 Web Solutions",
  description:
    "Turn more of your existing traffic into leads and customers. Our CRO services help UK businesses audit, test and measure conversion barriers with data-backed changes.",
  openGraph: {
    title: "Conversion Rate Optimisation Services UK | 360 Web Solutions",
    description:
      "Turn more of your existing traffic into leads and customers. Our CRO services help UK businesses audit, test and measure conversion barriers with data-backed changes.",
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
