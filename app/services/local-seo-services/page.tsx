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

@media (min-width: 961px) {
  body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__inner {
    align-items: stretch;
  }

  body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__visual {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__figure {
    flex: 1 1 auto;
    min-height: 0;
    height: 100%;
    overflow: hidden;
  }

  body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__hero-img {
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: cover;
    object-position: center;
  }
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

#local-seo-why-matters .seo-who-needs__lede {
  max-width: 100%;
}

#local-seo-why-matters .local-seo-why-matters__list {
  margin: 0.65rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

#local-seo-why-matters .local-seo-why-matters__list li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 15px;
  line-height: 1.55;
  color: var(--ink-3);
}

#local-seo-why-matters .local-seo-why-matters__list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--coral);
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
