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
