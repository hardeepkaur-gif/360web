import { readFileSync } from "fs";
import { join } from "path";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "On-Page SEO Services UK | 360 Web Solutions — Higher Rankings, Qualified Traffic",
  description:
    "On-page SEO services for UK businesses. We optimise content, metadata, internal links and technical elements so your pages rank higher and convert qualified traffic.",
  openGraph: {
    title:
      "On-Page SEO Services UK | 360 Web Solutions",
    description:
      "Improve your content, metadata, internal links and technical SEO so pages rank higher, attract qualified traffic, and convert consistently.",
  },
};

/**
 * Responsive overrides for this route only (mirrors `seo-audit-services/page.tsx`).
 * Legacy HTML from `content/services/on-page-seo-services.html`; scope via `#seo-hero-title`.
 */
const ON_PAGE_SEO_ROUTE_RESPONSIVE_CSS = `
body:has(#seo-hero-title) #main.svc-page {
  min-width: 0;
}

@media (max-width: 767px) {
  body:has(#seo-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#seo-hero-title) #seo-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#seo-hero-title) .compare__cta-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#seo-hero-title) .compare__cta-actions .btn {
    width: 100%;
    justify-content: center;
  }
  body:has(#seo-hero-title) .svc-img img {
    width: 100%;
    object-fit: cover;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#seo-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}
`;

export default function OnPageSeoServicesPage() {
  const html = readFileSync(
    join(
      process.cwd(),
      "content",
      "services",
      "on-page-seo-services.html"
    ),
    "utf-8"
  );

  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: ON_PAGE_SEO_ROUTE_RESPONSIVE_CSS }}
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
