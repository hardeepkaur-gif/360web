import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import { join } from "node:path";
import https from "node:https";

const IMG_DIR = join(process.cwd(), "public", "assets", "images", "case-studies");

const IMAGES = [
  // Hero backgrounds (CSS)
  {
    name: "cs-rdx-hero",
    url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
  },
  {
    name: "cs-virco-hero",
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
  },
  {
    name: "cs-xogo-hero",
    url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
  },
  {
    name: "cs-propday-hero",
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
  },
  {
    name: "cs-ehealth-hero",
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
  },
  {
    name: "cs-uk-frozen-hero",
    url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    width: 1600,
  },

  // Challenge sections (HTML)
  {
    name: "cs-rdx-challenge",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },
  {
    name: "cs-virco-challenge",
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },
  {
    name: "cs-xogo-challenge",
    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },
  {
    name: "cs-propday-challenge",
    url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },
  {
    name: "cs-ehealth-challenge",
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },
  {
    name: "cs-uk-frozen-challenge",
    url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },

  // Strategy / approach sections (HTML)
  {
    name: "cs-virco-strategy",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },
  {
    name: "cs-xogo-strategy",
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },
  {
    name: "cs-propday-strategy",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },
  {
    name: "cs-ehealth-strategy",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },
  {
    name: "cs-uk-frozen-approach",
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },

  // Client section (UK Frozen Food)
  {
    name: "cs-uk-frozen-client",
    url: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1100&q=80",
    width: 900,
  },

  // Learning sections (CSS)
  {
    name: "cs-rdx-learning",
    url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80",
    width: 800,
  },
  {
    name: "cs-virco-learning",
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    width: 800,
  },
  {
    name: "cs-xogo-learning",
    url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=900&q=80",
    width: 800,
  },
  {
    name: "cs-propday-learning",
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    width: 800,
  },
  {
    name: "cs-ehealth-learning",
    url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80",
    width: 800,
  },
  {
    name: "cs-uk-frozen-learning",
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    width: 800,
  },
];

function download(url) {
  return new Promise((resolve, reject) => {
    const doGet = (target) => {
      https
        .get(target, (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            doGet(res.headers.location);
            return;
          }
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode} for ${target}`));
            return;
          }
          const chunks = [];
          res.on("data", (chunk) => chunks.push(chunk));
          res.on("end", () => resolve(Buffer.concat(chunks)));
          res.on("error", reject);
        })
        .on("error", reject);
    };
    doGet(url);
  });
}

async function run() {
  await mkdir(IMG_DIR, { recursive: true });

  for (const { url, name, width } of IMAGES) {
    try {
      console.log(`Downloading ${name}...`);
      const buffer = await download(url);
      const outPath = join(IMG_DIR, `${name}.webp`);
      await sharp(buffer)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(outPath);
      const fileStat = await stat(outPath);
      console.log(`  -> ${name}.webp (${(fileStat.size / 1024).toFixed(1)}KB)`);
    } catch (error) {
      console.error(`  FAILED: ${name} — ${error.message}`);
      process.exitCode = 1;
    }
  }

  console.log("\nDone!");
}

run();
