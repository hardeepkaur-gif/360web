import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacyHomeHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "360 Web Solutions Digital Marketing Agency London & UK",
  description:
    "UK digital marketing agency for SEO, PPC, app development, and web design, with 24/7 support and full-service growth strategies that cover every angle.",
  openGraph: {
    title: "360 Web Solutions Digital Marketing Agency London & UK",
    description:
      "UK digital marketing agency for SEO, PPC, app development, and web design, with 24/7 support and full-service growth strategies that cover every angle.",
  },
};

export default function Home() {
  const html = loadLegacyHomeHtml();

  return (
    <>
      <link
        rel="preload"
        href="/assets/images/hero-home-digital-agency.webp"
        as="image"
        type="image/webp"
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
