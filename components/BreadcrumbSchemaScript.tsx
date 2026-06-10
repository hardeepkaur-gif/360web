import {
  createBreadcrumbSchema,
  type BreadcrumbItem,
} from "@/lib/breadcrumbSchema";

type BreadcrumbSchemaScriptProps = {
  items: readonly BreadcrumbItem[];
};

export function BreadcrumbSchemaScript({ items }: BreadcrumbSchemaScriptProps) {
  const schema = createBreadcrumbSchema([...items]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
