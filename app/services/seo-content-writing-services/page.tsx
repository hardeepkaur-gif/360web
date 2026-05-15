import { readFileSync } from "fs";
import { join } from "path";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SEO Content Writing Services UK | 360 Web Solutions — Search‑First Copy",
  description:
    "SEO content writing for UK businesses — search intent, structure, and E‑E‑A‑T signals built in. Briefs, drafts, and optimisation from an in-house editorial team.",
  openGraph: {
    title:
      "SEO Content Writing Services UK | 360 Web Solutions",
    description:
      "Copy and long-form content engineered for rankings and conversions — not filler. UK in-house writers and SEO specialists.",
  },
};

export default function SeoContentWritingServicesPage() {
  const html = readFileSync(
    join(
      process.cwd(),
      "content",
      "services",
      "seo-content-writing-services.html"
    ),
    "utf-8"
  );

  return (
    <>
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
