import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const tawkEmbedSrc = process.env.NEXT_PUBLIC_TAWK_EMBED_SRC?.trim();

export const metadata: Metadata = {
  title: "360 Web Solutions — Digital Marketing Agency London & UK",
  description:
    "UK digital marketing agency for SEO, PPC, app development, and web design, with 24/7 support and full-service growth strategies that cover every angle.",
  other: { "theme-color": "#0F2A4A" },
  icons: { icon: "/assets/images/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,400;1,500;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Sora:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {tawkEmbedSrc ? (
          <>
            {/* Run before embed: hides Tawk&apos;s stock bubble — open via branded panel / Tawk_API.maximize() */}
            <Script id="tawk-api-hide-default" strategy="beforeInteractive">{`
var Tawk_API = window.Tawk_API || {};
window.Tawk_API = Tawk_API;
Tawk_API.onLoad = function () {
  if (typeof Tawk_API.hideWidget === "function") Tawk_API.hideWidget();
};
`}</Script>
            <Script
              id="tawk-script"
              src={tawkEmbedSrc}
              strategy="afterInteractive"
              crossOrigin="anonymous"
              charSet="UTF-8"
            />
          </>
        ) : null}
      </body>
    </html>
  );
}
