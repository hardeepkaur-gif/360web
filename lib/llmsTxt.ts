import { GEO_ENTITY_FACTS, getGeoKeyPages } from "@/lib/geoLayer";
import { SITE_SERVICES } from "@/lib/siteSchema";
import { SITE_URL } from "@/lib/site";

export function generateLlmsTxt(): string {
  const keyPages = getGeoKeyPages();
  const serviceLines = SITE_SERVICES.map(
    (s) => `- [${s.name}](${SITE_URL}${s.path})`,
  ).join("\n");
  const pageLines = keyPages
    .map((p) => `- [${p.title}](${p.url}): ${p.description}`)
    .join("\n");

  return `# ${GEO_ENTITY_FACTS.brand}

> ${GEO_ENTITY_FACTS.tagline}

${GEO_ENTITY_FACTS.brand} (${GEO_ENTITY_FACTS.legalName}) is a UK-based digital marketing agency headquartered in ${GEO_ENTITY_FACTS.location}. We help businesses grow through integrated SEO, PPC, content, web development, and AI search optimisation (GEO/AEO).

## Key Facts

- **Website:** ${SITE_URL}
- **Location:** ${GEO_ENTITY_FACTS.location}
- **Service area:** ${GEO_ENTITY_FACTS.serviceArea}
- **Phone:** ${GEO_ENTITY_FACTS.phone}
- **Email:** ${GEO_ENTITY_FACTS.email}
- **Specialties:** ${GEO_ENTITY_FACTS.specialties.join(", ")}
- **Industries:** ${GEO_ENTITY_FACTS.industries.join(", ")}

## Primary Pages

${pageLines}

## Services

${serviceLines}

## Sitemap

- [XML Sitemap](${SITE_URL}/sitemap.xml)

## Optional

- [Privacy Policy](${SITE_URL}/privacy-policy)
- [Terms and Conditions](${SITE_URL}/terms-and-conditions)
`;
}
