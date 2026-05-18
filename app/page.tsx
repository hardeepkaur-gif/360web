import Script from "next/script";

import { loadLegacyHomeHtml } from "@/lib/loadLegacySiteChrome";

export default function Home() {
  const html = loadLegacyHomeHtml();

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
