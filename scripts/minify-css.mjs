/**
 * Minifies the hand-edited site stylesheets in place-alongside:
 *   public/css/home.css  -> public/css/home.min.css
 *   public/css/inner.css -> public/css/inner.min.css
 *
 * The source files are never modified. Do not regenerate them from
 * app/globals.css (scripts/build-css.mjs) — they contain hand edits.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";
import cssnano from "cssnano";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cssDir = path.join(root, "public", "css");

const FILES = ["home", "inner"];

const processor = postcss([
  cssnano({
    preset: [
      "default",
      {
        discardUnused: false,
        mergeIdents: false,
        reduceIdents: false,
        zindex: false,
      },
    ],
  }),
]);

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

for (const name of FILES) {
  const from = path.join(cssDir, `${name}.css`);
  const to = path.join(cssDir, `${name}.min.css`);
  const source = await readFile(from, "utf8");
  const result = await processor.process(source, { from, to, map: false });
  await writeFile(to, result.css, "utf8");
  const before = Buffer.byteLength(source);
  const after = Buffer.byteLength(result.css);
  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(`${name}.css: ${kb(before)} -> ${name}.min.css: ${kb(after)} (-${saved}%)`);
}
