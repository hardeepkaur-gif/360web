import Script from "next/script";

import { loadLegacySiteHeaderHtml } from "@/lib/loadLegacySiteChrome";

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
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}
