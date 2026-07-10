import { readFileSync } from "fs";
import { join } from "path";

const ROOT = process.cwd();

const HEADER_PATH = join(ROOT, "content/partials/site-header.html");
const FOOTER_PATH = join(ROOT, "content/partials/site-footer.html");
const GOOGLE_REVIEWS_GRID_PATH = join(ROOT, "content/partials/google-reviews-grid.html");
export const GOOGLE_REVIEWS_MARKER = "<!-- @google-reviews-grid@ -->";

let headerCache: string | undefined;
let footerCache: string | undefined;

const isDev = process.env.NODE_ENV === "development";

function minifyHtml(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\n\s*\n/g, "\n")
    .replace(/^\s+/gm, "")
    .replace(/\s{2,}/g, " ")
    .replace(/>\s+</g, "><");
}

function siteHeader(): string {
  if (isDev) {
    return readFileSync(HEADER_PATH, "utf-8");
  }
  if (headerCache === undefined) {
    headerCache = readFileSync(HEADER_PATH, "utf-8");
  }
  return headerCache;
}

function siteFooter(): string {
  if (isDev) {
    return readFileSync(FOOTER_PATH, "utf-8");
  }
  if (footerCache === undefined) {
    footerCache = readFileSync(FOOTER_PATH, "utf-8");
  }
  return footerCache;
}

function injectGoogleReviews(html: string, gridHtml?: string): string {
  if (!html.includes(GOOGLE_REVIEWS_MARKER)) return html;
  const grid = gridHtml ?? readFileSync(GOOGLE_REVIEWS_GRID_PATH, "utf-8");
  return html.replace(GOOGLE_REVIEWS_MARKER, grid.trim());
}

function wrapLegacyContent(markup: string, gridHtml?: string): string {
  const raw = injectGoogleReviews(markup.trimEnd(), gridHtml);
  return isDev ? raw : minifyHtml(raw);
}

export function loadLegacySiteHtml(innerFilename: string): string {
  const innerPath = join(ROOT, "content", innerFilename);
  const inner = readFileSync(innerPath, "utf-8");
  return wrapLegacyContent(siteHeader() + inner);
}

export function loadLegacyHomeHtml(gridHtml?: string): string {
  const innerPath = join(ROOT, "content", "body.html");
  const inner = readFileSync(innerPath, "utf-8");
  return wrapLegacyContent(siteHeader() + inner, gridHtml);
}

export function loadLegacyPageWithSiteFooter(innerFilename: string): string {
  const innerPath = join(ROOT, "content", innerFilename);
  const inner = readFileSync(innerPath, "utf-8");
  return wrapLegacyContent(siteHeader() + inner);
}

/** Header / footer only — for React pages (e.g. WordPress blog). */
export function loadLegacySiteHeaderHtml(): string {
  return siteHeader();
}

export function loadLegacySiteFooterHtml(): string {
  return siteFooter();
}
