import Script from "next/script";
import { loadLegacySiteHtml } from "@/lib/loadLegacySiteChrome";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Privacy Policy | 360 Web Solutions",
  description:
    "How 360 Web Solutions Ltd collects, uses, and protects personal data — UK GDPR aligned, plain English.",
  openGraph: {
    title: "Privacy Policy | 360 Web Solutions",
    description:
      "Privacy Policy for 360 Web Solutions: data collection, legal basis, retention, cookies, your rights, and how to contact us.",
  },
};

export default function PrivacyPolicyPage() {
  const html = loadLegacySiteHtml("privacy-policy.html");

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
