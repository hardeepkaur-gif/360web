import Script from "next/script";
import type { Metadata } from "next";

import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Human-Led AI Marketing Agency | 360 Web Solutions UK",
  description:
    "Our AI-powered marketing agency is a mix of human strategy and AI automation. Designed for UK businesses, to help them get better results across Google.",
  openGraph: {
    title: "Human-Led AI Marketing Agency | 360 Web Solutions UK",
    description:
      "Our AI-powered marketing agency is a mix of human strategy and AI automation. Designed for UK businesses, to help them get better results across Google.",
  },
};

const AI_MARKETING_SECTION_CSS = `
#ai-marketing-what-we-measure.ai-mkt-measure .section__head {
  max-width: 760px;
  margin-inline: auto;
  text-align: center;
}
#ai-marketing-what-we-measure .ai-mkt-measure__grid {
  list-style: none;
  margin: clamp(32px, 5vw, 48px) auto 0;
  padding: 0;
  max-width: 1040px;
  display: grid !important;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(14px, 2vw, 18px);
}
#ai-marketing-what-we-measure .ai-mkt-measure__item:nth-child(1) { grid-column: 1 / span 2; }
#ai-marketing-what-we-measure .ai-mkt-measure__item:nth-child(2) { grid-column: 3 / span 2; }
#ai-marketing-what-we-measure .ai-mkt-measure__item:nth-child(3) { grid-column: 5 / span 2; }
#ai-marketing-what-we-measure .ai-mkt-measure__item:nth-child(4) { grid-column: 2 / span 2; }
#ai-marketing-what-we-measure .ai-mkt-measure__item:nth-child(5) { grid-column: 4 / span 2; }
#ai-marketing-what-we-measure .ai-mkt-measure__item {
  display: flex !important;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
  padding: clamp(20px, 2.4vw, 26px);
  background: #fff;
  border: 1px solid var(--line, #E5EAF2);
  border-radius: 18px;
  box-shadow: 0 16px 40px rgba(15, 42, 74, 0.06);
}
#ai-marketing-what-we-measure .ai-mkt-measure__num {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF4D3A 0%, #ff6b3d 100%);
  color: #fff;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
  box-shadow: 0 8px 18px rgba(255, 77, 58, 0.28);
}
#ai-marketing-what-we-measure .ai-mkt-measure__text {
  margin: 0;
  padding-top: 6px;
  font-size: clamp(14px, 1.2vw, 15px);
  font-weight: 600;
  line-height: 1.55;
  color: var(--navy, #0F2A4A);
}
@media (max-width: 900px) {
  #ai-marketing-what-we-measure .ai-mkt-measure__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  #ai-marketing-what-we-measure .ai-mkt-measure__item:nth-child(n) {
    grid-column: auto;
  }
  #ai-marketing-what-we-measure .ai-mkt-measure__item:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    max-width: min(100%, 520px);
    justify-self: center;
  }
}
@media (max-width: 560px) {
  #ai-marketing-what-we-measure .ai-mkt-measure__grid {
    grid-template-columns: 1fr;
  }
  #ai-marketing-what-we-measure .ai-mkt-measure__item:last-child:nth-child(odd) {
    grid-column: auto;
    max-width: none;
  }
}

#ai-marketing-first-90-days {
  background: #f5f7fa;
}
#ai-marketing-first-90-days .ai-mkt-90days__table {
  position: relative;
  border: 1px solid var(--line, #E5EAF2);
  border-radius: 22px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 20px 50px rgba(15, 42, 74, 0.07);
}
#ai-marketing-first-90-days .ai-mkt-90days__head,
#ai-marketing-first-90-days .ai-mkt-90days__row {
  display: grid;
  grid-template-columns: 0.9fr 1.2fr 1.1fr;
}
#ai-marketing-first-90-days .ai-mkt-90days__head {
  background: var(--navy, #0F2A4A);
  color: #fff;
}
#ai-marketing-first-90-days .ai-mkt-90days__head .ai-mkt-90days__cell {
  padding: 16px 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
#ai-marketing-first-90-days .ai-mkt-90days__row {
  border-top: 1px solid var(--line, #E5EAF2);
  background: #fff;
}
#ai-marketing-first-90-days .ai-mkt-90days__cell {
  padding: 22px 20px;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--ink-3, #5B6A82);
  border-right: 1px solid var(--line, #E5EAF2);
}
#ai-marketing-first-90-days .ai-mkt-90days__cell:last-child {
  border-right: none;
}
#ai-marketing-first-90-days .ai-mkt-90days__cell--phase {
  background: linear-gradient(135deg, rgba(255, 77, 58, 0.06), rgba(26, 95, 191, 0.05));
  color: var(--navy, #0F2A4A);
}
#ai-marketing-first-90-days .ai-mkt-90days__phase-num {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #FF4D3A;
  margin-bottom: 6px;
}
#ai-marketing-first-90-days .ai-mkt-90days__phase-name {
  display: block;
  font-size: clamp(16px, 1.4vw, 18px);
  font-weight: 800;
  line-height: 1.25;
  color: var(--navy, #0F2A4A);
}
#ai-marketing-first-90-days .ai-mkt-90days__cell--outcome {
  background: rgba(26, 95, 191, 0.04);
  font-weight: 500;
  color: var(--navy, #0F2A4A);
}
@media (max-width: 820px) {
  #ai-marketing-first-90-days .ai-mkt-90days__head {
    display: none;
  }
  #ai-marketing-first-90-days .ai-mkt-90days__row {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 20px;
    border: 1px solid var(--line, #E5EAF2);
    border-radius: 16px;
    margin-bottom: 14px;
  }
  #ai-marketing-first-90-days .ai-mkt-90days__cell {
    border-right: none;
    padding: 0;
  }
  #ai-marketing-first-90-days .ai-mkt-90days__cell:not(.ai-mkt-90days__cell--phase)::before {
    content: attr(data-label);
    display: block;
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #8a97ad;
    margin-bottom: 6px;
  }
}
`.trim();

export default function AiMarketingAgencyPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/ai-marketing-agency.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="ai-marketing-agency" />
      <style
        dangerouslySetInnerHTML={{ __html: AI_MARKETING_SECTION_CSS }}
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
