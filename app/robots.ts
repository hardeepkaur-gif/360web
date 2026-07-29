import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
    return {
          rules: {
                  userAgent: "*",
                  allow: ["/", "/llms.txt"],
                  disallow: [
                            "/thank-you",
                            "/*.htm$",
                            "/*.html$",
                            "/wp-admin/",
                            "/wp-content/",
                            "/wp-includes/",
                            "/xmlrpc.php",
                            "/wp-login.php",
                          ],
          },
          sitemap: `${SITE_URL}/sitemap.xml`,
          host: SITE_URL,
    };
}
