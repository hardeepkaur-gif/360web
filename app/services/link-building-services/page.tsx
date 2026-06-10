import Script from "next/script";
import type { Metadata } from "next";

import { BreadcrumbSchemaScript } from "@/components/BreadcrumbSchemaScript";
import { ServiceSchemaScript } from "@/components/ServiceSchemaScript";
import { getServiceBreadcrumbTrail } from "@/lib/breadcrumbSchema";
import { loadLegacyPageWithSiteFooter } from "@/lib/loadLegacySiteChrome";

export const metadata: Metadata = {
  title: "Link Building Services UK That Earns High Authority Backlinks | 360 Web Solutions",
  description:
    "Manual link building services for UK businesses. Earn editorial backlinks through white-hat outreach, digital PR and targeted placements that Google rewards.",
  openGraph: {
    title: "Link Building Services UK That Earns High Authority Backlinks | 360 Web Solutions",
    description:
      "Manual link building services for UK businesses. Earn editorial backlinks through white-hat outreach, digital PR and targeted placements that Google rewards.",
  },
};

export default function LinkBuildingServicesPage() {
  const html = loadLegacyPageWithSiteFooter(
    "services/link-building-services.html",
  );

  return (
    <>
      <ServiceSchemaScript slug="link-building-services" />
      <BreadcrumbSchemaScript items={getServiceBreadcrumbTrail("link-building-services")} />
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}
