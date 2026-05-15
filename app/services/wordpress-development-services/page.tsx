import { readFileSync } from "fs";
import { join } from "path";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "WordPress Development Services UK | Custom WordPress Websites — 360 Web Solutions",
  description:
    "WordPress development services for UK businesses: custom builds, technical SEO-ready architecture, migrations, speed optimisation, and ongoing support.",
  openGraph: {
    title: "WordPress Development Services | 360 Web Solutions",
    description:
      "Custom WordPress websites built for speed, visibility, and conversions.",
  },
};

export default function WordPressDevelopmentServicesPage() {
  const html = readFileSync(
    join(
      process.cwd(),
      "content",
      "services",
      "wordpress-development-services.html",
    ),
    "utf-8",
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
