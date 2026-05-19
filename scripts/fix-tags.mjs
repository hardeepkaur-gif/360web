import fs from "fs";
const files = process.argv.slice(2);
for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  s = s.replace(/<\/?motion\b/g, (m) => m.replace("motion", "div"));
  fs.writeFileSync(f, s);
  console.log("fixed", f);
}
