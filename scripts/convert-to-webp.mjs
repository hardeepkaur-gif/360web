import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const IMG_DIR = join(process.cwd(), "public", "assets", "images");
const QUALITY = 80;
const MAX_WIDTH = 1200;

async function convert() {
  const files = await readdir(IMG_DIR);
  const pngs = files.filter(
    (f) => extname(f).toLowerCase() === ".png" && f !== "logo.png",
  );

  console.log(`Found ${pngs.length} PNG files to convert\n`);

  let totalSaved = 0;

  for (const file of pngs) {
    const inputPath = join(IMG_DIR, file);
    const outputPath = join(IMG_DIR, basename(file, ".png") + ".webp");

    const original = await stat(inputPath);
    const originalKB = (original.size / 1024).toFixed(1);

    try {
      const img = sharp(inputPath);
      const meta = await img.metadata();

      let pipeline = img;
      if (meta.width && meta.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      await pipeline.webp({ quality: QUALITY }).toFile(outputPath);

      const converted = await stat(outputPath);
      const convertedKB = (converted.size / 1024).toFixed(1);
      const saved = original.size - converted.size;
      totalSaved += saved;

      console.log(
        `  ${file} → ${basename(outputPath)}  (${originalKB}KB → ${convertedKB}KB, saved ${(saved / 1024).toFixed(1)}KB)`,
      );
    } catch (err) {
      console.error(`  FAILED: ${file} — ${err.message}`);
    }
  }

  console.log(
    `\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(1)}MB`,
  );
}

convert();
