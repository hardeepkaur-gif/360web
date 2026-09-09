import { readFileSync } from "fs";
import { join } from "path";

import { injectOptimizedNavLogo } from "@/lib/navLogoImg";

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
    return injectOptimizedNavLogo(readFileSync(HEADER_PATH, "utf-8"));
  }
  if (headerCache === undefined) {
    headerCache = injectOptimizedNavLogo(readFileSync(HEADER_PATH, "utf-8"));
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

const HOME_HERO_INNER_START = "<!--@HOME_HERO_INNER_START@-->";
const HOME_HERO_INNER_END = "<!--@HOME_HERO_INNER_END@-->";

/** Homepage parts so the hero LCP image can be a real next/image in React. */
export function loadLegacyHomePageParts(gridHtml?: string): {
  headerHtml: string;
  heroInnerHtml: string;
  mainRestHtml: string;
} {
  const innerPath = join(ROOT, "content", "body.html");
  let body = injectGoogleReviews(readFileSync(innerPath, "utf-8").trimEnd(), gridHtml);

  const innerStart = body.indexOf(HOME_HERO_INNER_START);
  const innerEnd = body.indexOf(HOME_HERO_INNER_END);
  if (innerStart === -1 || innerEnd === -1) {
    throw new Error("Home hero inner markers missing from content/body.html");
  }

  const heroInnerRaw = body
    .slice(innerStart + HOME_HERO_INNER_START.length, innerEnd)
    .trim();

  const sectionStart = body.indexOf('<section class="hero hero--editorial" id="home">');
  if (sectionStart === -1) {
    throw new Error("Home hero section missing from content/body.html");
  }
  const sectionClose = body.indexOf("</section>", sectionStart);
  if (sectionClose === -1) {
    throw new Error("Home hero section is not closed in content/body.html");
  }
  const sectionEnd = sectionClose + "</section>".length;
  const afterHero = body.slice(sectionEnd);

  const mainRestRaw = afterHero.replace(/^\s*/, "").replace(/\s*<\/main>\s*$/i, "");

  const prepare = (html: string) => (isDev ? html : minifyHtml(html));

  return {
    headerHtml: prepare(siteHeader()),
    heroInnerHtml: prepare(heroInnerRaw),
    mainRestHtml: prepare(mainRestRaw),
  };
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
  const year = String(new Date().getFullYear());
  return siteFooter().replace(
    '<span id="year"></span>',
    `<span id="year">${year}</span>`,
  );
}
