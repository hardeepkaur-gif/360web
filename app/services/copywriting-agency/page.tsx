import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Copywriting Agency UK | 360 Web Solutions",
  description:
    "360 Web Solutions, a UK copywriting agency delivering high-converting websites, landing pages, email and ad copy to help turn visitors into leads.",
  openGraph: {
    title: "Copywriting Agency UK | 360 Web Solutions",
    description:
      "360 Web Solutions, a UK copywriting agency delivering high-converting websites, landing pages, email and ad copy to help turn visitors into leads.",
  },
};

const COPYWRITING_ROUTE_RESPONSIVE_CSS = `
body:has(#copywriting-hero-title) #main.svc-page {
  min-width: 0;
}

body:has(#copywriting-hero-title) .hero--copywriting .hero__content {
  min-width: 0;
  max-width: 100%;
}

@media (min-width: 1025px) {
  body:has(#copywriting-hero-title) .hero.hero--copywriting .hero__inner {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    gap: clamp(32px, 3.5vw, 48px);
  }
}

body:has(#copywriting-hero-title) .hero--copywriting .hero__photo {
  min-width: 0;
}

body:has(#copywriting-hero-title) #copywriting-hero-title {
  max-width: 100%;
}

body:has(#copywriting-hero-title) #copywriting-hero-title .hero__title-line {
  display: block;
  max-width: 100%;
}

@media (min-width: 768px) {
  body:has(#copywriting-hero-title) .hero--copywriting .hero__title.hero__title--serif {
    font-size: clamp(26px, 2.55vw, 40px);
    line-height: 1.14;
  }
}

body:has(#copywriting-hero-title) .hero--copywriting .hero__subtitle {
  max-width: 640px;
}

body:has(#copywriting-hero-title) .hero--copywriting .hero__cta {
  flex-wrap: nowrap;
  align-items: center;
}

body:has(#copywriting-hero-title) .hero--copywriting .hero__cta .btn--coral {
  white-space: nowrap;
  max-width: none;
  width: auto;
}

#copywriting-how-it-works-title,
#copywriting-services-title,
#copywriting-copy-audit-cta-title,
#copywriting-holds-back-title,
#copywriting-copy-signs-title,
#copywriting-agency-offer-title,
#copywriting-clarity-cta-title,
#copywriting-why-choose-title,
#copywriting-agency-compare-title,
#copywriting-industries-title,
#copywriting-when-to-hire-title,
#copywriting-pricing-title,
#faq-copywriting-agency-title {
  white-space: normal;
}

#copywriting-agency-offer.section.svc-transform {
  background: #ffffff;
}

#copywriting-agency-offer .svc-transform__grid {
  gap: clamp(28px, 3.5vw, 44px);
}

@media (min-width: 993px) {
  #copywriting-agency-offer .svc-transform__grid {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }

  #copywriting-agency-offer .svc-transform__photos {
    max-width: min(100%, 400px);
    margin-left: auto;
    margin-right: 0;
  }
}

@media (max-width: 992px) {
  #copywriting-agency-offer .svc-transform__grid,
  #copywriting-when-to-hire .svc-transform__grid {
    gap: clamp(24px, 5vw, 36px);
  }
}

#copywriting-when-to-hire.section.svc-transform {
  background: #ffffff;
}

#copywriting-industries {
  background: #f5f7fa !important;
}

#copywriting-why-choose .seo-choose__intro {
  max-width: none;
  width: 100%;
}

#copywriting-why-choose-title {
  max-width: none;
  width: 100%;
}

#copywriting-agency-compare .section__head,
#copywriting-agency-compare .section__head.reveal.is-visible {
  max-width: none;
  width: 100%;
}

#copywriting-agency-compare-title,
#copywriting-agency-compare .section__lede--light {
  max-width: none;
  width: 100%;
}

@media (min-width: 901px) {
  #copywriting-why-choose .seo-choose__split {
    align-items: stretch;
  }

  #copywriting-why-choose .seo-choose__copy-col,
  #copywriting-why-choose .seo-choose__visual {
    align-self: stretch;
    min-height: 0;
  }

  #copywriting-why-choose .seo-choose__visual {
    height: 100%;
    padding-bottom: 44px;
  }

  #copywriting-why-choose .seo-choose__frame {
    min-height: 0 !important;
    height: 100%;
    flex: 1 1 auto;
  }

  #copywriting-why-choose .seo-choose__frame img {
    height: 100%;
    min-height: 0;
  }
}

#copywriting-holds-back .section__head,
#copywriting-holds-back .section__head.reveal.is-visible {
  max-width: none;
  width: 100%;
}

#copywriting-holds-back-title,
#copywriting-holds-back .section__lede,
#copywriting-holds-back .proc-desc__title,
#copywriting-holds-back .proc-desc__text,
#copywriting-holds-back .proc-desc__text p {
  max-width: none;
  width: 100%;
}

#copywriting-holds-back .proc-desc__title {
  white-space: normal;
  font-size: clamp(18px, 2.1vw, 22px);
  line-height: 1.25;
}

#copywriting-holds-back .proc-desc__text p {
  margin: 0 0 18px;
  font-size: 14.5px;
  color: var(--ink-3);
  line-height: 1.65;
}

#copywriting-holds-back .proc-desc__text p:last-child {
  margin-bottom: 0;
}

#copywriting-services .svc-hdr,
#copywriting-services .svc-hdr.reveal.is-visible {
  max-width: none;
  width: 100%;
}

#copywriting-services-title {
  max-width: none;
  width: 100%;
}

#copywriting-services .svc-img-overlay {
  pointer-events: none;
}

#copywriting-services .sl {
  grid-template-columns: 56px minmax(0, 1fr);
}

#copywriting-services .sl-name {
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}

#copywriting-services .svc-right.reveal {
  opacity: 1;
  transform: none;
}

body:has(#copywriting-hero-title) #copywriting-certifications .ai-cert-stripes__list {
  align-items: stretch;
}

body:has(#copywriting-hero-title) #copywriting-certifications .ai-cert-stripes__item {
  display: flex;
  flex-direction: row;
  align-items: center !important;
  justify-content: flex-start;
  gap: 14px;
  height: 100%;
}

body:has(#copywriting-hero-title) #copywriting-certifications .ai-cert-stripes__icon-wrap {
  align-self: center;
  flex-shrink: 0;
  margin-top: 0 !important;
}

body:has(#copywriting-hero-title) #copywriting-certifications .ai-cert-stripes__icon {
  animation: none !important;
  transform: none !important;
}

body:has(#copywriting-hero-title) #copywriting-certifications .ai-cert-stripes__text {
  display: block;
  flex: 1;
  min-width: 0;
  min-height: 0;
  text-align: left;
}

body:has(#copywriting-hero-title) #copywriting-certifications .ai-cert-stripes__code {
  display: block;
  line-height: 1.35;
}

@media (min-width: 1081px) {
  body:has(#copywriting-hero-title) #copywriting-services .svc-body {
    align-items: stretch;
  }

  body:has(#copywriting-hero-title) #copywriting-services .svc-left,
  body:has(#copywriting-hero-title) #copywriting-services .svc-right {
    min-height: 0;
    height: 100%;
    align-self: stretch;
  }
}

@media (max-width: 767px) {
  body:has(#copywriting-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#copywriting-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#copywriting-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
    text-align: center;
    white-space: normal;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#copywriting-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}

#copywriting-industries .copywriting-industries-cta {
  margin-top: clamp(36px, 5vw, 52px);
}

#copywriting-industries .copywriting-industries-cta__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) auto;
  align-items: center;
  gap: clamp(24px, 4vw, 40px);
  padding: clamp(32px, 4.5vw, 48px) clamp(28px, 4vw, 44px);
  border-radius: var(--radius-xl);
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.78)),
    linear-gradient(135deg, #fff7f4 0%, #f4f8ff 52%, #ffffff 100%);
  border: 1px solid rgba(26, 95, 191, 0.12);
  box-shadow:
    0 24px 56px -32px rgba(15, 42, 74, 0.22),
    0 1px 0 rgba(255, 255, 255, 0.9) inset;
}

#copywriting-industries .copywriting-industries-cta__inner::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(380px 240px at 100% 0%, rgba(255, 77, 58, 0.12), transparent 58%),
    radial-gradient(320px 220px at 0% 100%, rgba(26, 95, 191, 0.1), transparent 62%);
  pointer-events: none;
}

#copywriting-industries .copywriting-industries-cta__inner::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--coral), #1a5fbf);
  pointer-events: none;
}

#copywriting-industries .copywriting-industries-cta__wm {
  position: absolute;
  right: clamp(12px, 3vw, 28px);
  top: 50%;
  translate: 0 -50%;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(72px, 12vw, 120px);
  line-height: 1;
  letter-spacing: -0.06em;
  color: rgba(15, 42, 74, 0.05);
  pointer-events: none;
  user-select: none;
}

#copywriting-industries .copywriting-industries-cta__copy,
#copywriting-industries .copywriting-industries-cta__actions {
  position: relative;
  z-index: 1;
}

#copywriting-industries .copywriting-industries-cta__chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--navy);
  background: rgba(255, 77, 58, 0.08);
  border: 1px solid rgba(255, 77, 58, 0.18);
}

#copywriting-industries .copywriting-industries-cta__chip::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--coral);
  box-shadow: 0 0 0 4px rgba(255, 77, 58, 0.22);
}

#copywriting-industries .copywriting-industries-cta__title {
  margin: 0 0 10px;
  font-family: var(--font-display);
  font-size: clamp(24px, 2.4vw, 32px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--navy);
}

#copywriting-industries .copywriting-industries-cta__desc {
  margin: 0;
  max-width: 56ch;
  font-size: clamp(15px, 1.05vw, 17px);
  line-height: 1.65;
  color: var(--ink-3);
}

#copywriting-industries .copywriting-industries-cta__actions {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 767px) {
  #copywriting-industries .copywriting-industries-cta__inner {
    grid-template-columns: 1fr;
  }

  #copywriting-industries .copywriting-industries-cta__actions {
    justify-content: stretch;
  }

  #copywriting-industries .copywriting-industries-cta__actions .btn {
    width: 100%;
    justify-content: center;
  }

  #copywriting-industries .copywriting-industries-cta__wm {
    top: auto;
    bottom: -8px;
    translate: none;
    right: 16px;
    opacity: 0.55;
  }
}
`;

export default function CopywritingAgencyPage() {
  const html = loadLegacyPageWithSiteFooter("services/copywriting-agency.html");

  return (
    <>
      <ServiceSchemaScript slug="copywriting-agency" />
      <link
        rel="preload"
        href="/assets/images/copywriting-agency-hero.webp?v=20260819"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <style
        dangerouslySetInnerHTML={{ __html: COPYWRITING_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="afterInteractive" />
      <Script
        src="/js/copywriting-services-include.js?v=20260820a"
        strategy="afterInteractive"
      />
      <Script src="/js/copywriting-process.js?v=20260819d" strategy="afterInteractive" />
    </>
  );
}
