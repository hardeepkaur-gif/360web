import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";

import { DEFERRED_STYLES_LOADER } from "@/lib/deferredStyles";
import { SITE_URL } from "@/lib/site";
import { TAWK_PERFORMANCE_PATCH } from "@/lib/tawkPerformancePatch";

import CookieConsentBanner from "@/components/CookieConsentBanner";
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
  verification: {
    google: "pxb9xXMeX0PHyOKwtpuQHfUZ5pqmFnxHieceKz_uHLE",
  },
  other: {
    "theme-color": "#0F2A4A",
    "p:domain_verify": "6502b3662f974c843f233e786efd5816",
  },
  icons: { icon: "/assets/images/logo.webp" },
};

const INLINE_CSS = `
:root{--navy:#0F2A4A;--blue:#1A5FBF;--coral:#FF4D3A;--coral-2:#FF6A5A;--soft:#F5F7FA;--white:#FFFFFF;--ink:#0F2A4A;--ink-2:#2A3B55;--ink-3:#5B6A82;--line:#E5EAF2;--grad-accent:linear-gradient(135deg,#FF4D3A 0%,#FF8A5A 100%);--shadow-sm:0 2px 8px rgba(15,42,74,.06);--shadow-md:0 10px 30px rgba(15,42,74,.08);--radius:16px;--radius-lg:22px;--btn-radius:15px;--font-display:var(--font-sora),"Sora","Inter",-apple-system,BlinkMacSystemFont,sans-serif;--font-body:var(--font-inter),"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--ease:cubic-bezier(.22,.61,.36,1);--container:1240px}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{margin:0;font-family:var(--font-body);font-size:16px;line-height:1.6;color:var(--ink);background:#fff;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img,svg{max-width:100%;display:block}
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
.nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.72);backdrop-filter:saturate(150%) blur(18px);-webkit-backdrop-filter:saturate(150%) blur(18px);border-bottom:1px solid rgba(15,42,74,.06)}
.nav__inner{display:flex;align-items:center;justify-content:space-between;gap:32px;padding:16px 28px}
.nav__brand{display:flex;align-items:center}
.nav__logo{height:44px;width:auto}
.nav__menu>ul{display:flex;gap:36px;align-items:center}
.nav__menu a{font-size:14px;font-weight:500;color:var(--ink-2);position:relative}
.nav__actions{display:flex;align-items:center;gap:18px}
.nav__phone{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:var(--ink-2)}
.nav__phone svg{color:var(--blue)}
.nav__toggle{display:none;width:42px;height:42px;border-radius:var(--btn-radius);background:var(--soft);flex-direction:column;align-items:center;justify-content:center;gap:4px}
.nav__toggle span{display:block;width:18px;height:2px;background:var(--navy);border-radius:2px}
.nav__dropdown-panel{position:absolute;top:100%;left:0;padding:8px;min-width:280px;list-style:none;background:var(--white);border:1px solid rgba(229,234,242,.98);border-radius:var(--radius-lg);box-shadow:0 24px 56px rgba(15,42,74,.1);opacity:0;visibility:hidden;transform:translateY(6px);z-index:120}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;font-weight:600;font-size:15px;border-radius:var(--btn-radius);white-space:nowrap;line-height:1}
.btn--primary{background:var(--grad-accent);color:var(--white);box-shadow:0 14px 40px rgba(255,77,58,.4)}
.btn--compact{padding:11px 18px;font-size:14px}
.hero{position:relative;overflow:hidden;color:var(--navy);padding:80px 0 70px;background:radial-gradient(900px 500px at 90% -10%,rgba(26,95,191,.10),transparent 60%),radial-gradient(700px 450px at -5% 100%,rgba(255,77,58,.08),transparent 60%),linear-gradient(180deg,#FFF 0%,#F8FAFD 100%);isolation:isolate}
.hero__bg{position:absolute;inset:0;pointer-events:none;z-index:-1}
.hero__inner{display:grid;grid-template-columns:1.05fr .95fr;gap:70px;align-items:center;padding:40px 28px 0}
.hero__chip{display:inline-flex;align-items:center;gap:10px;padding:8px 14px 8px 8px;border-radius:999px;background:var(--white);border:1px solid var(--line);box-shadow:var(--shadow-sm);font-size:12.5px;letter-spacing:.02em;font-weight:500}
.hero__title{font-size:clamp(36px,5.5vw,68px);font-weight:800;letter-spacing:-.03em;line-height:1.05;margin-top:22px}
.hero__title-blue{color:var(--blue)}
.hero__title-coral{color:var(--coral);position:relative}
.hero__subtitle{font-size:clamp(15px,1.3vw,17px);line-height:1.65;color:var(--ink-3);margin-top:22px;max-width:520px}
.hero__photo{position:relative}
.hero__photo-frame{position:relative;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-md)}
.hero__photo-img{width:100%;height:auto;display:block;object-fit:cover;aspect-ratio:16/9}
.reveal{opacity:1;transform:none;transition:opacity .7s var(--ease),transform .7s var(--ease)}
.reveal.is-visible{opacity:1;transform:none}
@media(max-width:991px){.hero__inner{grid-template-columns:1fr;gap:40px;text-align:center}.nav__menu,.nav__phone{display:none}.nav__toggle{display:flex}.hero__subtitle{margin-inline:auto}.announcement{display:none}}
@media(max-width:600px){.hero{padding:50px 0 40px}.hero__inner{padding:20px 16px 0}.container{padding:0 16px}}
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
        <SiteSchemaScript />
        {process.env.NODE_ENV === "production" ? (
          <script dangerouslySetInnerHTML={{ __html: TAWK_PERFORMANCE_PATCH }} />
        ) : null}
        <style dangerouslySetInnerHTML={{ __html: INLINE_CSS }} />
        <script dangerouslySetInnerHTML={{ __html: DEFERRED_STYLES_LOADER }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <CookieConsentBanner />
        <TawkChatLoader />
      </body>
    </html>
  );
}
