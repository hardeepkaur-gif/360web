import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";

const CONTENT_DIR = join(process.cwd(), "content");
const JS_DIR = join(process.cwd(), "public", "js");

const SKIP_FILENAMES = ["logo.png"];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if ([".html", ".js"].includes(extname(e.name))) files.push(full);
  }
  return files;
}

async function run() {
  const dirs = [CONTENT_DIR, JS_DIR];
  const allFiles = [];
  for (const d of dirs) {
    try {
      allFiles.push(...(await walk(d)));
    } catch {}
  }

  console.log(`Found ${allFiles.length} files to scan\n`);

  let totalChanges = 0;

  for (const file of allFiles) {
    const original = await readFile(file, "utf-8");
    let updated = original;

    updated = updated.replace(
      /\/assets\/images\/([^"'\s)]+)\.png/g,
      (match, name) => {
        if (SKIP_FILENAMES.includes(name + ".png")) return match;
        return `/assets/images/${name}.webp`;
      },
    );

    if (updated !== original) {
      const changes =
        (original.match(/\/assets\/images\/[^"'\s)]+\.png/g) || []).length -
        (updated.match(/\/assets\/images\/[^"'\s)]+\.png/g) || []).length;
      console.log(`  Updated: ${file} (${changes} refs)`);
      totalChanges += changes;
      await writeFile(file, updated, "utf-8");
    }
  }

  console.log(`\nTotal references updated: ${totalChanges}`);
}

run();
