import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cookie Policy | 360 Web Solutions",
  description:
    "How 360 Smart Solutions Limited trading as 360 Web Solutions uses cookies on 360websolutions.co.uk — categories, consent, and how to manage preferences.",
  openGraph: {
    title: "Cookie Policy | 360 Web Solutions",
    description:
      "Cookie Policy: strictly necessary, analytics, functional cookies, legal framework (PECR / UK GDPR), and browser controls.",
  },
};

export default function CookiePolicyPage() {
  const html = loadLegacySiteHtml("cookie-policy.html");


  return (
    <>
      <BreadcrumbSchemaScript pageKey="cookiePolicy" />
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

