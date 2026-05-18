import { readFileSync } from "fs";
import { join } from "path";

const ROOT = process.cwd();

const HEADER_PATH = join(ROOT, "content/partials/site-header.html");
const FOOTER_PATH = join(ROOT, "content/partials/site-footer.html");

let headerCache: string | undefined;
let footerCache: string | undefined;

function siteHeader(): string {
  if (headerCache === undefined) {
    headerCache = readFileSync(HEADER_PATH, "utf-8");
  }
  return headerCache;
}

function siteFooter(): string {
  if (footerCache === undefined) {
    footerCache = readFileSync(FOOTER_PATH, "utf-8");
  }
  return footerCache;
}

/**
 * Compose legacy HTML: shared announcement/nav + inner fragment + shared footer/livechat.
 * `innerFilename` must live under `content/` (e.g. `privacy-policy.html`).
 */
export function loadLegacySiteHtml(innerFilename: string): string {
  const innerPath = join(ROOT, "content", innerFilename);
  const inner = readFileSync(innerPath, "utf-8");
  return siteHeader() + inner + siteFooter();
}

/** Home page: same chrome as policy/contact (`site-header` + main-only body + site-footer). */
export function loadLegacyHomeHtml(): string {
  const innerPath = join(ROOT, "content", "body.html");
  const inner = readFileSync(innerPath, "utf-8").trimEnd();
  return `${siteHeader()}${inner}\n${siteFooter()}`;
}

/**
 * Page HTML that already includes its own header/nav; append the canonical site footer
 * (same file as the home page footer: `content/partials/site-footer.html`).
 */
export function loadLegacyPageWithSiteFooter(innerFilename: string): string {
  const innerPath = join(ROOT, "content", innerFilename);
  const inner = readFileSync(innerPath, "utf-8").trimEnd();
  return `${inner}\n${siteFooter()}`;
}
