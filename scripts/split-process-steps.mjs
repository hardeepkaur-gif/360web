/**
 * Extracts per-page process step arrays from main.js into separate lazy-loaded files.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const mainPath = path.join(root, "public", "js", "main.js");
const dataDir = path.join(root, "public", "js", "data");

const STEP_KEYS = [
  "DEFAULT_PROCESS_STEPS",
  "WEBDEV_PROCESS_STEPS",
  "WORDPRESS_PROCESS_STEPS",
  "SOCIAL_PROCESS_STEPS",
  "AI_CONSULTANCY_PROCESS_STEPS",
  "ONPAGE_SEO_PROCESS_STEPS",
  "SEO_AUDIT_PROCESS_STEPS",
  "SEO_CONTENT_WRITING_PROCESS_STEPS",
  "AI_MARKETING_PROCESS_STEPS",
];

const ROUTE_MAP = {
  DEFAULT_PROCESS_STEPS: "/",
  WEBDEV_PROCESS_STEPS: "/services/web-development-services",
  WORDPRESS_PROCESS_STEPS: "/services/wordpress-development-services",
  SOCIAL_PROCESS_STEPS: "/services/social-media-marketing",
  AI_CONSULTANCY_PROCESS_STEPS: "/services/ai-consultancy-services",
  ONPAGE_SEO_PROCESS_STEPS: "/services/on-page-seo-services",
  SEO_AUDIT_PROCESS_STEPS: "/services/seo-audit-services",
  SEO_CONTENT_WRITING_PROCESS_STEPS: "/services/seo-content-writing-services",
  AI_MARKETING_PROCESS_STEPS: "/services/ai-marketing-agency",
};

const GLOBAL_VAR = {
  DEFAULT_PROCESS_STEPS: "__DEFAULT_PROCESS_STEPS",
  WEBDEV_PROCESS_STEPS: "__WEBDEV_PROCESS_STEPS",
  WORDPRESS_PROCESS_STEPS: "__WORDPRESS_PROCESS_STEPS",
  SOCIAL_PROCESS_STEPS: "__SOCIAL_PROCESS_STEPS",
  AI_CONSULTANCY_PROCESS_STEPS: "__AI_CONSULTANCY_PROCESS_STEPS",
  ONPAGE_SEO_PROCESS_STEPS: "__ONPAGE_SEO_PROCESS_STEPS",
  SEO_AUDIT_PROCESS_STEPS: "__SEO_AUDIT_PROCESS_STEPS",
  SEO_CONTENT_WRITING_PROCESS_STEPS: "__SEO_CONTENT_WRITING_PROCESS_STEPS",
  AI_MARKETING_PROCESS_STEPS: "__AI_MARKETING_PROCESS_STEPS",
};

function extractArray(source, key) {
  const markers = [`const ${key}=`, `,${key}=`];
  let start = -1;
  let marker = "";
  for (const m of markers) {
    const idx = source.indexOf(m);
    if (idx !== -1 && (start === -1 || idx < start)) {
      start = idx;
      marker = m;
    }
  }
  if (start === -1) throw new Error(`Missing ${key}`);
  let i = start + marker.length;
  if (source[i] !== "[") throw new Error(`Expected [ for ${key}`);
  let depth = 0;
  const begin = i;
  for (; i < source.length; i++) {
    const ch = source[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        return source.slice(begin, i + 1);
      }
    }
  }
  throw new Error(`Unclosed array for ${key}`);
}

function main() {
  let source = fs.readFileSync(mainPath, "utf8");

  fs.mkdirSync(dataDir, { recursive: true });

  const extracted = {};

  for (const key of STEP_KEYS) {
    const arr = extractArray(source, key);
    extracted[key] = arr;
    const fileName = key.replace(/_PROCESS_STEPS$/, "").toLowerCase().replace(/_/g, "-") + ".js";
    const globalName = GLOBAL_VAR[key];
    const out = `window.${globalName}=${arr};`;
    fs.writeFileSync(path.join(dataDir, fileName), out);
    console.log(`  ${fileName}: ${(Buffer.byteLength(out) / 1024).toFixed(1)} KiB`);
  }

  // Remove all step constant declarations from main.js
  let cleaned = source;
  for (const key of STEP_KEYS) {
    const marker = `const ${key}=`;
    const start = cleaned.indexOf(marker);
    const arr = extractArray(cleaned, key);
    const end = start + marker.length + arr.length;
    cleaned = cleaned.slice(0, start) + cleaned.slice(end);
  }

  // Remove leading comma debris between removed consts
  cleaned = cleaned.replace(/,\s*,/g, ",").replace(/const\s*,/g, "const ");

  const resolver = `const PROCESS_STEPS=(function(){var p=window.location.pathname;if(p.includes("/services/web-development-services"))return window.__WEBDEV_PROCESS_STEPS||window.__DEFAULT_PROCESS_STEPS;if(p.includes("/services/wordpress-development-services"))return window.__WORDPRESS_PROCESS_STEPS||window.__DEFAULT_PROCESS_STEPS;if(p.includes("/services/social-media-marketing"))return window.__SOCIAL_PROCESS_STEPS||window.__DEFAULT_PROCESS_STEPS;if(p.includes("/services/ai-marketing-agency"))return window.__AI_MARKETING_PROCESS_STEPS||window.__DEFAULT_PROCESS_STEPS;if(p.includes("/services/ai-consultancy-services"))return window.__AI_CONSULTANCY_PROCESS_STEPS||window.__DEFAULT_PROCESS_STEPS;if(p.includes("/services/on-page-seo-services"))return window.__ONPAGE_SEO_PROCESS_STEPS||window.__DEFAULT_PROCESS_STEPS;if(p.includes("/services/seo-audit-services"))return window.__SEO_AUDIT_PROCESS_STEPS||window.__DEFAULT_PROCESS_STEPS;if(p.includes("/services/seo-content-writing-services"))return window.__SEO_CONTENT_WRITING_PROCESS_STEPS||window.__DEFAULT_PROCESS_STEPS;return window.__DEFAULT_PROCESS_STEPS||[];})();`;

  const oldResolver = /const PROCESS_STEPS=window\.location\.pathname[\s\S]*?SEO_CONTENT_WRITING_PROCESS_STEPS:DEFAULT_PROCESS_STEPS;/;
  if (!oldResolver.test(cleaned)) {
    throw new Error("Could not find PROCESS_STEPS resolver in main.js");
  }
  cleaned = cleaned.replace(oldResolver, resolver);

  fs.writeFileSync(mainPath, cleaned);
  const kb = (Buffer.byteLength(cleaned, "utf8") / 1024).toFixed(1);
  console.log(`main.js after split: ${kb} KiB`);

  // Write route manifest for pages
  const manifest = {};
  for (const key of STEP_KEYS) {
    const fileName = key.replace(/_PROCESS_STEPS$/, "").toLowerCase().replace(/_/g, "-") + ".js";
    manifest[ROUTE_MAP[key]] = `/js/data/${fileName}`;
  }
  fs.writeFileSync(
    path.join(dataDir, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
}

main();
