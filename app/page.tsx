import Script from "next/script";
import type { Metadata } from "next";

import { HomeSchemaScript } from "@/components/HomeSchemaScript";
import { loadLegacyHomeHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Award-Winning Digital Marketing Agency London | SEO and PPC",
  description:
    "UK digital marketing agency for SEO, PPC, web design, and content — in-house strategy, execution, and measurable growth across every channel.",
  openGraph: {
    title: "Award-Winning Digital Marketing Agency London | SEO and PPC",
    description:
      "UK digital marketing agency for SEO, PPC, web design, and content — in-house strategy, execution, and measurable growth across every channel.",
  },
};

const LEGACY_SERVICES_HASH_REDIRECT = `
(function(){
  var path=location.pathname||"/";
  if((path==="/"||path==="")&&location.hash.toLowerCase()==="#services"){
    location.replace("/services");
  }
})();
`.trim();

export default function Home() {
  const html = loadLegacyHomeHtml();

  return (
    <>
      <Script
        id="legacy-services-hash-redirect"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: LEGACY_SERVICES_HASH_REDIRECT }}
      />
      <HomeSchemaScript />
      <link rel="stylesheet" href="/css/home.css?v=20260729a" />
      <link
        rel="preload"
        href="/assets/images/hero-home-cover.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js?v=20250609" strategy="afterInteractive" />
      <Script src="/js/hero-lead-form.js?v=20260717" strategy="afterInteractive" />
      <Script src="/js/contact-booking-timezone.js?v=20250710" strategy="afterInteractive" />
      <Script src="/js/work-filters-fix.js?v=20250710h" strategy="afterInteractive" />
    </>
  );
}
