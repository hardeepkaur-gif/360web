import { JsonLdScript } from "@/components/JsonLdScript";
import { createServicePageSchemaGraph } from "@/lib/breadcrumbSchema";
import type { ServiceSchemaSlug } from "@/lib/serviceSchema";

type ServiceSchemaScriptProps = {
  slug: ServiceSchemaSlug;
};

export function ServiceSchemaScript({ slug }: ServiceSchemaScriptProps) {
  const schema = createServicePageSchemaGraph(slug);

  return <JsonLdScript id={`service-schema-${slug}`} data={schema} />;
}
