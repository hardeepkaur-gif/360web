import { readFileSync } from "fs";
import { join } from "path";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SEO Audit Services UK | 360 Web Solutions — Technical & Content Analysis",
  description:
    "In-depth SEO audits for UK businesses. We analyse technical health, on-page signals, and search visibility — then hand you a clear, prioritised roadmap.",
  openGraph: {
    title: "SEO Audit Services UK | 360 Web Solutions",
    description:
      "Technical, on-page, and off-site analysis with actionable fixes — not a PDF dump. UK in-house specialists.",
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
  const html = readFileSync(
    join(process.cwd(), "content", "services", "seo-audit-services.html"),
    "utf-8"
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
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
