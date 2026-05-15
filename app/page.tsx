import { readFileSync } from "fs";
import { join } from "path";
import Script from "next/script";

export default function Home() {
  const html = readFileSync(
    join(process.cwd(), "content", "body.html"),
    "utf-8"
  );

  return (
    <>
      <div
        className="site-legacy"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
