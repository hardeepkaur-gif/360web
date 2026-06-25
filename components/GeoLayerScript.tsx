import { JsonLdScript } from "@/components/JsonLdScript";
import { createGeoOptimizationGraph } from "@/lib/geoLayer";

const geoSchemaGraph = createGeoOptimizationGraph();

export function GeoLayerScript() {
  return <JsonLdScript id="geo-optimization-layer" data={geoSchemaGraph} />;
}
