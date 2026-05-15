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
    title:
      "SEO Audit Services UK | 360 Web Solutions",
    description:
      "Technical, on-page, and off-site analysis with actionable fixes — not a PDF dump. UK in-house specialists.",
  },
};

export default function SeoAuditServicesPage() {
  const html = readFileSync(
    join(process.cwd(), "content", "services", "seo-audit-services.html"),
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
