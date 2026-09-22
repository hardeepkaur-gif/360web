import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

const DIGITAL_PR_TITLE = "Digital PR Agency UK | 360 Web Solutions";
const DIGITAL_PR_DESCRIPTION =
  "Tired of wasting money on PR that doesn’t work? Our digital PR agency secures high-authority links, genuine coverage and higher ranking. Book a free call.";
const DIGITAL_PR_PATH = "/services/digital-pr-agency";
const DIGITAL_PR_OG_IMAGE = "/assets/images/digital-pr-agency-hero.webp";

export const metadata: Metadata = {
  title: DIGITAL_PR_TITLE,
  description: DIGITAL_PR_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: DIGITAL_PR_PATH,
  },
  openGraph: {
    title: DIGITAL_PR_TITLE,
    description: DIGITAL_PR_DESCRIPTION,
    type: "website",
    locale: "en_GB",
    url: DIGITAL_PR_PATH,
    siteName: "360 Web Solutions",
    images: [
      {
        url: DIGITAL_PR_OG_IMAGE,
        width: 800,
        height: 800,
        alt: "Digital PR agency UK — editorial coverage and link-building strategy from 360 Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DIGITAL_PR_TITLE,
    description: DIGITAL_PR_DESCRIPTION,
    images: [DIGITAL_PR_OG_IMAGE],
  },
};

/**
 * Responsive overrides for this route only (mirrors `on-page-seo-services/page.tsx`).
 * Legacy HTML from `content/services/digital-pr-agency.html`; scope via `#digital-pr-hero-title`.
 */
const DIGITAL_PR_ROUTE_RESPONSIVE_CSS = `
body:has(#digital-pr-hero-title) #main.svc-page {
  min-width: 0;
}

body:has(#digital-pr-hero-title) #main.svc-page a.brand-link {
  color: #ff4d3a !important;
  -webkit-text-fill-color: #ff4d3a !important;
  font-weight: 600;
  text-decoration: underline !important;
  text-underline-offset: 2px;
}

body:has(#digital-pr-hero-title) #main.svc-page a.brand-link:hover {
  color: #ff6a5a !important;
  -webkit-text-fill-color: #ff6a5a !important;
}

@media (max-width: 767px) {
  body:has(#digital-pr-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#digital-pr-hero-title) #digital-pr-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#digital-pr-hero-title) #digital-pr-hero-title .hero__title-line {
    white-space: nowrap;
  }
  body:has(#digital-pr-hero-title) .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#digital-pr-hero-title) .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#digital-pr-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}

@media (min-width: 961px) {
  body:has(#digital-pr-hero-title) #digital-pr-what-is .svc-ai-about__visual,
  body:has(#digital-pr-hero-title) #digital-pr-what-is .svc-ai-about__figure,
  body:has(#digital-pr-hero-title) #digital-pr-what-is .svc-ai-about__hero-img {
    height: 100%;
  }

  body:has(#digital-pr-hero-title) #digital-pr-what-is .svc-ai-about__visual {
    align-self: stretch;
  }

  body:has(#digital-pr-hero-title) #digital-pr-what-is .svc-ai-about__figure {
    animation: none;
  }
}

body:has(#digital-pr-hero-title) #digital-pr-agency-does {
  background: #f7f9fc;
}

@media (min-width: 961px) {
  body:has(#digital-pr-hero-title) #digital-pr-agency-does .seo-matters__grid {
    align-items: stretch;
  }

  body:has(#digital-pr-hero-title) #digital-pr-agency-does .seo-matters__visual,
  body:has(#digital-pr-hero-title) #digital-pr-agency-does .seo-matters__frame,
  body:has(#digital-pr-hero-title) #digital-pr-agency-does .seo-matters__frame img {
    height: 100%;
  }

  body:has(#digital-pr-hero-title) #digital-pr-agency-does .seo-matters__visual {
    align-self: stretch;
  }
}

#digital-pr-services .svc-hdr,
#digital-pr-services .svc-hdr.reveal.is-visible {
  max-width: none;
  width: 100%;
}

#digital-pr-services-title {
  max-width: none;
  width: 100%;
}

#digital-pr-services .svc-img-overlay {
  pointer-events: none;
}

#digital-pr-services .sl {
  grid-template-columns: 56px minmax(0, 1fr);
}

#digital-pr-services .sl-name {
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}

#digital-pr-services .svc-right.reveal {
  opacity: 1;
  transform: none;
}

@media (min-width: 1081px) {
  body:has(#digital-pr-hero-title) #digital-pr-services .svc-body {
    align-items: stretch;
  }

  body:has(#digital-pr-hero-title) #digital-pr-services .svc-left,
  body:has(#digital-pr-hero-title) #digital-pr-services .svc-right {
    min-height: 0;
    height: 100%;
    align-self: stretch;
  }
}

#digital-pr-funnel-compare .compare__photo {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)),
    url("/assets/images/link-building-digital-pr.webp");
  background-position: center center;
}

#digital-pr-funnel-compare .compare__table {
  max-width: 920px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 981px) {
  #digital-pr-funnel-compare .compare__head,
  #digital-pr-funnel-compare .compare__row {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.15fr) minmax(0, 1fr);
  }
}

#digital-pr-funnel-compare .compare__head .compare__cell,
#digital-pr-funnel-compare .compare__row .compare__cell {
  padding-left: 18px;
  padding-right: 18px;
}

@media (max-width: 767px) {
  body:has(#digital-pr-hero-title) #digital-pr-funnel-compare .compare__cta-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  body:has(#digital-pr-hero-title) #digital-pr-funnel-compare .compare__cta-actions .btn {
    width: 100%;
    justify-content: center;
  }
}

#digital-pr-who-we-work {
  padding-bottom: 0;
}

@media (min-width: 901px) {
  #digital-pr-seo-investment .seo-split__grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}

#digital-pr-testimonials {
  padding-bottom: 0;
}

#digital-pr-why-choose .seo-choose__intro,
#digital-pr-why-choose .seo-choose__heading,
#digital-pr-why-choose .seo-choose__lede {
  max-width: none;
  width: 100%;
}

#digital-pr-why-choose .seo-choose__intro {
  margin-left: 0;
  margin-right: 0;
}

#digital-pr-why-choose .seo-choose__heading {
  padding-inline: 0;
  text-wrap: unset;
}

#digital-pr-why-choose .seo-choose__lede {
  margin-left: 0;
  margin-right: 0;
  padding-inline: 0;
}

#digital-pr-who-we-work .smm-diag__cta {
  margin-top: clamp(24px, 3vw, 32px);
  text-align: left;
}

#digital-pr-who-we-work .seo-audit-time__footer-lede {
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 1.55;
  font-weight: 600;
  color: var(--navy);
  text-wrap: balance;
}

@media (max-width: 767px) {
  body:has(#digital-pr-hero-title) #digital-pr-who-we-work .smm-diag__cta .btn {
    width: 100%;
    justify-content: center;
  }
}

#digital-pr-pricing .svc-ai-trust__micro {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-3);
}

@media (max-width: 767px) {
  body:has(#digital-pr-hero-title) #digital-pr-coverage-cta .cta-final__btns {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  body:has(#digital-pr-hero-title) #digital-pr-coverage-cta .cta-final__btns .btn {
    width: 100%;
    justify-content: center;
  }
}
`;

export default function DigitalPrAgencyPage() {
  const html = loadLegacyPageWithSiteFooter("services/digital-pr-agency.html");

  return (
    <>
      {/* Schema disabled until page is live */}
      <style
        dangerouslySetInnerHTML={{ __html: DIGITAL_PR_ROUTE_RESPONSIVE_CSS }}
      />
      <link
        rel="preload"
        as="image"
        href="/assets/images/digital-pr-agency-hero.webp"
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script
        src="/js/digital-pr-services-include.js?v=20260824a"
        strategy="afterInteractive"
      />
      <Script
        src="/js/digital-pr-process.js?v=20260824d"
        strategy="afterInteractive"
      />
    </>
  );
}
