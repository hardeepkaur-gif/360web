import { JsonLdScript } from "@/components/JsonLdScript";
import {
  createHomepageWebPageNode,
  createSchemaGraph,
} from "@/lib/siteSchema";
import { createFaqPageNode } from "@/lib/homeFaqSchema";

const homepageTitle =
  "Award-Winning Digital Marketing Agency London | SEO and PPC";
const homepageDescription =
  "UK digital marketing agency for SEO, PPC, web design, and content — in-house strategy, execution, and measurable growth across every channel.";

const homepageSchemaGraph = createSchemaGraph(
  createHomepageWebPageNode(homepageTitle, homepageDescription),
  createFaqPageNode(),
);

export function HomeSchemaScript() {
  return (
    <JsonLdScript id="homepage-schema" data={homepageSchemaGraph} />
  );
}
