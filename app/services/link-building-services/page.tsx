import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Link Building Services UK That Earns High Authority Backlinks",
  description:
    "Manual link building services for UK businesses. Earn editorial backlinks through white-hat outreach, digital PR and targeted placements that Google rewards.",
  openGraph: {
    title: "Link Building Services UK That Earns High Authority Backlinks",
    description:
      "Manual link building services for UK businesses. Earn editorial backlinks through white-hat outreach, digital PR and targeted placements that Google rewards.",
  },
};

const LINK_BUILDING_ROUTE_RESPONSIVE_CSS = `
body:has(#link-building-hero-title) #main.svc-page {
  min-width: 0;
}

#link-building-white-vs-black .compare__head,
#link-building-white-vs-black .compare__row {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
}

#link-building-white-vs-black .compare__row .compare__cell::before {
  content: none !important;
  display: none !important;
}

body:has(#link-building-hero-title) #link-building-pricing .seo-audit-cost__grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 980px;
  margin-inline: auto;
}

@media (min-width: 1101px) {
  #link-building-industries .industries__grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  #link-building-industries .industries__grid > .ind-card:nth-child(-n + 3) {
    grid-column: span 2;
  }
  #link-building-industries .industries__grid > .ind-card:nth-child(4) {
    grid-column: 2 / span 2;
  }
  #link-building-industries .industries__grid > .ind-card:nth-child(5) {
    grid-column: 4 / span 2;
  }
}

@media (min-width: 821px) and (max-width: 1100px) {
  #link-building-industries .industries__grid > .ind-card:nth-child(5) {
    grid-column: 1 / -1;
    max-width: calc(50% - 12px);
    margin-inline: auto;
    width: 100%;
  }
}

@media (max-width: 767px) {
  body:has(#link-building-hero-title) #main.svc-page h2 {
    font-size: 28px !important;
    line-height: 1.15 !important;
  }
  body:has(#link-building-hero-title) #link-building-hero-title {
    font-size: 32px !important;
    line-height: 1.12 !important;
  }
  body:has(#link-building-hero-title) .hero__stats--trust {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  body:has(#link-building-hero-title) .compare__cta-actions,
  body:has(#link-building-hero-title) .cta-final__btns {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  body:has(#link-building-hero-title) .compare__cta-actions .btn,
  body:has(#link-building-hero-title) .cta-final__btns .btn {
    width: 100%;
    justify-content: center;
  }
  body:has(#link-building-hero-title) #link-building-pricing .seo-audit-cost__grid {
    grid-template-columns: 1fr;
    max-width: 540px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  body:has(#link-building-hero-title) .container {
    padding-left: max(40px, env(safe-area-inset-left));
    padding-right: max(40px, env(safe-area-inset-right));
  }
}
`;

export default function LinkBuildingServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/link-building-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="link-building-services" />
      <style
        dangerouslySetInnerHTML={{ __html: LINK_BUILDING_ROUTE_RESPONSIVE_CSS }}
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js?v=20250703d" strategy="lazyOnload" />
    </>
  );
}
