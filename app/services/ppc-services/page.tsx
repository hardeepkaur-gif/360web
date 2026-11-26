import Script from "next/script";
import type { Metadata } from "next";
import { socialMeta } from "@/lib/socialMeta";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "PPC Services London | Google Ads, Shopping & Performance Max",
  description:
    "Is your ad spend paying for itself? Our London PPC services find the waste, fix it, and manage campaigns to agreed targets. Get your free PPC review.",
  keywords: ["PPC Services"],
  ...socialMeta({
    path: "/services/ppc-services",
    title: "PPC Services London | Google Ads, Shopping & Performance Max",
    description:
      "Is your ad spend paying for itself? Our London PPC services find the waste, fix it, and manage campaigns to agreed targets. Get your free PPC review.",
  }),
};

/**
 * Responsive overrides for this route only (mirrors `on-page-seo-services/page.tsx`).
 * Legacy HTML from `content/services/ppc-services.html`; scope via `#ppc-hero-title`.
 */
const PPC_ROUTE_RESPONSIVE_CSS = `
body:has(#ppc-hero-title) #main.svc-page {
  min-width: 0;
}

/* Internal text links — brand orange */
body:has(#ppc-hero-title) a.brand-link {
  color: var(--coral) !important;
  -webkit-text-fill-color: var(--coral) !important;
  font-weight: 600;
  text-decoration: none !important;
}
body:has(#ppc-hero-title) a.brand-link:hover {
  color: var(--coral-2) !important;
  -webkit-text-fill-color: var(--coral-2) !important;
  text-decoration: underline !important;
}

/* Testimonials band */
#ppc-testimonials.gr-section {
  background: #f5f7fa !important;
}
#ppc-testimonials.gr-section::before {
  display: none !important;
}

/* Process card: show shared images clearly — kill washout overlay + crop effects */
#ppc-process .proc-desc__media {
  aspect-ratio: 16 / 9;
  background: #0F2A4A;
}
#ppc-process .proc-desc__media::after {
  display: none !important;
}
#ppc-process .proc-desc__img {
  object-fit: cover;
  object-position: center center;
  opacity: 1 !important;
  transform: none !important;
}
#ppc-process .proc-desc.is-flipping .proc-desc__img {
  animation: none !important;
}

/* Hero image height matches left content (desktop split only) */
@media (min-width: 1025px) {
  body:has(#ppc-hero-title) .hero.hero--ppc.hero--on-page-seo .hero__inner {
    align-items: stretch;
  }
  body:has(#ppc-hero-title) .hero.hero--ppc .hero__photo--ppc {
    align-self: stretch;
    display: flex;
    align-items: stretch;
    height: auto;
    min-height: 0;
  }
  body:has(#ppc-hero-title) .hero.hero--ppc .hero__on-page-seo-frame {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  body:has(#ppc-hero-title) .hero.hero--ppc .hero__on-page-seo-img {
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
  body:has(#ppc-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#ppc-hero-title) #ppc-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#ppc-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#ppc-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#ppc-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}

@media (min-width: 1081px) {
  body:has(#ppc-hero-title) #ppc-services-include .svc-body {
    align-items: start;
  }

  body:has(#ppc-hero-title) #ppc-services-include .svc-right {
    min-height: 0 !important;
  }
}

/* Light CTA + phone — homepage styles live in home.css; service pages load inner.css only */
#ppc-cta-review.cta-final--light {
  position: relative;
  padding: clamp(48px, 7vw, 80px) 0 0;
  background: #fff !important;
  color: var(--navy);
  text-align: left;
  overflow: hidden;
}
#ppc-cta-review.cta-final--light .cta-final__360,
#ppc-cta-review.cta-final--light .cta-final__ring,
#ppc-cta-review.cta-final--light .cta-final__glow {
  display: none !important;
}
#ppc-cta-review .cta-final__card {
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
#ppc-cta-review .cta-final__blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
#ppc-cta-review .cta-final__blob--navy {
  top: -60px; left: -40px;
  width: clamp(160px, 22vw, 240px);
  height: clamp(160px, 22vw, 240px);
  background: radial-gradient(circle, rgba(15, 42, 74, .1) 0%, transparent 70%);
}
#ppc-cta-review .cta-final__blob--coral {
  bottom: -70px; left: 38%;
  width: clamp(180px, 24vw, 260px);
  height: clamp(180px, 24vw, 260px);
  background: radial-gradient(circle, rgba(255, 77, 58, .12) 0%, transparent 68%);
}
#ppc-cta-review .cta-final__content {
  position: relative;
  z-index: 1;
  padding: clamp(32px, 5vw, 52px) clamp(28px, 3.5vw, 48px) clamp(32px, 4vw, 40px) clamp(28px, 4.5vw, 56px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
}
#ppc-cta-review h2.cta-final__title {
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
#ppc-cta-review h2.cta-final__title .grad-coral {
  color: var(--coral) !important;
  -webkit-text-fill-color: var(--coral) !important;
  background: none !important;
}
#ppc-cta-review .cta-final__desc {
  margin: 0;
  max-width: none;
  width: 100%;
  font-size: clamp(15px, 1.35vw, 17px);
  line-height: 1.75;
  color: var(--ink-3) !important;
  text-align: left;
}
#ppc-cta-review .cta-final__checks {
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
}
#ppc-cta-review .cta-final__checks li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-2);
}
#ppc-cta-review .cta-final__checks svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
#ppc-cta-review .cta-final__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: clamp(22px, 3vw, 30px);
}
#ppc-cta-review .cta-final__btn {
  width: fit-content;
  border-radius: 999px;
  padding: 15px 26px;
  gap: 10px;
  box-shadow: 0 14px 32px rgba(255, 77, 58, .35);
}
#ppc-cta-review .cta-final__note {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-3);
  letter-spacing: .02em;
}
#ppc-cta-review .cta-final__note a {
  color: inherit;
  font-weight: 700;
  text-decoration: underline;
}
#ppc-cta-review .cta-final__phone-col {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px);
  background: linear-gradient(180deg, #eef3f8 0%, rgba(232, 239, 246, .6) 100%);
  border-left: 1px solid rgba(15, 42, 74, .06);
}
#ppc-cta-review .cta-final__phone {
  position: relative;
  width: clamp(175px, 88%, 230px);
  padding: 11px 9px 13px;
  border-radius: 28px;
  background: linear-gradient(165deg, #0b1f38 0%, #0f2a4a 55%, #1a4570 100%);
  border: 2px solid rgba(255, 255, 255, .08);
  box-shadow: 0 4px 16px rgba(15, 42, 74, .28), 0 20px 44px rgba(15, 42, 74, .22), inset 0 1px 0 rgba(255, 255, 255, .12);
  animation: ppcCtaPhoneFloat 4.5s ease-in-out infinite;
}
#ppc-cta-review .cta-final__phone-notch {
  width: 52px;
  height: 6px;
  margin: 0 auto 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .18);
}
#ppc-cta-review .cta-final__phone-screen {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 220px;
  padding: 12px 10px;
  border-radius: 18px;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(15, 42, 74, .06);
}
#ppc-cta-review .cta-final__screen-top { text-align: center; }
#ppc-cta-review .cta-final__screen-badge {
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
#ppc-cta-review .cta-final__screen-top strong {
  display: block;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: #0f2a4a;
  line-height: 1.3;
}
#ppc-cta-review .cta-final__screen-top span:last-child {
  font-size: 9px;
  color: #0f2a4a;
}
#ppc-cta-review .cta-final__screen-hero {
  position: relative;
  min-height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: #eef3f8;
  display: flex;
  align-items: center;
  padding: 10px;
}
#ppc-cta-review .cta-final__screen-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 70% 30%, rgba(255, 77, 58, .12) 0%, transparent 55%),
    linear-gradient(180deg, rgba(255, 255, 255, .6), transparent 70%);
}
#ppc-cta-review .cta-final__screen-hero-card {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}
#ppc-cta-review .cta-final__screen-hero-mark {
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
#ppc-cta-review .cta-final__screen-hero-card strong {
  display: block;
  font-size: 11px;
  font-weight: 800;
  color: #0f2a4a;
  line-height: 1.2;
}
#ppc-cta-review .cta-final__screen-hero-card em {
  display: block;
  margin-top: 2px;
  font-style: normal;
  font-size: 9px;
  font-weight: 600;
  color: #0f2a4a;
}
#ppc-cta-review .cta-final__screen-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
#ppc-cta-review .cta-final__screen-list li {
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
#ppc-cta-review .cta-final__screen-list li::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--coral);
  flex-shrink: 0;
}
#ppc-cta-review .cta-final__screen-foot {
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
#ppc-cta-review .cta-final__screen-foot span {
  font-size: 8px;
  color: #0f2a4a;
}
#ppc-cta-review .cta-final__screen-foot strong {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  color: #0f2a4a;
}
@keyframes ppcCtaPhoneFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(1.5deg); }
}
@keyframes ppcCtaPhoneFloatMobile {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@media (max-width: 900px) {
  #ppc-cta-review .cta-final__card {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  #ppc-cta-review .cta-final__content {
    align-items: center;
    text-align: center;
    padding: 32px 24px 28px;
  }
  #ppc-cta-review h2.cta-final__title { text-align: center; }
  #ppc-cta-review .cta-final__checks { justify-content: center; }
  #ppc-cta-review .cta-final__actions { align-items: center; }
  #ppc-cta-review .cta-final__phone-col {
    padding: 32px 24px;
    border-left: none;
    border-top: 1px solid rgba(15, 42, 74, .06);
  }
  #ppc-cta-review .cta-final__phone {
    width: clamp(175px, 55vw, 230px);
    animation-name: ppcCtaPhoneFloatMobile;
  }
}
@media (max-width: 560px) {
  #ppc-cta-review.cta-final--light { padding: 36px 0 0; }
  #ppc-cta-review .cta-final__content { padding: 28px 20px 24px; }
  #ppc-cta-review h2.cta-final__title { font-size: clamp(24px, 7vw, 32px); }
  #ppc-cta-review .cta-final__checks {
    flex-direction: column;
    align-items: flex-start;
  }
  #ppc-cta-review .cta-final__actions { width: 100%; }
  #ppc-cta-review .cta-final__btn {
    width: 100%;
    justify-content: center;
  }
}
@media (prefers-reduced-motion: reduce) {
  #ppc-cta-review .cta-final__phone { animation: none; }
}
`;

export default function PpcServicesPage() {
  const html = loadLegacyPageWithSiteFooter("services/ppc-services.html");

  return (
    <>
      <ServiceSchemaScript slug="ppc-services" />
      <style dangerouslySetInnerHTML={{ __html: PPC_ROUTE_RESPONSIVE_CSS }} />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js?v=20261126c" strategy="lazyOnload" />
      <Script src="/js/ppc-services-include.js" strategy="lazyOnload" />
      {/* After main.js so PPC steps win over homepage Discover defaults */}
      <Script src="/js/ppc-process.js?v=20261126c" strategy="lazyOnload" />
    </>
  );
}
