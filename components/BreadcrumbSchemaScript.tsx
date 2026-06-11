import { JsonLdScript } from "@/components/JsonLdScript";
import {
  createCaseStudyPageSchemaGraph,
  createStaticPageSchemaGraph,
  type CaseStudySlug,
  type PageBreadcrumbKey,
} from "@/lib/breadcrumbSchema";

type BreadcrumbSchemaScriptProps =
  | { pageKey: PageBreadcrumbKey }
  | { caseStudy: CaseStudySlug };

function schemaId(props: BreadcrumbSchemaScriptProps) {
  if ("pageKey" in props) {
    return `breadcrumb-schema-${props.pageKey}`;
  }

  return `breadcrumb-schema-${props.caseStudy}`;
}

export function BreadcrumbSchemaScript(props: BreadcrumbSchemaScriptProps) {
  const schema =
    "pageKey" in props
      ? createStaticPageSchemaGraph(props.pageKey)
      : createCaseStudyPageSchemaGraph(props.caseStudy);

  return <JsonLdScript id={schemaId(props)} data={schema} />;
}
