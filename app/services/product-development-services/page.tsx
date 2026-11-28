import Script from "next/script";
import type { Metadata } from "next";
import { socialMeta } from "@/lib/socialMeta";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Software Product Development Services | 360 Web Solutions",
  description:
    "Product development services for startups and SMEs, with costs agreed before the build and working software to review every sprint. Book a free consultation.",
  keywords: ["Product development services"],
  ...socialMeta({
    path: "/services/product-development-services",
    title: "Software Product Development Services | 360 Web Solutions",
    description:
      "Product development services for startups and SMEs, with costs agreed before the build and working software to review every sprint. Book a free consultation.",
  }),
};

/**
 * Route-scoped CSS for product development services.
 * Legacy HTML from `content/services/product-development-services.html`.
 */
const PRODUCT_DEV_ROUTE_RESPONSIVE_CSS = `
body:has(#product-dev-hero-title) #main.svc-page {
  min-width: 0;
}

body:has(#product-dev-hero-title) .hero .hero__content {
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

body:has(#product-dev-hero-title) .hero .hero__photo--on-page-seo {
  position: relative;
  z-index: 1;
  min-width: 0;
}

#product-dev-hero-title.hero__title {
  line-height: 1.12;
  max-width: 100%;
  overflow-wrap: normal;
  word-break: normal;
  font-size: clamp(34px, 3.6vw, 52px);
}

#product-dev-hero-title .hero__title-line {
  display: block;
  white-space: normal;
  max-width: 100%;
}

/* Hero image height matches left content — stops bottom overflow into ticker */
@media (min-width: 1025px) {
  body:has(#product-dev-hero-title) .hero.hero--on-page-seo .hero__inner {
    align-items: stretch;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: clamp(36px, 4vw, 56px);
  }
  body:has(#product-dev-hero-title) .hero .hero__photo--on-page-seo {
    align-self: stretch;
    display: flex;
    align-items: stretch;
    height: auto;
    min-height: 0;
  }
  body:has(#product-dev-hero-title) .hero .hero__on-page-seo-frame {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  body:has(#product-dev-hero-title) .hero .hero__on-page-seo-img {
    aspect-ratio: auto;
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

body:has(#product-dev-hero-title) a.brand-link {
  color: var(--coral) !important;
  -webkit-text-fill-color: var(--coral) !important;
}

/* Services include — soft bg + equal panel height sync */
#product-dev-include.svc-sec {
  max-width: none;
  width: 100%;
  box-sizing: border-box;
  background: #f5f7fa !important;
  padding-inline: max(24px, calc((100% - var(--container)) / 2));
}

@media (min-width: 1081px) {
  body:has(#product-dev-hero-title) #product-dev-include .svc-body {
    align-items: start;
  }
  body:has(#product-dev-hero-title) #product-dev-include .svc-right {
    min-height: 0 !important;
    align-self: start;
    overflow: hidden;
  }
}

/* eHealth case study spotlight */
#product-dev-case.product-case-spotlight {
  background: #f5f7fa;
}
#product-dev-case .product-case-spotlight__card {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 0;
  border-radius: 28px;
  overflow: hidden;
  background: #0f2a4a;
  box-shadow: 0 28px 80px rgba(15, 42, 74, 0.22);
}
#product-dev-case .product-case-spotlight__media {
  position: relative;
  min-height: 100%;
  background: #0a1d33;
}
#product-dev-case .product-case-spotlight__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 420px;
}
#product-dev-case .product-case-spotlight__media-shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(15, 42, 74, 0.08) 0%, rgba(15, 42, 74, 0.55) 100%),
    linear-gradient(90deg, transparent 55%, rgba(15, 42, 74, 0.35) 100%);
  pointer-events: none;
}
#product-dev-case .product-case-spotlight__pill {
  position: absolute;
  top: 22px;
  left: 22px;
  z-index: 2;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--navy);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
#product-dev-case .product-case-spotlight__float-stat {
  position: absolute;
  right: 22px;
  bottom: 22px;
  z-index: 2;
  padding: 14px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 16px 40px rgba(15, 42, 74, 0.22);
  display: grid;
  gap: 2px;
}
#product-dev-case .product-case-spotlight__float-stat strong {
  font-family: var(--font-display);
  font-size: 28px;
  line-height: 1;
  color: var(--coral);
  letter-spacing: -0.03em;
}
#product-dev-case .product-case-spotlight__float-stat span {
  font-size: 12px;
  color: var(--ink-4);
  font-weight: 600;
}
#product-dev-case .product-case-spotlight__body {
  padding: clamp(28px, 4vw, 48px);
  color: rgba(255, 255, 255, 0.88);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
}
#product-dev-case .product-case-spotlight__lead {
  margin: 0;
  font-size: clamp(16px, 1.6vw, 18px);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.9);
}
#product-dev-case .product-case-spotlight__platforms {
  display: grid;
  gap: 12px;
}
#product-dev-case .product-case-spotlight__platform {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: start;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
#product-dev-case .product-case-spotlight__platform-num {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 800;
  color: var(--coral);
  letter-spacing: 0.08em;
  margin-top: 2px;
}
#product-dev-case .product-case-spotlight__platform h3 {
  margin: 0 0 4px;
  font-size: 16px;
  color: #fff;
  letter-spacing: -0.01em;
}
#product-dev-case .product-case-spotlight__platform p {
  margin: 0;
  font-size: 14px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.72);
}
#product-dev-case .product-case-spotlight__note {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
}
#product-dev-case .product-case-spotlight__body .btn {
  align-self: flex-start;
  margin-top: 4px;
}
#product-dev-case .product-case-spotlight__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: clamp(22px, 3vw, 32px);
}
#product-dev-case .product-case-spotlight__stat {
  text-align: center;
  padding: 24px 16px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid rgba(15, 42, 74, 0.08);
  box-shadow: 0 16px 44px rgba(15, 42, 74, 0.06);
}
#product-dev-case .product-case-spotlight__stat-val {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 800;
  color: var(--navy);
  letter-spacing: -0.03em;
  line-height: 1.1;
}
#product-dev-case .product-case-spotlight__stat-accent {
  color: var(--coral);
}
#product-dev-case .product-case-spotlight__stat-lbl {
  margin: 8px 0 0;
  font-size: 13px;
  color: var(--ink-4);
  letter-spacing: 0.02em;
}
@media (max-width: 980px) {
  #product-dev-case .product-case-spotlight__card {
    grid-template-columns: 1fr;
  }
  #product-dev-case .product-case-spotlight__media img {
    min-height: 280px;
    max-height: 360px;
  }
}
@media (max-width: 700px) {
  #product-dev-case .product-case-spotlight__stats {
    grid-template-columns: 1fr;
  }
  #product-dev-case .product-case-spotlight__body .btn {
    width: 100%;
    justify-content: center;
  }
}

/* Google reviews band */
#product-dev-testimonials.gr-section {
  background: #f5f7fa !important;
}
#product-dev-testimonials.gr-section::before {
  display: none !important;
}

/* Why choose — keep left natural; JS sets right frame to left height */
@media (min-width: 901px) {
  #product-dev-why-choose .seo-choose__split {
    align-items: start;
  }
  #product-dev-why-choose .seo-choose__copy-col,
  #product-dev-why-choose .seo-choose__visual {
    align-self: start;
  }
  #product-dev-why-choose .seo-choose__frame {
    min-height: 0;
  }
  #product-dev-why-choose .seo-choose__frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 767px) {
  body:has(#product-dev-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#product-dev-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#product-dev-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}
`;

export default function ProductDevelopmentServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/product-development-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="product-development-services" />
      <style
        dangerouslySetInnerHTML={{ __html: PRODUCT_DEV_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js?v=20261126c" strategy="lazyOnload" />
      <Script
        src="/js/product-development-process.js?v=20261128e"
        strategy="lazyOnload"
      />
      <Script
        src="/js/product-development-include.js?v=20261128a"
        strategy="lazyOnload"
      />
    </>
  );
}
