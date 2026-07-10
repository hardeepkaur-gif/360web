import { loadLegacySiteFooterHtml } from "@/lib/loadLegacySiteChrome";

export function SiteFooter() {
  return (
    <div
      className="site-legacy"
      style={{ display: "contents" }}
      dangerouslySetInnerHTML={{ __html: loadLegacySiteFooterHtml() }}
      suppressHydrationWarning
    />
  );
}
