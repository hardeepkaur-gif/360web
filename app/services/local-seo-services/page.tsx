import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Local SEO Services UK | Google Maps & Local Search",
  description:
    "Local SEO services for UK small businesses. Improve Google Maps visibility, local pack rankings, and high-intent enquiries with Google Business Profile optimisation.",
  openGraph: {
    title: "Local SEO Services UK | Google Maps & Local Search",
    description:
      "Local SEO services for UK small businesses. Improve Google Maps visibility, local pack rankings, and high-intent enquiries with Google Business Profile optimisation.",
  },
};

const LOCAL_SEO_ROUTE_RESPONSIVE_CSS = `
body:has(#local-seo-hero-title) #main.svc-page {
  min-width: 0;
}

body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__inner {
  align-items: start;
}

body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__figure {
  flex: none;
}

body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__hero-img {
  height: auto;
  min-height: 0;
  object-fit: contain;
}

@media (max-width: 767px) {
  body:has(#local-seo-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#local-seo-hero-title) #local-seo-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#local-seo-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#local-seo-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#local-seo-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}
`;

export default function LocalSeoServicesPage() {
  const html = loadLegacyPageWithSiteFooter("services/local-seo-services.html");

  return (
    <>
      <link
        rel="preload"
        href="/assets/images/seo-audit-service-local.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <style
        dangerouslySetInnerHTML={{ __html: LOCAL_SEO_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script src="/js/local-seo-process.js" strategy="lazyOnload" />
    </>
  );
}
