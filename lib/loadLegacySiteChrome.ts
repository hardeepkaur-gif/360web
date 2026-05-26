import { readFileSync } from "fs";
import { join } from "path";

const ROOT = process.cwd();

const HEADER_PATH = join(ROOT, "content/partials/site-header.html");
const FOOTER_PATH = join(ROOT, "content/partials/site-footer.html");

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

function withSiteFooter(markupBeforeFooter: string): string {
  const raw = `${markupBeforeFooter.trimEnd()}\n${siteFooter()}`;
  return isDev ? raw : minifyHtml(raw);
}

export function loadLegacySiteHtml(innerFilename: string): string {
  const innerPath = join(ROOT, "content", innerFilename);
  const inner = readFileSync(innerPath, "utf-8");
  return withSiteFooter(siteHeader() + inner);
}

export function loadLegacyHomeHtml(): string {
  const innerPath = join(ROOT, "content", "body.html");
  const inner = readFileSync(innerPath, "utf-8");
  return withSiteFooter(siteHeader() + inner);
}

export function loadLegacyPageWithSiteFooter(innerFilename: string): string {
  const innerPath = join(ROOT, "content", innerFilename);
  const inner = readFileSync(innerPath, "utf-8");
  return withSiteFooter(inner);
}
