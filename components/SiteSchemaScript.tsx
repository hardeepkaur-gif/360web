import { siteSchemaGraph } from "@/lib/siteSchema";

export function SiteSchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchemaGraph) }}
    />
  );
}
