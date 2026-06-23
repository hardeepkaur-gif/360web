import sharp from "sharp";
import { readdir, stat, unlink, writeFile, readFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const ROOT = process.cwd();
const IMG_DIR = join(ROOT, "public", "assets", "images");
const MAX_BYTES = 80 * 1024;
const RASTER_EXT = new Set([".png", ".jpg", ".jpeg", ".webp"]);

const REF_DIRS = [
  join(ROOT, "content"),
  join(ROOT, "app"),
  join(ROOT, "components"),
  join(ROOT, "public", "js"),
  join(ROOT, "lib"),
];

const REF_EXT = new Set([".html", ".tsx", ".ts", ".css", ".js", ".mjs"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function compressToTarget(inputPath, outputPath) {
  const meta = await sharp(inputPath).metadata();
  let maxWidth = Math.min(meta.width || 1920, 1920);

  while (maxWidth >= 320) {
    for (let quality = 82; quality >= 32; quality -= 3) {
      await sharp(inputPath)
        .resize(maxWidth, null, { withoutEnlargement: true })
        .webp({ quality, effort: 6, smartSubsample: true })
        .toFile(outputPath);

      const size = (await stat(outputPath)).size;
      if (size <= MAX_BYTES) {
        return { size, maxWidth, quality };
      }
    }
    maxWidth = Math.floor(maxWidth * 0.82);
  }

  await sharp(inputPath)
    .resize(320, null, { withoutEnlargement: true })
    .webp({ quality: 30, effort: 6 })
    .toFile(outputPath);

  return {
    size: (await stat(outputPath)).size,
    maxWidth: 320,
    quality: 30,
  };
}

async function optimizeImages() {
  const files = await readdir(IMG_DIR);
  let converted = 0;
  let recompressed = 0;
  let removed = 0;
  let failed = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!RASTER_EXT.has(ext) || file.endsWith(".tmp")) continue;

    const inputPath = join(IMG_DIR, file);
    const info = await stat(inputPath);
    const base = basename(file, ext);
    const outputPath = join(IMG_DIR, `${base}.webp`);

    const needsWork =
      ext !== ".webp" || info.size > MAX_BYTES || outputPath !== inputPath;

    if (!needsWork) continue;

    try {
      const beforeKB = (info.size / 1024).toFixed(1);
      const { size, maxWidth, quality } = await compressToTarget(
        inputPath,
        outputPath,
      );
      const afterKB = (size / 1024).toFixed(1);
      const over = size > MAX_BYTES ? " OVER TARGET" : "";

      if (ext === ".webp" && inputPath === outputPath) {
        recompressed++;
        console.log(
          `  recompress ${file}: ${beforeKB}KB -> ${afterKB}KB (w${maxWidth}/q${quality})${over}`,
        );
      } else {
        converted++;
        console.log(
          `  convert ${file} -> ${base}.webp: ${beforeKB}KB -> ${afterKB}KB (w${maxWidth}/q${quality})${over}`,
        );
        if (inputPath !== outputPath) {
          await unlink(inputPath);
          removed++;
        }
      }
    } catch (err) {
      failed++;
      console.error(`  FAILED ${file}: ${err.message}`);
    }
  }

  console.log(
    `\nImages: converted=${converted}, recompressed=${recompressed}, removed=${removed}, failed=${failed}`,
  );
}

async function updateReferences() {
  const allFiles = [];
  for (const dir of REF_DIRS) {
    try {
      const files = await walk(dir);
      allFiles.push(...files.filter((f) => REF_EXT.has(extname(f))));
    } catch {
      /* dir may not exist */
    }
  }

  let totalChanges = 0;

  for (const file of allFiles) {
    const original = await readFile(file, "utf-8");
    let updated = original;

    updated = updated.replace(
      /\/assets\/images\/([^"'\s?)]+)\.(png|jpe?g)/gi,
      (_match, name) => `/assets/images/${name}.webp`,
    );

    updated = updated.replace(
      /https:\/\/(?:www\.)?360websolutions\.co\.uk\/assets\/images\/([^"'\s?)]+)\.(png|jpe?g)/gi,
      (_match, name) =>
        `https://www.360websolutions.co.uk/assets/images/${name}.webp`,
    );

    if (updated !== original) {
      const count =
        (original.match(/\/assets\/images\/[^"'\s?)]+?\.(png|jpe?g)/gi) || [])
          .length;
      totalChanges += count;
      await writeFile(file, updated, "utf-8");
      console.log(`  refs: ${file.replace(ROOT + "\\", "")} (${count})`);
    }
  }

  console.log(`\nReference updates: ${totalChanges}`);
}

async function report() {
  const files = await readdir(IMG_DIR);
  let over = 0;
  let nonWebp = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (ext === ".tmp") continue;
    if (ext !== ".webp" && ext !== ".svg") nonWebp++;
    if (ext === ".webp") {
      const size = (await stat(join(IMG_DIR, file))).size;
      if (size > MAX_BYTES) over++;
    }
  }

  console.log(`\nFinal: non-webp=${nonWebp}, webp over 80KB=${over}`);
}

async function main() {
  console.log("Optimizing images in public/assets/images (target <= 80KB)...\n");
  await optimizeImages();
  console.log("\nUpdating source references...\n");
  await updateReferences();
  await report();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
