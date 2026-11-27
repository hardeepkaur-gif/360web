import Script from "next/script";
import type { Metadata } from "next";
import { socialMeta } from "@/lib/socialMeta";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Content marketing services London | 360 Web Solutions",
  description:
    "Publishing content but getting no leads? Our content marketing services plan, write, and measure content that brings in leads. Get my free content review.",
  keywords: ["Content marketing services"],
  ...socialMeta({
    path: "/services/content-marketing-services",
    title: "Content marketing services London | 360 Web Solutions",
    description:
      "Publishing content but getting no leads? Our content marketing services plan, write, and measure content that brings in leads. Get my free content review.",
  }),
};

/**
 * Responsive overrides for this route only (mirrors PPC / email service pages).
 * Legacy HTML from `content/services/content-marketing-services.html`; scope via `#content-marketing-hero-title`.
 */
const CONTENT_MARKETING_ROUTE_RESPONSIVE_CSS = `
body:has(#content-marketing-hero-title) #main.svc-page {
  min-width: 0;
}

/* Internal text links — brand orange */
body:has(#content-marketing-hero-title) a.brand-link {
  color: var(--coral) !important;
  -webkit-text-fill-color: var(--coral) !important;
  font-weight: 600;
  text-decoration: none !important;
}
body:has(#content-marketing-hero-title) a.brand-link:hover {
  color: var(--coral-2) !important;
  -webkit-text-fill-color: var(--coral-2) !important;
  text-decoration: underline !important;
}

/* No-leads: 6 cards → 3 per row on desktop */
@media (min-width: 1025px) {
  #content-marketing-no-leads .seo-trust__cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Testimonials band */
#content-marketing-testimonials.gr-section {
  background: #f5f7fa !important;
}
#content-marketing-testimonials.gr-section::before {
  display: none !important;
}

/* Hero image height matches left content (desktop split only) */
@media (min-width: 1025px) {
  body:has(#content-marketing-hero-title) .hero.hero--on-page-seo .hero__inner {
    align-items: stretch;
  }
  body:has(#content-marketing-hero-title) .hero .hero__photo--on-page-seo {
    align-self: stretch;
    display: flex;
    align-items: stretch;
    height: auto;
    min-height: 0;
  }
  body:has(#content-marketing-hero-title) .hero .hero__on-page-seo-frame {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  body:has(#content-marketing-hero-title) .hero .hero__on-page-seo-img {
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
  body:has(#content-marketing-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#content-marketing-hero-title) #content-marketing-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#content-marketing-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#content-marketing-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#content-marketing-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}

/* Google + AI — soft section bg */
#content-marketing-google-ai {
  background: #f5f7fa !important;
}

/* Google + AI — icons above headings */
#content-marketing-google-ai .seo-audit-time__icon {
  width: 48px;
  height: 48px;
  margin: 0 0 14px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(26, 95, 191, 0.12) 0%, rgba(26, 95, 191, 0.02) 100%);
  color: var(--blue);
  border: 1px solid rgba(26, 95, 191, 0.12);
}
#content-marketing-google-ai .seo-audit-time__icon svg {
  width: 24px;
  height: 24px;
}
#content-marketing-google-ai .seo-audit-time__item:hover .seo-audit-time__icon {
  background: linear-gradient(135deg, rgba(255, 77, 58, 0.14) 0%, rgba(255, 77, 58, 0.04) 100%);
  color: var(--coral);
  border-color: rgba(255, 77, 58, 0.22);
}

/* Google + AI — match SEO audit duration split + item motion */
#content-marketing-google-ai .section__head {
  text-align: center;
  max-width: min(100%, 980px);
  margin: 0 auto clamp(36px, 5vw, 52px);
}
#content-marketing-google-ai .section__head .section__lede {
  max-width: 46rem;
}
#content-marketing-google-ai .seo-audit-time__item.reveal {
  opacity: 0;
  transform: translate3d(-28px, 22px, 0);
  transition:
    opacity 0.85s var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1)),
    transform 0.85s var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1)),
    box-shadow 0.45s var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1)),
    border-color 0.45s var(--ease-out, cubic-bezier(0.22, 1, 0.36, 1));
  transition-delay: var(--delay, 0s);
}
#content-marketing-google-ai .seo-audit-time__item.reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
#content-marketing-google-ai .seo-audit-time__item.reveal.is-visible::before {
  animation: seo-audit-time-bar-shimmer 4.2s ease-in-out infinite;
  animation-delay: calc(var(--delay, 0s) + 0.35s);
}
@media (hover: hover) and (pointer: fine) {
  #content-marketing-google-ai .seo-audit-time__item.reveal.is-visible:hover {
    transform: translate3d(0, -5px, 0);
    border-color: rgba(255, 77, 58, 0.2);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.88) inset,
      0 22px 44px -22px rgba(15, 42, 74, 0.18),
      0 0 0 1px rgba(255, 77, 58, 0.1);
    background: linear-gradient(180deg, #ffffff 0%, #f5f8fc 100%);
  }
  #content-marketing-google-ai .seo-audit-time__item.reveal.is-visible:hover::before {
    width: 4px;
    top: 10px;
    bottom: 10px;
    animation: none;
    filter: brightness(1.08);
    box-shadow: 0 0 18px rgba(255, 77, 58, 0.45);
  }
}
@media (prefers-reduced-motion: reduce) {
  #content-marketing-google-ai .seo-audit-time__item.reveal,
  #content-marketing-google-ai .seo-audit-time__item.reveal.is-visible {
    transition-duration: 0.01ms;
    animation: none !important;
    transform: none;
    opacity: 1;
  }
  #content-marketing-google-ai .seo-audit-time__item.reveal.is-visible::before {
    animation: none !important;
  }
  #content-marketing-google-ai .seo-audit-time__item.reveal.is-visible:hover {
    transform: none;
  }
}

/* Why choose — keep left natural; JS sets right frame to left height */
@media (min-width: 901px) {
  #content-marketing-why-choose .seo-choose__split {
    align-items: start;
  }

  #content-marketing-why-choose .seo-choose__copy-col,
  #content-marketing-why-choose .seo-choose__visual {
    align-self: start;
    min-height: 0;
  }

  #content-marketing-why-choose .seo-choose__visual {
    height: auto;
    padding-bottom: 44px;
    width: 100%;
  }

  #content-marketing-why-choose .seo-choose__frame {
    min-height: 0 !important;
    flex: none;
    overflow: hidden;
  }

  #content-marketing-why-choose .seo-choose__frame img {
    width: 100%;
    height: 100%;
    min-height: 0 !important;
    object-fit: cover;
  }
}

/* Industries — 4 cards in 2×2 (same pattern as CRO / AI marketing 4-card grids) */
@media (min-width: 901px) {
  #content-marketing-industries .industries__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 980px;
    margin-inline: auto;
  }
}
#content-marketing-industries .ind-card:hover .brand-link {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

/* Timeline table — 3 columns on desktop only (global compare grid is 4) */
#content-marketing-timeline .compare__table {
  max-width: 920px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 1025px) {
  #content-marketing-timeline .compare__head,
  #content-marketing-timeline .compare__row {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.2fr) minmax(0, 1.1fr);
  }
  #content-marketing-timeline .compare__head .compare__cell,
  #content-marketing-timeline .compare__row .compare__cell {
    padding-left: 18px;
    padding-right: 18px;
  }
  /* Desktop only: drop win/lose X/check markers (mobile needs ::before for data-label) */
  #content-marketing-timeline .compare__row .compare__cell:nth-child(2)::before,
  #content-marketing-timeline .compare__row .compare__cell:nth-child(3)::before,
  #content-marketing-timeline .compare__row .compare__cell--us::before {
    content: none !important;
    display: none !important;
  }
}
@media (max-width: 1024px) {
  #content-marketing-timeline .compare__head {
    display: none;
  }
  #content-marketing-timeline .compare__row {
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
  #content-marketing-timeline .compare__cell {
    display: block;
    border-right: none;
    padding: 12px 14px;
    min-width: 0;
  }
  #content-marketing-timeline .compare__row .compare__cell--label {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  #content-marketing-timeline .compare__row .compare__cell:not(.compare__cell--label)::before {
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
  #content-marketing-timeline .compare__row .compare__cell--us::before {
    color: var(--coral);
    font-weight: 800;
  }
}

/* What's Included — soft bg + right image panel matches left list height */
#content-marketing-include.svc-sec {
  max-width: none;
  width: 100%;
  box-sizing: border-box;
  background: #f5f7fa !important;
  padding-inline: max(24px, calc((100% - var(--container)) / 2));
}

@media (min-width: 1081px) {
  /* Keep left at natural list height; JS sets right to match (no stretch) */
  body:has(#content-marketing-hero-title) #content-marketing-include .svc-body {
    align-items: start;
  }

  body:has(#content-marketing-hero-title) #content-marketing-include .svc-right {
    min-height: 0 !important;
    align-self: start;
    overflow: hidden;
  }

  body:has(#content-marketing-hero-title) #content-marketing-include .svc-img,
  body:has(#content-marketing-hero-title) #content-marketing-include .svc-default {
    inset: 0;
  }

  body:has(#content-marketing-hero-title) #content-marketing-include .svc-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* Light CTA + phone — homepage styles live in home.css; service pages load inner.css only */
#content-marketing-cta-review.cta-final--light {
  position: relative;
  padding: clamp(48px, 7vw, 80px) 0 0;
  background: #fff !important;
  color: var(--navy);
  text-align: left;
  overflow: hidden;
}
#content-marketing-cta-review.cta-final--light .cta-final__360,
#content-marketing-cta-review.cta-final--light .cta-final__ring,
#content-marketing-cta-review.cta-final--light .cta-final__glow {
  display: none !important;
}
#content-marketing-cta-review .cta-final__card {
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
#content-marketing-cta-review .cta-final__blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
#content-marketing-cta-review .cta-final__blob--navy {
  top: -60px; left: -40px;
  width: clamp(160px, 22vw, 240px);
  height: clamp(160px, 22vw, 240px);
  background: radial-gradient(circle, rgba(15, 42, 74, .1) 0%, transparent 70%);
}
#content-marketing-cta-review .cta-final__blob--coral {
  bottom: -70px; left: 38%;
  width: clamp(180px, 24vw, 260px);
  height: clamp(180px, 24vw, 260px);
  background: radial-gradient(circle, rgba(255, 77, 58, .12) 0%, transparent 68%);
}
#content-marketing-cta-review .cta-final__content {
  position: relative;
  z-index: 1;
  padding: clamp(32px, 5vw, 52px) clamp(28px, 3.5vw, 48px) clamp(32px, 4vw, 40px) clamp(28px, 4.5vw, 56px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
}
#content-marketing-cta-review h2.cta-final__title {
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
#content-marketing-cta-review h2.cta-final__title .grad-coral {
  color: var(--coral) !important;
  -webkit-text-fill-color: var(--coral) !important;
  background: none !important;
}
#content-marketing-cta-review .cta-final__desc {
  margin: 0;
  max-width: none;
  width: 100%;
  font-size: clamp(15px, 1.35vw, 17px);
  line-height: 1.75;
  color: var(--ink-3) !important;
  text-align: left;
}
#content-marketing-cta-review .cta-final__checks {
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
}
#content-marketing-cta-review .cta-final__checks li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-2);
}
#content-marketing-cta-review .cta-final__checks svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
#content-marketing-cta-review .cta-final__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: clamp(22px, 3vw, 30px);
}
#content-marketing-cta-review .cta-final__btn {
  width: fit-content;
  border-radius: 999px;
  padding: 15px 26px;
  gap: 10px;
  box-shadow: 0 14px 32px rgba(255, 77, 58, .35);
}
#content-marketing-cta-review .cta-final__note {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-3);
  letter-spacing: .02em;
}
#content-marketing-cta-review .cta-final__note a {
  color: inherit;
  font-weight: 700;
  text-decoration: underline;
}
#content-marketing-cta-review .cta-final__phone-col {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px);
  background: linear-gradient(180deg, #eef3f8 0%, rgba(232, 239, 246, .6) 100%);
  border-left: 1px solid rgba(15, 42, 74, .06);
}
#content-marketing-cta-review .cta-final__phone {
  position: relative;
  width: clamp(175px, 88%, 230px);
  padding: 11px 9px 13px;
  border-radius: 28px;
  background: linear-gradient(165deg, #0b1f38 0%, #0f2a4a 55%, #1a4570 100%);
  border: 2px solid rgba(255, 255, 255, .08);
  box-shadow: 0 4px 16px rgba(15, 42, 74, .28), 0 20px 44px rgba(15, 42, 74, .22), inset 0 1px 0 rgba(255, 255, 255, .12);
  animation: cmCtaPhoneFloat 4.5s ease-in-out infinite;
}
#content-marketing-cta-review .cta-final__phone-notch {
  width: 52px;
  height: 6px;
  margin: 0 auto 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .18);
}
#content-marketing-cta-review .cta-final__phone-screen {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 220px;
  padding: 12px 10px;
  border-radius: 18px;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(15, 42, 74, .06);
}
#content-marketing-cta-review .cta-final__screen-top { text-align: center; }
#content-marketing-cta-review .cta-final__screen-badge {
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
#content-marketing-cta-review .cta-final__screen-top strong {
  display: block;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: #0f2a4a;
  line-height: 1.3;
}
#content-marketing-cta-review .cta-final__screen-top span:last-child {
  font-size: 9px;
  color: #0f2a4a;
}
#content-marketing-cta-review .cta-final__screen-hero {
  position: relative;
  min-height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: #eef3f8;
  display: flex;
  align-items: center;
  padding: 10px;
}
#content-marketing-cta-review .cta-final__screen-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 70% 30%, rgba(255, 77, 58, .12) 0%, transparent 55%),
    linear-gradient(180deg, rgba(255, 255, 255, .6), transparent 70%);
}
#content-marketing-cta-review .cta-final__screen-hero-card {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}
#content-marketing-cta-review .cta-final__screen-hero-mark {
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
#content-marketing-cta-review .cta-final__screen-hero-card strong {
  display: block;
  font-size: 11px;
  font-weight: 800;
  color: #0f2a4a;
  line-height: 1.2;
}
#content-marketing-cta-review .cta-final__screen-hero-card em {
  display: block;
  margin-top: 2px;
  font-style: normal;
  font-size: 9px;
  font-weight: 600;
  color: #0f2a4a;
}
#content-marketing-cta-review .cta-final__screen-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
#content-marketing-cta-review .cta-final__screen-list li {
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
#content-marketing-cta-review .cta-final__screen-list li::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--coral);
  flex-shrink: 0;
}
#content-marketing-cta-review .cta-final__screen-foot {
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
#content-marketing-cta-review .cta-final__screen-foot span {
  font-size: 8px;
  color: #0f2a4a;
}
#content-marketing-cta-review .cta-final__screen-foot strong {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  color: #0f2a4a;
}
@keyframes cmCtaPhoneFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(1.5deg); }
}
@keyframes cmCtaPhoneFloatMobile {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@media (max-width: 900px) {
  #content-marketing-cta-review .cta-final__card {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  #content-marketing-cta-review .cta-final__content {
    align-items: center;
    text-align: center;
    padding: 32px 24px 28px;
  }
  #content-marketing-cta-review h2.cta-final__title { text-align: center; }
  #content-marketing-cta-review .cta-final__checks { justify-content: center; }
  #content-marketing-cta-review .cta-final__actions { align-items: center; }
  #content-marketing-cta-review .cta-final__phone-col {
    padding: 32px 24px;
    border-left: none;
    border-top: 1px solid rgba(15, 42, 74, .06);
  }
  #content-marketing-cta-review .cta-final__phone {
    width: clamp(175px, 55vw, 230px);
    animation-name: cmCtaPhoneFloatMobile;
  }
}
@media (max-width: 560px) {
  #content-marketing-cta-review.cta-final--light { padding: 36px 0 0; }
  #content-marketing-cta-review .cta-final__content { padding: 28px 20px 24px; }
  #content-marketing-cta-review h2.cta-final__title { font-size: clamp(24px, 7vw, 32px); }
  #content-marketing-cta-review .cta-final__checks {
    flex-direction: column;
    align-items: flex-start;
  }
  #content-marketing-cta-review .cta-final__actions { width: 100%; }
  #content-marketing-cta-review .cta-final__btn {
    width: 100%;
    justify-content: center;
  }
}
@media (prefers-reduced-motion: reduce) {
  #content-marketing-cta-review .cta-final__phone { animation: none; }
}
`;

export default function ContentMarketingServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/content-marketing-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="content-marketing-services" />
      <style
        dangerouslySetInnerHTML={{ __html: CONTENT_MARKETING_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js?v=20261126c" strategy="lazyOnload" />
      <Script src="/js/content-marketing-include.js?v=20261127b" strategy="lazyOnload" />
    </>
  );
}
