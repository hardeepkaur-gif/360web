import { JsonLdScript } from "@/components/JsonLdScript";
import { siteSchemaGraph } from "@/lib/siteSchema";

export function SiteSchemaScript() {
  return <JsonLdScript id="site-schema" data={siteSchemaGraph} />;
}
