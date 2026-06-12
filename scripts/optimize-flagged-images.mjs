import sharp from "sharp";
import { join } from "node:path";
import https from "node:https";
import fs from "node:fs";

const IMG_DIR = join(process.cwd(), "public", "assets", "images");
const MAX_BYTES = 58 * 1024;

function download(url) {
  return new Promise((resolve, reject) => {
    const doGet = (u) => {
      https
        .get(u, (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            doGet(res.headers.location);
            return;
          }
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () => resolve(Buffer.concat(chunks)));
          res.on("error", reject);
        })
        .on("error", reject);
    };
    doGet(url);
  });
}

async function compressToTarget(input, outPath, maxWidth = 800) {
  let quality = 78;
  let size = Infinity;

  while (quality >= 50) {
    await sharp(input)
      .resize(maxWidth, null, { withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(outPath);
    size = fs.statSync(outPath).size;
    if (size <= MAX_BYTES) break;
    quality -= 4;
  }

  return size;
}

async function run() {
  const localSources = [
    { input: join(IMG_DIR, "smm-diagnosis-illustration.png"), out: "smm-diagnosis-illustration.webp", maxWidth: 760 },
    { input: join(IMG_DIR, "seo-audit-service-content.png"), out: "seo-audit-service-content.webp", maxWidth: 760 },
  ];

  for (const { input, out, maxWidth } of localSources) {
    const outPath = join(IMG_DIR, out);
    const size = await compressToTarget(input, outPath, maxWidth);
    console.log(`${out}: ${(size / 1024).toFixed(1)}KB`);
  }

  const downloads = [
    {
      url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
      out: "about-diff-strategist.webp",
      maxWidth: 520,
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80",
      out: "ai-consultancy-tool-selection.webp",
      maxWidth: 800,
    },
  ];

  for (const { url, out, maxWidth } of downloads) {
    const outPath = join(IMG_DIR, out);
    console.log(`Downloading ${out}...`);
    const buf = await download(url);
    const size = await compressToTarget(buf, outPath, maxWidth);
    console.log(`${out}: ${(size / 1024).toFixed(1)}KB`);
  }

  console.log("\nDone.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
