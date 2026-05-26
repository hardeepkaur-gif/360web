import sharp from "sharp";
import { join } from "node:path";
import https from "node:https";
import fs from "node:fs";

const IMG_DIR = join(process.cwd(), "public", "assets", "images");

const IMAGES = [
  { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80", name: "home-process-strategise" },
  { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=80", name: "home-process-execute" },
  { url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1100&q=80", name: "home-process-measure" },
  { url: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1100&q=80", name: "home-process-optimise" },
  { url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1100&q=80", name: "home-process-scale" },
  { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=80", name: "home-smm-process-research" },
  { url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=80", name: "home-smm-process-content" },
];

function download(url) {
  return new Promise((resolve, reject) => {
    const doGet = (u) => {
      https.get(u, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) { doGet(res.headers.location); return; }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      }).on("error", reject);
    };
    doGet(url);
  });
}

async function run() {
  for (const { url, name } of IMAGES) {
    const outPath = join(IMG_DIR, `${name}.webp`);
    if (fs.existsSync(outPath)) { console.log(`  Skip (exists): ${name}.webp`); continue; }
    try {
      console.log(`Downloading ${name}...`);
      const buf = await download(url);
      await sharp(buf).resize(800, null, { withoutEnlargement: true }).webp({ quality: 75 }).toFile(outPath);
      console.log(`  -> ${name}.webp (${(fs.statSync(outPath).size / 1024).toFixed(1)}KB)`);
    } catch (err) { console.error(`  FAILED: ${name} — ${err.message}`); }
  }
  console.log("\nDone!");
}
run();
