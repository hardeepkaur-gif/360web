import Script from "next/script";
import type { Metadata } from "next";

import "../case-study-d1.css";
import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "UK Frozen Food | 360 Web Solutions Wholesale E-commerce Rebuild",
  description:
    "How 360 Web Solutions rebuilt UK Frozen Food's 20,000-product wholesale platform — from slow, overloaded store to fast, scalable, search-visible business.",
  openGraph: {
    title: "UK Frozen Food | 360 Web Solutions Wholesale E-commerce Rebuild",
    description:
      "WordPress + WooCommerce rebuild for a 20,000-SKU B2B food wholesale operation — performance, custom import app, 100+ landing pages and SEO.",
  },
};

export default function UkFrozenFoodCaseStudyPage() {
  const html = loadLegacySiteHtml("case-studies/uk-frozen-food.html");

  return (
    <>
      <BreadcrumbSchemaScript caseStudy="uk-frozen-food" />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script id="uk-frozen-food-timeline-height" strategy="afterInteractive">
        {`(function(){function sync(){var first=document.getElementById("cs-uk-frozen-food-step-1");var pin=document.querySelector("#cs-uk-frozen-food-approach .cs-d1-timeline-scroll__pin");if(!first||!pin||window.innerWidth<969){if(pin)pin.style.height="";return;}pin.style.height=first.offsetHeight+"px";}function boot(){sync();window.addEventListener("resize",sync);if(typeof ResizeObserver!=="undefined"){var first=document.getElementById("cs-uk-frozen-food-step-1");if(first)new ResizeObserver(sync).observe(first);}if(document.fonts&&document.fonts.ready)document.fonts.ready.then(sync);}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();})();`}
      </Script>
    </>
  );
}
