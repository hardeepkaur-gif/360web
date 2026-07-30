import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";

import { DEFERRED_STYLES_LOADER } from "@/lib/deferredStyles";
import { SITE_URL } from "@/lib/site";
import { TAWK_PERFORMANCE_PATCH } from "@/lib/tawkPerformancePatch";

import CookieConsentBanner from "@/components/CookieConsentBanner";
import { GeoLayerScript } from "@/components/GeoLayerScript";
import { MobileNavToggle } from "@/components/MobileNavToggle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteSchemaScript } from "@/components/SiteSchemaScript";
import TawkChatLoader from "@/components/TawkChatLoader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-inter",
  preload: false,
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-sora",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "360 Web Solutions Digital Marketing Agency London & UK",
  description:
    "UK digital marketing agency for SEO, PPC, web design, and content — in-house strategy, execution, and measurable growth across every channel.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  verification: {
    google: "qFAlOPARTVXuj6f7WAXVTmHYp2nJQf51ssGKmjNzUHQ",
  },
  other: {
    "theme-color": "#0F2A4A",
    "p:domain_verify": "6502b3662f974c843f233e786efd5816",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

const INLINE_CSS = `
:root{--navy:#0F2A4A;--blue:#1A5FBF;--coral:#FF4D3A;--coral-2:#FF6A5A;--soft:#F5F7FA;--white:#FFFFFF;--ink:#0F2A4A;--ink-2:#2A3B55;--ink-3:#5B6A82;--line:#E5EAF2;--grad-accent:linear-gradient(135deg,#FF4D3A 0%,#FF8A5A 100%);--shadow-sm:0 2px 8px rgba(15,42,74,.06);--shadow-md:0 10px 30px rgba(15,42,74,.08);--radius:16px;--radius-lg:22px;--btn-radius:15px;--font-display:var(--font-sora),"Sora","Inter",-apple-system,BlinkMacSystemFont,sans-serif;--font-body:var(--font-inter),"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--ease:cubic-bezier(.22,.61,.36,1);--container:1240px}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{margin:0;font-family:var(--font-body);font-size:16px;line-height:1.6;color:var(--ink);background:#fff;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img{max-width:100%;height:auto;display:block}
svg{max-width:100%}
svg:not([width]):not([height]):not(.proc-svg){width:24px;height:24px}
a{color:inherit;text-decoration:none}
#svc-webdev-transform .svc-transform__desc a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#svc-webdev-transform .svc-transform__desc a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
#on-page-seo-results .seo-results-expect__text a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#on-page-seo-results .seo-results-expect__text a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
#on-page-seo-process .proc-desc__text a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#on-page-seo-process .proc-desc__text a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
#seo-include .svc-img-desc a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#seo-include .svc-img-desc a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
#seo-audit-process .pst-content p a.brand-link,#why-choose-seo-audit .seo-choose__text a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#seo-audit-process .pst-content p a.brand-link:hover,#why-choose-seo-audit .seo-choose__text a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
#svc-ai-about .svc-ai-about__para a.brand-link,#svc-ai-trust-market .svc-ai-trust__copy a.brand-link,#svc-ai-why-choose .seo-choose__text a.brand-link,#cro-uk-businesses .section__lede a.brand-link,#why-choose-cro .seo-choose__lede a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#svc-ai-about .svc-ai-about__para a.brand-link:hover,#svc-ai-trust-market .svc-ai-trust__copy a.brand-link:hover,#svc-ai-why-choose .seo-choose__text a.brand-link:hover,#cro-uk-businesses .section__lede a.brand-link:hover,#why-choose-cro .seo-choose__lede a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
#seo-content-built-for-rankings .seo-split__content p a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#seo-content-built-for-rankings .seo-split__content p a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
#seo-content-we-offer .svc-img-desc a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#seo-content-we-offer .svc-img-desc a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
#ai-marketing-tools-human-strategy .svc-ai-trust__copy a.brand-link,#ai-marketing-services-include .svc-img-desc a.brand-link,#ai-marketing-why-ai-powered .seo-split__content p a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#ai-marketing-tools-human-strategy .svc-ai-trust__copy a.brand-link:hover,#ai-marketing-services-include .svc-img-desc a.brand-link:hover,#ai-marketing-why-ai-powered .seo-split__content p a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
#home-services .svc-hdr .sub a.brand-link,#outcomes .ind-card__desc a.brand-link{color:#FF4D3A!important;font-weight:600;text-decoration:none!important;-webkit-text-fill-color:#FF4D3A!important}
#home-services .svc-hdr .sub a.brand-link:hover,#outcomes .ind-card__desc a.brand-link:hover{color:#FF6A5A!important;text-decoration:underline!important;-webkit-text-fill-color:#FF6A5A!important}
ul{list-style:none;margin:0;padding:0}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
.container{width:100%;max-width:var(--container);margin:0 auto;padding:0 28px}
h1,h2,h3,h4,h5{font-family:var(--font-display);color:var(--navy);letter-spacing:-.02em;line-height:1.1;margin:0;font-weight:700}
.announcement{background:#071629;color:rgba(255,255,255,.82);font-size:13px;border-bottom:1px solid rgba(255,255,255,.06)}
.announcement__inner{display:flex;align-items:center;gap:12px;padding:11px 28px;flex-wrap:wrap}
.announcement__dot{width:7px;height:7px;border-radius:50%;background:var(--coral);position:relative}
.announcement p{margin:0;flex:1}
.announcement__cta{color:var(--coral);font-weight:600}
.nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.72);backdrop-filter:saturate(150%) blur(18px);-webkit-backdrop-filter:saturate(150%) blur(18px);border-bottom:1px solid rgba(15,42,74,.06);overflow:visible}
.nav__inner{display:flex;align-items:center;justify-content:space-between;gap:32px;padding:16px 28px;position:relative}
.nav__brand{display:flex;align-items:center}
.nav__logo{height:50px;width:auto;max-width:min(160px,42vw)}
.nav__menu>ul{display:flex;gap:36px;align-items:center}
.nav__menu a{font-size:14px;font-weight:500;color:var(--ink-2);position:relative}
.nav__actions{display:flex;align-items:center;gap:18px}
.nav__phone{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:var(--ink-2)}
.nav__phone svg{color:var(--blue)}
.nav__toggle{display:none;width:42px;height:42px;border-radius:var(--btn-radius);background:var(--soft);flex-direction:column;align-items:center;justify-content:center;gap:4px}
.nav__toggle span{display:block;width:18px;height:2px;background:var(--navy);border-radius:2px;transition:transform .3s,opacity .3s}
.nav__toggle[aria-expanded="true"] span:nth-child(1){transform:translateY(6px) rotate(45deg)}
.nav__toggle[aria-expanded="true"] span:nth-child(2){opacity:0}
.nav__toggle[aria-expanded="true"] span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}
.nav__dropdown-panel{position:absolute;top:100%;left:0;padding:8px;min-width:280px;list-style:none;background:var(--white);border:1px solid rgba(229,234,242,.98);border-radius:var(--radius-lg);box-shadow:0 24px 56px rgba(15,42,74,.1);opacity:0;visibility:hidden;transform:translateY(6px);z-index:120}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;font-weight:600;font-size:15px;border-radius:var(--btn-radius);white-space:nowrap;line-height:1}
.btn--primary{background:var(--grad-accent);color:var(--white);box-shadow:0 14px 40px rgba(255,77,58,.4)}
.btn--compact{padding:11px 18px;font-size:14px}
.hero{position:relative;overflow:hidden;color:var(--navy);padding:80px 0 70px;background:#fff;isolation:isolate}
.hero__bg{position:absolute;inset:0;pointer-events:none;z-index:-1}
.hero__inner{display:grid;grid-template-columns:1.05fr .95fr;gap:70px;align-items:center;padding:40px 28px 0}
.hero__chip{display:inline-flex;align-items:center;gap:10px;padding:8px 14px 8px 8px;border-radius:999px;background:var(--white);border:1px solid var(--line);box-shadow:var(--shadow-sm);font-size:12.5px;letter-spacing:.02em;font-weight:500}
.hero__title{font-size:clamp(36px,5.5vw,68px);font-weight:800;letter-spacing:-.03em;line-height:1.05;margin-top:22px}
.hero__title-blue{color:#1A5FBF;-webkit-text-fill-color:#1A5FBF}
.hero__title-navy{color:#0F2A4A;-webkit-text-fill-color:#0F2A4A}
.hero__title-coral{color:#FF4D3A;-webkit-text-fill-color:#FF4D3A}
.hero__subtitle{font-size:clamp(15px,1.3vw,17px);line-height:1.65;color:var(--ink-3);margin-top:22px;max-width:520px}
.hero__photo{position:relative}
.hero__photo-frame{position:relative;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-md)}
.hero__photo-img{width:100%;height:auto;display:block;object-fit:cover;aspect-ratio:16/9}
.hero__lead{position:relative;width:100%;align-self:center}
.hero-lead{position:relative;padding:clamp(12px,1.8vw,18px);border-radius:clamp(28px,3.5vw,40px);border:1.5px solid rgba(255,255,255,.55);background:transparent}
.hero-lead__card{position:relative;padding:clamp(28px,3.4vw,40px) clamp(22px,3vw,36px);border-radius:clamp(20px,2.6vw,28px);background:transparent;overflow:hidden;isolation:isolate;text-align:center}
.hero-lead__bg{position:absolute;inset:0;z-index:0;background-image:url("/assets/images/team-collaboration-hero-bg.webp");background-size:cover;background-position:center;pointer-events:none}
.hero-lead__overlay{position:absolute;inset:0;z-index:1;background:rgba(0,0,0,.78);pointer-events:none}
.hero-lead__head,.hero-lead__form{position:relative;z-index:2}
.hero-lead__head{margin-bottom:24px;text-align:center}
.hero-lead__title{margin:0 0 12px;font-size:clamp(20px,2.2vw,26px);font-weight:800;line-height:1.15;color:#fff!important;-webkit-text-fill-color:#fff}
.hero-lead__accent{display:block;width:56px;height:3px;margin:0 auto 14px;border-radius:999px;background:#FF4D3A}
.hero-lead__sub{margin:0 auto;max-width:34ch;font-size:14px;line-height:1.55;color:#fff!important}
.hero-lead__form{display:grid;grid-template-columns:1fr 1fr;gap:14px;color:#fff;text-align:left}
.hero-lead__field{display:flex;flex-direction:column;gap:7px}
.hero-lead__field>span{font-size:12.5px;font-weight:700;color:#fff!important}
.hero-lead__field input,.hero-lead__field select{width:100%;padding:13px 15px;border:1px solid rgba(15,42,74,.08);border-radius:12px;background:#fff;color:#0F2A4A!important;-webkit-text-fill-color:#0F2A4A;font-size:15px;line-height:1.4}
.hero-lead__submit{grid-column:1/-1;width:auto;min-width:220px;max-width:100%;justify-self:center;justify-content:center;margin:10px auto 0;gap:10px;border-radius:12px}
.hero-lead__privacy{grid-column:1/-1;margin:2px 0 0;font-size:11.5px;text-align:center;color:#fff!important}
.hero-lead__privacy a{color:#fff!important;text-decoration:underline;font-weight:600}
.reveal{opacity:1;transform:none;transition:opacity .7s var(--ease),transform .7s var(--ease)}
.reveal.is-visible{opacity:1;transform:none}
@media(max-width:991px){.nav{backdrop-filter:none!important;-webkit-backdrop-filter:none!important;background:#fff!important}body.nav-open .nav{z-index:99999!important}.nav__inner{flex-wrap:nowrap;padding:10px 28px!important}.hero__inner{grid-template-columns:1fr;gap:40px;min-height:auto!important;padding-top:12px}.hero--editorial .hero__title{font-size:clamp(30px,7vw,42px)}#home .hero__content .hero__stats,.hero--with-lead .hero__content .hero__stats{flex-direction:row;flex-wrap:nowrap;gap:10px}#home .hero__content .hero__stat,.hero--with-lead .hero__content .hero__stat{flex:1 1 0;min-width:0;width:auto}#home .hero__content .hero__cta,.hero--with-lead .hero__content .hero__cta{flex-direction:row;flex-wrap:nowrap}#home .hero__content .btn--coral,#home .hero__content .btn--ghost-play,.hero--with-lead .hero__content .btn--coral,.hero--with-lead .hero__content .btn--ghost-play{width:auto;flex:1 1 0;min-width:0;font-size:13px;padding:12px 14px}.nav__menu{display:none!important;position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;max-width:100%!important;margin:0!important;padding:76px 28px 28px!important;background:#fff!important;z-index:99998!important;box-shadow:none!important;border-bottom:none!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch;opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:none!important}.nav__menu.is-open,body.nav-open .nav__menu{display:block!important}.nav__menu>ul{display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:16px!important;list-style:none!important;margin:0!important;padding:0!important;width:100%!important}.nav__menu li{width:100%}.nav__menu a{display:block!important;padding:10px 0!important;font-size:16px!important;color:#0F2A4A!important}.nav__dropdown:hover .nav__dropdown-panel,.nav__dropdown:focus-within .nav__dropdown-panel{opacity:0!important;visibility:hidden!important;display:none!important}.nav__dropdown-panel{position:static!important;opacity:0!important;visibility:hidden!important;transform:none!important;box-shadow:none!important;border:none!important;border-radius:0!important;padding:0!important;margin:0!important;min-width:auto!important;background:transparent!important;display:none!important;max-height:0;overflow:hidden;transition:max-height .25s var(--ease),opacity .2s var(--ease),padding .2s var(--ease),margin .2s var(--ease)}.nav__dropdown.is-open .nav__dropdown-panel{opacity:1!important;visibility:visible!important;display:block!important;border-left:3px solid rgba(26,95,191,.16)!important;padding:6px 0 8px 12px!important;margin:6px 0 0 2px!important;max-height:800px;overflow:visible}.nav__dropdown.is-open>.nav__caret{transform:rotate(180deg)}.nav__caret{transition:transform .2s var(--ease)}.nav__phone{display:none}.nav__toggle{display:flex!important;position:relative!important;z-index:99999!important}.nav__actions .btn{display:none!important}.hero__subtitle{margin-inline:auto}.announcement{display:none}body.nav-open{overflow:hidden}}
@media(max-width:600px){.hero{padding:48px 0 40px}.hero__inner{padding:12px 16px 0;gap:28px}.container{padding:0 18px}.hero-lead__card{padding:20px 16px}}
`.trim();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PF74BC4M');`,
          }}
        />
        {/* End Google Tag Manager */}
        <style dangerouslySetInnerHTML={{ __html: INLINE_CSS }} />
        <Script
          id="deferred-styles-loader"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: DEFERRED_STYLES_LOADER }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PF74BC4M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SiteSchemaScript />
        <GeoLayerScript />
        {process.env.NODE_ENV === "production" ? (
          <Script
            id="tawk-performance-patch"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: TAWK_PERFORMANCE_PATCH }}
          />
        ) : null}
        {children}
        <SiteFooter />
        <MobileNavToggle />
        <CookieConsentBanner />
        <TawkChatLoader />
      </body>
    </html>
  );
}
