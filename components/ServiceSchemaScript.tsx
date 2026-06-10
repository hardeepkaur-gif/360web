import { createServiceSchema, SERVICE_SCHEMAS, type ServiceSchemaSlug } from "@/lib/serviceSchema";

type ServiceSchemaScriptProps = {
  slug: ServiceSchemaSlug;
};

export function ServiceSchemaScript({ slug }: ServiceSchemaScriptProps) {
  const entry = SERVICE_SCHEMAS[slug];
  const schema = createServiceSchema(entry);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
