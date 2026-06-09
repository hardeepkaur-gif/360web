import Script from "next/script";
import type { Metadata } from "next";

import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Digital Marketing Services UK | 360 Web Solutions",
  description:
    "Explore all 360 Web Solutions services: SEO, local SEO, content, AI consultancy, social media, email marketing, CRO, and web development for UK businesses.",
  openGraph: {
    title: "Digital Marketing Services UK | 360 Web Solutions",
    description:
      "Browse our full range of in-house digital marketing services — SEO, content, AI, social, email, CRO, and web development.",
  },
};

export default function ServicesPage() {
  const html = loadLegacySiteHtml("services/index.html");

  return (
    <>
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
