import Script from "next/script";

import {
  loadLegacySiteFooterHtml,
  loadLegacySiteHeaderHtml,
} from "@/lib/loadLegacySiteChrome";

type LegacySiteShellProps = {
  children: React.ReactNode;
};

export function LegacySiteShell({ children }: LegacySiteShellProps) {
  return (
    <>
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: loadLegacySiteHeaderHtml() }}
        suppressHydrationWarning
      />
      <main id="main">{children}</main>
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: loadLegacySiteFooterHtml() }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}
