import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Local SEO Services UK | Improve Local Rankings Fast",
  description:
    "Boost your visibility with local SEO services tailored for UK businesses. Improve Google rankings, maps visibility, traffic, and local leads.",
  openGraph: {
    title: "Local SEO Services UK | Improve Local Rankings Fast",
    description:
      "Boost your visibility with local SEO services tailored for UK businesses. Improve Google rankings, maps visibility, traffic, and local leads.",
  },
};

const LOCAL_SEO_ROUTE_RESPONSIVE_CSS = `
body:has(#local-seo-hero-title) #main.svc-page {
  min-width: 0;
}

@media (min-width: 961px) {
  body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__inner {
    align-items: start;
  }

  body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__visual {
    display: block;
    min-height: 0;
    width: 100%;
  }

  body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__figure {
    margin: 0;
    width: 100%;
    overflow: hidden;
  }

  body:has(#local-seo-hero-title) #local-seo-what-is .svc-ai-about__hero-img {
    width: 100%;
    height: 100%;
    min-height: 0 !important;
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

@media (min-width: 1081px) {
  body:has(#local-seo-hero-title) #local-seo-services-include .svc-body {
    align-items: start;
  }

  body:has(#local-seo-hero-title) #local-seo-services-include .svc-right {
    min-height: 0 !important;
  }
}

#local-seo-compare .compare__table {
  max-width: 820px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

#local-seo-compare .compare__head,
#local-seo-compare .compare__row {
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.1fr) minmax(0, 0.95fr);
}

#local-seo-compare .compare__head .compare__cell,
#local-seo-compare .compare__row .compare__cell {
  padding-left: 18px;
  padding-right: 18px;
}

@media (min-width: 961px) {
  body:has(#local-seo-hero-title) #local-seo-packages-pricing.seo-matters .seo-matters__grid {
    align-items: stretch;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: clamp(36px, 5vw, 64px);
  }

  body:has(#local-seo-hero-title) #local-seo-packages-pricing.seo-matters .seo-matters__visual {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    padding: 12px 0 12px 12px;
    min-height: 0;
  }

  body:has(#local-seo-hero-title) #local-seo-packages-pricing.seo-matters .seo-matters__frame {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    align-items: stretch;
  }

  body:has(#local-seo-hero-title) #local-seo-packages-pricing.seo-matters .seo-matters__frame img {
    aspect-ratio: unset;
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: cover;
    object-position: center;
  }
}
`;

export default function LocalSeoServicesPage() {
  const html = loadLegacyPageWithSiteFooter("services/local-seo-services.html");

  return (
    <>
      <ServiceSchemaScript slug="local-seo-services" />
      <link
        rel="preload"
        href="/assets/images/local-seo-hero.webp?v=20260719g"
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
      <Script src="/js/local-seo-what-is.js" strategy="lazyOnload" />
      <Script src="/js/local-seo-services-include.js" strategy="lazyOnload" />
      <Script
        id="local-seo-process"
        src="/js/local-seo-process.js"
        strategy="lazyOnload"
      />
      <Script src="/js/hero-lead-form.js?v=20260719" strategy="afterInteractive" />
    </>
  );
}
