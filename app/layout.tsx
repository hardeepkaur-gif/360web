import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const tawkEmbedSrc = process.env.NEXT_PUBLIC_TAWK_EMBED_SRC?.trim();

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&family=Playfair+Display:wght@600;700&display=swap";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "360 Web Solutions Digital Marketing Agency London & UK",
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
          rel="dns-prefetch"
          href="https://images.unsplash.com"
        />
        <link rel="preload" href={FONT_URL} as="style" />
        <link href={FONT_URL} rel="stylesheet" media="print" />
        <noscript>
          <link href={FONT_URL} rel="stylesheet" />
        </noscript>
      </head>
      <body>
        <Script id="font-swap" strategy="afterInteractive">{`
document.querySelectorAll('link[media="print"][href*="fonts.googleapis"]').forEach(function(l){l.media="all"});
`}</Script>
        {children}
        {tawkEmbedSrc ? (
          <>
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
