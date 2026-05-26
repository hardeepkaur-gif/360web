import type { Metadata, Viewport } from "next";
import { Inter, Sora, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./critical.css";

const tawkEmbedSrc = process.env.NEXT_PUBLIC_TAWK_EMBED_SRC?.trim();

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "360 Web Solutions Digital Marketing Agency London & UK",
  description:
    "UK digital marketing agency for SEO, PPC, app development, and web design, with 24/7 support and full-service growth strategies that cover every angle.",
  other: { "theme-color": "#0F2A4A" },
  icons: { icon: "/assets/images/logo.webp" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${playfair.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement("link");l.rel="stylesheet";l.href="/css/main.css";l.media="print";l.onload=function(){this.media="all"};document.head.appendChild(l)})()`,
          }}
        />
      </head>
      <body>
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
