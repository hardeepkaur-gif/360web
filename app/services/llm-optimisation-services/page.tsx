import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "LLM Optimisation & AI SEO Services UK | 360 Web Solutions",
  description:
    "Improve AI search visibility with GEO, AEO and LLM optimisation. 360 Web Solutions helps brands increase their chance of appearing in ChatGPT and AI Overviews.",
  openGraph: {
    title: "LLM Optimisation & AI SEO Services UK | 360 Web Solutions",
    description:
      "Improve AI search visibility with GEO, AEO and LLM optimisation. 360 Web Solutions helps brands increase their chance of appearing in ChatGPT and AI Overviews.",
  },
};

/** Critical layout for services panel — prevents text overlaying image when deferred CSS is stale */
const LLM_SERVICES_CRITICAL_CSS = `
#llm-our-services .svc-body {
  display: flex;
  flex-direction: column;
  gap: clamp(28px, 4vw, 44px);
}
#llm-our-services .svc-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}
#llm-our-services .sl {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 22px;
  border: 1px solid rgba(15, 42, 74, .12);
  border-radius: 999px;
  background: #fff;
  cursor: pointer;
}
#llm-our-services .sl::before { display: none; }
#llm-our-services .sl.active {
  border-color: rgba(255, 77, 58, .4);
  background: linear-gradient(135deg, rgba(255, 77, 58, .08), rgba(26, 95, 191, .06));
}
#llm-our-services .svc-right {
  min-height: 0;
  display: grid;
  width: 100%;
}
#llm-our-services .svc-img {
  position: relative !important;
  inset: auto !important;
  grid-area: 1 / 1;
  height: auto;
  overflow: hidden;
  display: grid !important;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  background: #fff;
  border: 1px solid rgba(15, 42, 74, .1);
  border-radius: 22px;
  box-shadow: 0 24px 60px rgba(15, 42, 74, .1);
}
#llm-our-services .svc-img-media {
  position: relative;
  min-height: 100%;
  overflow: hidden;
}
#llm-our-services .svc-img-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#llm-our-services .svc-img-text {
  position: static !important;
  left: auto !important;
  right: auto !important;
  bottom: auto !important;
  padding: clamp(24px, 2.6vw, 40px);
}
#llm-our-services .svc-img-eyebrow {
  font-weight: 800;
  font-size: 12px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #FF4D3A;
  margin-bottom: 8px;
}
#llm-our-services .svc-img-title {
  color: #0F2A4A !important;
  font-size: clamp(20px, 1.7vw, 24px);
  margin-bottom: 14px;
}
#llm-our-services .svc-img-desc,
#llm-our-services .svc-audit-lede {
  color: #4A5A6E !important;
}
#llm-our-services .svc-audit-check {
  color: #0F2A4A !important;
}
#llm-our-services .svc-audit-list {
  color: #4A5A6E;
  column-count: 1 !important;
}
@media (max-width: 900px) {
  #llm-our-services .svc-img {
    grid-template-columns: 1fr;
  }
  #llm-our-services .svc-img-media {
    min-height: 220px;
  }
}
`.trim();

export default function LlmOptimisationServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/llm-optimisation-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="llm-optimisation-services" />
      <style
        dangerouslySetInnerHTML={{ __html: LLM_SERVICES_CRITICAL_CSS }}
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
