export const SITE_URL = "https://www.360websolutions.co.uk";

/** Absolute canonical URL for a site path (always www). */
export function siteCanonical(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
