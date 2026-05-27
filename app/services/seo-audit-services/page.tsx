import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "SEO Audit Services UK | Technical, Content & AI SEO Audits",
  description:
    "Get a professional SEO audit for your website. We review technical SEO, content, rankings, backlinks, competitors and AI visibility with clear action points.",
  openGraph: {
    title: "SEO Audit Services UK | Technical, Content & AI SEO Audits",
    description:
      "Get a professional SEO audit for your website. We review technical SEO, content, rankings, backlinks, competitors and AI visibility with clear action points.",
  },
};

/**
 * Responsive overrides for this route only.
 *
 * Note: This project does not ship Tailwind CSS; the page body is legacy HTML from
 * `content/services/seo-audit-services.html`. Scoped CSS here mirrors the breakpoint
 * intent from a Tailwind-style setup: mobile <768px, tablet 768–1024px, desktop >1024px.
 */
const SEO_AUDIT_ROUTE_RESPONSIVE_CSS = `
body:has(#seo-audit-hero-title) #main.svc-page {
  min-width: 0;
}

@media (max-width: 767px) {
  body:has(#seo-audit-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#seo-audit-hero-title) #seo-audit-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#seo-audit-hero-title) .compare__cta-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#seo-audit-hero-title) .compare__cta-actions .btn {
    width: 100%;
    justify-content: center;
  }
  body:has(#seo-audit-hero-title) .svc-img img {
    width: 100%;
    object-fit: cover;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#seo-audit-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
  body:has(#seo-audit-hero-title) #seo-audit-cost .seo-audit-cost__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 920px;
    margin-inline: auto;
  }
}

`;

export default function SeoAuditServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/seo-audit-services.html",
  );

  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: SEO_AUDIT_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}

