const res = await fetch(
  "https://dreamlayout.mnsithub.com/html/itzone/main-html/blog.html",
);
const html = await res.text();

const cssLinks = [...html.matchAll(/href="([^"]+\.css)"/gi)].map((m) => m[1]);
console.log("CSS:", cssLinks);

const pageHeader = html.match(/class="[^"]*page-header[^"]*"[\s\S]{0,1500}/i);
console.log("\nPAGE HEADER:\n", pageHeader?.[0]?.slice(0, 1200));

const blogSection = html.match(/<!--Blog Page Start-->[\s\S]{0,6000}/i)
  || html.match(/blog-page[\s\S]{0,6000}/i);
console.log("\nBLOG SECTION:\n", blogSection?.[0]?.slice(0, 5500));
