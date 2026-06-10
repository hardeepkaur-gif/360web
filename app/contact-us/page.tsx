import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { PAGE_BREADCRUMBS } from "@/lib/breadcrumbSchema";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Us | 360 Web Solutions",
  description:
    "Contact 360 Web Solutions about SEO, PPC, GEO, social media, and web development. Send a message or find us on the map.",
  openGraph: {
    title: "Contact Us | 360 Web Solutions",
    description:
      "Reach our UK team by form, email, or phone — we aim to respond within one business day.",
  },
};

export default function ContactUsPage() {
  const html = loadLegacySiteHtml("contact-us.html");

  return (
    <>
      <BreadcrumbSchemaScript items={PAGE_BREADCRUMBS.contactUs} />
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
