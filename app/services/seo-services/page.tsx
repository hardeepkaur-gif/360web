import Script from "next/script";
import type { Metadata } from "next";
import { socialMeta } from "@/lib/socialMeta";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Professional SEO Services Agency London",
  description:
    "360 Web Solutions’ SEO services offer technical, on-page, local, AI search, and all, with a free audit and upfront pricing. Book a free consultation now.",
  keywords: ["SEO services"],
  ...socialMeta({
    path: "/services/seo-services",
    title: "Professional SEO Services Agency London",
    description:
      "360 Web Solutions’ SEO services offer technical, on-page, local, AI search, and all, with a free audit and upfront pricing. Book a free consultation now.",
  }),
};

/**
 * Responsive overrides for this route only (mirrors content-marketing / PPC).
 * Legacy HTML from `content/services/seo-services.html`; scope via `#seo-services-hero-title`.
 */
const SEO_SERVICES_ROUTE_RESPONSIVE_CSS = `
body:has(#seo-services-hero-title) #main.svc-page {
  min-width: 0;
}

/* Hero H1 — short lines so title stays in left column (no image overlap) */
body:has(#seo-services-hero-title) .hero .hero__content {
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
}
#seo-services-hero-title.hero__title {
  line-height: 1.12;
  max-width: 100%;
  overflow-wrap: normal;
  word-break: normal;
}
#seo-services-hero-title .hero__title-line {
  display: block;
  white-space: normal;
}

/* Internal text links — brand orange */
body:has(#seo-services-hero-title) a.brand-link {
  color: var(--coral) !important;
  -webkit-text-fill-color: var(--coral) !important;
  font-weight: 600;
  text-decoration: none !important;
}
body:has(#seo-services-hero-title) a.brand-link:hover {
  color: var(--coral-2) !important;
  -webkit-text-fill-color: var(--coral-2) !important;
  text-decoration: underline !important;
}

/* Hero image height matches left content (desktop split only) */
@media (min-width: 1025px) {
  body:has(#seo-services-hero-title) .hero.hero--on-page-seo .hero__inner {
    align-items: stretch;
  }
  body:has(#seo-services-hero-title) .hero .hero__photo--on-page-seo {
    align-self: stretch;
    display: flex;
    align-items: stretch;
    height: auto;
    min-height: 0;
  }
  body:has(#seo-services-hero-title) .hero .hero__on-page-seo-frame {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  body:has(#seo-services-hero-title) .hero .hero__on-page-seo-img {
    aspect-ratio: auto;
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

@media (max-width: 767px) {
  body:has(#seo-services-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#seo-services-hero-title) #seo-services-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#seo-services-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#seo-services-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#seo-services-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}

/* Results — no top padding; 2 case study cards side by side on desktop */
#seo-services-results {
  padding-top: 0;
}
@media (min-width: 901px) {
  #seo-services-results .work__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 980px;
    margin-inline: auto;
  }
}

/* SEO + AI Search — soft section bg */
#seo-services-ai-search {
  background: #f5f7fa !important;
}

/* Why choose — keep left natural; JS sets right frame to left height */
@media (min-width: 901px) {
  #seo-services-why-choose .seo-choose__split {
    align-items: start;
  }

  #seo-services-why-choose .seo-choose__copy-col,
  #seo-services-why-choose .seo-choose__visual {
    align-self: start;
    min-height: 0;
  }

  #seo-services-why-choose .seo-choose__visual {
    height: auto;
    padding-bottom: 44px;
    width: 100%;
  }

  #seo-services-why-choose .seo-choose__frame {
    min-height: 0 !important;
    flex: none;
    overflow: hidden;
  }

  #seo-services-why-choose .seo-choose__frame img {
    width: 100%;
    height: 100%;
    min-height: 0 !important;
    object-fit: cover;
  }
}

/* Which table — 3 columns on desktop only (global compare grid is 4) */
#seo-services-which .compare__table {
  max-width: 920px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 1025px) {
  #seo-services-which .compare__head,
  #seo-services-which .compare__row {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.2fr) minmax(0, 1.1fr);
  }
  #seo-services-which .compare__head .compare__cell,
  #seo-services-which .compare__row .compare__cell {
    padding-left: 18px;
    padding-right: 18px;
  }
  #seo-services-which .compare__row .compare__cell:nth-child(2)::before,
  #seo-services-which .compare__row .compare__cell:nth-child(3)::before,
  #seo-services-which .compare__row .compare__cell--us::before {
    content: none !important;
    display: none !important;
  }
}
@media (max-width: 1024px) {
  #seo-services-which .compare__head {
    display: none;
  }
  #seo-services-which .compare__row {
    grid-template-columns: 1fr !important;
    display: grid;
    gap: 10px;
    padding: 20px;
    margin-bottom: 14px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--white);
    box-shadow: 0 16px 44px rgba(15, 42, 74, 0.06);
  }
  #seo-services-which .compare__cell {
    display: block;
    border-right: none;
    padding: 12px 14px;
    min-width: 0;
  }
  #seo-services-which .compare__row .compare__cell--label {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  #seo-services-which .compare__row .compare__cell:not(.compare__cell--label)::before {
    content: attr(data-label);
    display: block;
    font-family: var(--font-display);
    font-size: 10.5px;
    color: var(--ink-4);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin-bottom: 6px;
    width: auto;
    height: auto;
    background: none;
    border: none;
  }
  #seo-services-which .compare__row .compare__cell--us::before {
    color: var(--coral);
    font-weight: 800;
  }
}

/* What's Included — soft bg + right image panel matches left list height */
#seo-services-include.svc-sec {
  max-width: none;
  width: 100%;
  box-sizing: border-box;
  background: #f5f7fa !important;
  padding-inline: max(24px, calc((100% - var(--container)) / 2));
}

@media (min-width: 1081px) {
  body:has(#seo-services-hero-title) #seo-services-include .svc-body {
    align-items: start;
  }

  body:has(#seo-services-hero-title) #seo-services-include .svc-right {
    min-height: 0 !important;
    align-self: start;
    overflow: hidden;
  }

  body:has(#seo-services-hero-title) #seo-services-include .svc-img,
  body:has(#seo-services-hero-title) #seo-services-include .svc-default {
    inset: 0;
  }

  body:has(#seo-services-hero-title) #seo-services-include .svc-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* Light CTA + phone — homepage styles live in home.css; service pages load inner.css only */
#seo-services-cta-final.cta-final--light {
  position: relative;
  padding: clamp(48px, 7vw, 80px) 0 0;
  background: #fff !important;
  color: var(--navy);
  text-align: left;
  overflow: hidden;
}
#seo-services-cta-final.cta-final--light .cta-final__360,
#seo-services-cta-final.cta-final--light .cta-final__ring,
#seo-services-cta-final.cta-final--light .cta-final__glow {
  display: none !important;
}
#seo-services-cta-final .cta-final__card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(260px, 32vw, 340px);
  align-items: stretch;
  min-height: clamp(300px, 34vw, 380px);
  overflow: hidden;
  border-radius: 20px;
  background: linear-gradient(118deg, #f7f9fc 0%, #fff 42%, rgba(255, 77, 58, .06) 100%);
  border: 1px solid rgba(15, 42, 74, .08);
  box-shadow: 0 4px 6px rgba(15, 42, 74, .04), 0 20px 48px rgba(15, 42, 74, .1);
}
#seo-services-cta-final .cta-final__blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
#seo-services-cta-final .cta-final__blob--navy {
  top: -60px; left: -40px;
  width: clamp(160px, 22vw, 240px);
  height: clamp(160px, 22vw, 240px);
  background: radial-gradient(circle, rgba(15, 42, 74, .1) 0%, transparent 70%);
}
#seo-services-cta-final .cta-final__blob--coral {
  bottom: -70px; left: 38%;
  width: clamp(180px, 24vw, 260px);
  height: clamp(180px, 24vw, 260px);
  background: radial-gradient(circle, rgba(255, 77, 58, .12) 0%, transparent 68%);
}
#seo-services-cta-final .cta-final__content {
  position: relative;
  z-index: 1;
  padding: clamp(32px, 5vw, 52px) clamp(28px, 3.5vw, 48px) clamp(32px, 4vw, 40px) clamp(28px, 4.5vw, 56px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
}
#seo-services-cta-final h2.cta-final__title {
  margin: 0 0 14px;
  max-width: none;
  width: 100%;
  font-size: clamp(24px, 3.2vw, 38px);
  line-height: 1.28;
  letter-spacing: -0.025em;
  color: var(--navy) !important;
  -webkit-text-fill-color: var(--navy) !important;
  text-align: left;
}
#seo-services-cta-final h2.cta-final__title .grad-coral {
  color: var(--coral) !important;
  -webkit-text-fill-color: var(--coral) !important;
  background: none !important;
}
#seo-services-cta-final .cta-final__desc {
  margin: 0;
  max-width: none;
  width: 100%;
  font-size: clamp(15px, 1.35vw, 17px);
  line-height: 1.75;
  color: var(--ink-3) !important;
  text-align: left;
}
#seo-services-cta-final .cta-final__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: clamp(22px, 3vw, 30px);
}
#seo-services-cta-final .cta-final__btn {
  width: fit-content;
  border-radius: 999px;
  padding: 15px 26px;
  gap: 10px;
  box-shadow: 0 14px 32px rgba(255, 77, 58, .35);
}
#seo-services-cta-final .cta-final__note {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-3);
  letter-spacing: .02em;
}
#seo-services-cta-final .cta-final__phone-col {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px);
  background: linear-gradient(180deg, #eef3f8 0%, rgba(232, 239, 246, .6) 100%);
  border-left: 1px solid rgba(15, 42, 74, .06);
}
#seo-services-cta-final .cta-final__phone {
  position: relative;
  width: clamp(175px, 88%, 230px);
  padding: 11px 9px 13px;
  border-radius: 28px;
  background: linear-gradient(165deg, #0b1f38 0%, #0f2a4a 55%, #1a4570 100%);
  border: 2px solid rgba(255, 255, 255, .08);
  box-shadow: 0 4px 16px rgba(15, 42, 74, .28), 0 20px 44px rgba(15, 42, 74, .22), inset 0 1px 0 rgba(255, 255, 255, .12);
  animation: seoSvcCtaPhoneFloat 4.5s ease-in-out infinite;
}
#seo-services-cta-final .cta-final__phone-notch {
  width: 52px;
  height: 6px;
  margin: 0 auto 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .18);
}
#seo-services-cta-final .cta-final__phone-screen {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 220px;
  padding: 12px 10px;
  border-radius: 18px;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(15, 42, 74, .06);
}
#seo-services-cta-final .cta-final__screen-top { text-align: center; }
#seo-services-cta-final .cta-final__screen-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 7px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(26, 95, 191, .1);
  color: #0f2a4a;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
}
#seo-services-cta-final .cta-final__screen-top strong {
  display: block;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: #0f2a4a;
  line-height: 1.3;
}
#seo-services-cta-final .cta-final__screen-top span:last-child {
  font-size: 9px;
  color: #0f2a4a;
}
#seo-services-cta-final .cta-final__screen-hero {
  position: relative;
  min-height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: #eef3f8;
  display: flex;
  align-items: center;
  padding: 10px;
}
#seo-services-cta-final .cta-final__screen-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 70% 30%, rgba(255, 77, 58, .12) 0%, transparent 55%),
    linear-gradient(180deg, rgba(255, 255, 255, .6), transparent 70%);
}
#seo-services-cta-final .cta-final__screen-hero-card {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}
#seo-services-cta-final .cta-final__screen-hero-mark {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, #ff5a45, #ff4d3a);
  color: #fff;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: -0.03em;
  box-shadow: 0 8px 16px rgba(255, 77, 58, .28);
}
#seo-services-cta-final .cta-final__screen-hero-card strong {
  display: block;
  font-size: 11px;
  font-weight: 800;
  color: #0f2a4a;
  line-height: 1.2;
}
#seo-services-cta-final .cta-final__screen-hero-card em {
  display: block;
  margin-top: 2px;
  font-style: normal;
  font-size: 9px;
  font-weight: 600;
  color: #0f2a4a;
}
#seo-services-cta-final .cta-final__screen-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
#seo-services-cta-final .cta-final__screen-list li {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 7px;
  background: #eef3f8;
  font-size: 9px;
  font-weight: 600;
  color: #0f2a4a;
}
#seo-services-cta-final .cta-final__screen-list li::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--coral);
  flex-shrink: 0;
}
#seo-services-cta-final .cta-final__screen-foot {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 9px;
  background: rgba(255, 77, 58, .12);
  color: #0f2a4a;
}
#seo-services-cta-final .cta-final__screen-foot span {
  font-size: 8px;
  color: #0f2a4a;
}
#seo-services-cta-final .cta-final__screen-foot strong {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  color: #0f2a4a;
}
@keyframes seoSvcCtaPhoneFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(1.5deg); }
}
@keyframes seoSvcCtaPhoneFloatMobile {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@media (max-width: 900px) {
  #seo-services-cta-final .cta-final__card {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  #seo-services-cta-final .cta-final__content {
    align-items: center;
    text-align: center;
    padding: 32px 24px 28px;
  }
  #seo-services-cta-final h2.cta-final__title { text-align: center; }
  #seo-services-cta-final .cta-final__actions { align-items: center; }
  #seo-services-cta-final .cta-final__phone-col {
    padding: 32px 24px;
    border-left: none;
    border-top: 1px solid rgba(15, 42, 74, .06);
  }
  #seo-services-cta-final .cta-final__phone {
    width: clamp(175px, 55vw, 230px);
    animation-name: seoSvcCtaPhoneFloatMobile;
  }
}
@media (max-width: 560px) {
  #seo-services-cta-final.cta-final--light { padding: 36px 0 0; }
  #seo-services-cta-final .cta-final__content { padding: 28px 20px 24px; }
  #seo-services-cta-final h2.cta-final__title { font-size: clamp(24px, 7vw, 32px); }
  #seo-services-cta-final .cta-final__actions { width: 100%; }
  #seo-services-cta-final .cta-final__btn {
    width: 100%;
    justify-content: center;
  }
}
@media (prefers-reduced-motion: reduce) {
  #seo-services-cta-final .cta-final__phone { animation: none; }
}
`;

export default function SeoServicesPage() {
  const html = loadLegacyPageWithSiteFooter("services/seo-services.html");

  return (
    <>
      <ServiceSchemaScript slug="seo-services" />
      <style
        dangerouslySetInnerHTML={{ __html: SEO_SERVICES_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js?v=20261126c" strategy="lazyOnload" />
      <Script src="/js/seo-services-process.js?v=20261127a" strategy="lazyOnload" />
      <Script src="/js/seo-services-include.js?v=20261127a" strategy="lazyOnload" />
    </>
  );
}
