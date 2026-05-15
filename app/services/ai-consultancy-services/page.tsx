import { readFileSync } from "fs";
import { join } from "path";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consultancy Services UK | 360 Web Solutions — Strategy & Implementation",
  description:
    "Practical AI consultancy for UK businesses: use-case prioritisation, tooling, governance, and rollout — from an in-house team you can hold accountable.",
  openGraph: {
    title: "AI Consultancy Services UK | 360 Web Solutions",
    description:
      "Strategy, safe adoption, and measurable outcomes — without hype. Book a conversation with our UK specialists.",
  },
};

export default function AiConsultancyServicesPage() {
  const html = readFileSync(
    join(process.cwd(), "content", "services", "ai-consultancy-services.html"),
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
