import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import https from "node:https";

const IMG_DIR = join(process.cwd(), "public", "assets", "images");

const IMAGES = [
  { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=80", name: "home-svc-seo" },
  { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=80", name: "home-svc-audit" },
  { url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=80", name: "home-svc-content" },
  { url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1100&q=80", name: "home-svc-ai-strategy" },
  { url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1100&q=80", name: "home-svc-ai-marketing" },
  { url: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1100&q=80", name: "home-svc-social" },
  { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=80", name: "home-svc-webdev" },
  { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1100&q=80", name: "home-svc-wordpress" },
  { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80", name: "home-process-discover" },
];

function download(url) {
  return new Promise((resolve, reject) => {
    const doGet = (u) => {
      https.get(u, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          doGet(res.headers.location);
          return;
        }
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
    try {
      console.log(`Downloading ${name}...`);
      const buf = await download(url);
      const outPath = join(IMG_DIR, `${name}.webp`);
      await sharp(buf).resize(800, null, { withoutEnlargement: true }).webp({ quality: 75 }).toFile(outPath);
      const { size } = await import("node:fs").then((fs) => fs.statSync(outPath));
      console.log(`  -> ${name}.webp (${(size / 1024).toFixed(1)}KB)`);
    } catch (err) {
      console.error(`  FAILED: ${name} — ${err.message}`);
    }
  }
  console.log("\nDone!");
}

run();
