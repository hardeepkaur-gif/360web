import { readFileSync } from "fs";
import { join } from "path";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Social Media Marketing Services UK | 360 Web Solutions — Measurable Results",
  description:
    "We build social media strategies, content systems and paid campaigns that drive measurable business growth. Trusted social media marketing agency serving brands across the UK.",
  openGraph: {
    title:
      "Social Media Marketing Agency UK — Measurable Results | 360 Web Solutions",
    description:
      "Strategy, content systems and paid social that connect to revenue — not vanity metrics.",
  },
};

export default function SocialMediaMarketingPage() {
  const html = readFileSync(
    join(
      process.cwd(),
      "content",
      "services",
      "social-media-marketing.html"
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
