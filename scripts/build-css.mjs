import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PurgeCSS } from "purgecss";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const globalsPath = path.join(root, "app", "globals.css");
const outDir = path.join(root, "public", "css");

const SAFELIST = {
  standard: [
    "html",
    "body",
    "reveal",
    "is-visible",
    "is-active",
    "is-open",
    "is-scrolled",
    "is-flipping",
    "is-selected",
    "has-selection",
    "active",
    "open",
    "show",
    "hide",
  ],
  deep: [
    /^reveal/,
    /^is-/,
    /^has-/,
    /^nav/,
    /^proc/,
    /^contact__cal/,
    /^work-card/,
    /^ind-card/,
    /^gr-/,
    /^faq/,
    /^btn/,
    /^hero/,
    /^hero-lead/,
    /^hero__title/,
    /^hero__lead/,
    /^footer/,
    /^section/,
    /^container/,
    /^eyebrow/,
    /^wp-svc/,
    /^wp-offer/,
    /^wp-compare/,
    /^wp-what-is/,
    /^wp-about/,
    /^wp-hero/,
    /^cookie-consent/,
  ],
  greedy: [/hover/, /focus/, /active/, /open/, /visible/, /selected/],
};

function globHtml(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...globHtml(full));
    else if (entry.name.endsWith(".html")) results.push(full);
  }
  return results;
}

async function purgeToFile({ content, outputName, label }) {
  const purgeCSSResult = await new PurgeCSS().purge({
    content,
    css: [{ raw: fs.readFileSync(globalsPath, "utf8") }],
    safelist: SAFELIST,
    fontFace: true,
    keyframes: true,
    variables: true,
  });

  const css = purgeCSSResult[0].css;
  const outPath = path.join(outDir, outputName);
  fs.writeFileSync(outPath, css);
  const kb = (Buffer.byteLength(css, "utf8") / 1024).toFixed(1);
  console.log(`  ${outputName}: ${kb} KiB (${content.length} HTML sources)`);
  return kb;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const partials = globHtml(path.join(root, "content", "partials"));
  const homeContent = [
    path.join(root, "content", "body.html"),
    path.join(root, "content", "partials", "google-reviews-grid.html"),
    ...partials.filter((f) => !f.endsWith("google-reviews-grid.html")),
  ].filter((f) => fs.existsSync(f));

  const allContent = globHtml(path.join(root, "content"));

  console.log("Building purged CSS from globals.css…");

  const homeKb = await purgeToFile({
    content: homeContent.map((f) => ({ raw: fs.readFileSync(f, "utf8"), extension: "html" })),
    outputName: "home.css",
    label: "home",
  });

  const innerKb = await purgeToFile({
    content: allContent.map((f) => ({ raw: fs.readFileSync(f, "utf8"), extension: "html" })),
    outputName: "inner.css",
    label: "inner",
  });

  // Fallback full bundle (all pages) for edge cases
  const allKb = await purgeToFile({
    content: allContent.map((f) => ({ raw: fs.readFileSync(f, "utf8"), extension: "html" })),
    outputName: "all.css",
    label: "all",
  });

  console.log(`Done. home=${homeKb}KiB inner=${innerKb}KiB all=${allKb}KiB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
