"use client";

import { useEffect } from "react";

import { getCookieConsent, hasAcceptedCookies } from "@/lib/cookieConsent";
import { patchTawkPerformanceLogging } from "@/lib/tawkPerformancePatch";

const TAWK_EMBED_SRC =
  "https://embed.tawk.to/6a154f283f29381c3623f315/1jphjqelu";

declare global {
  interface Window {
    __tawkInjected?: boolean;
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

function injectTawk() {
  if (window.__tawkInjected || !hasAcceptedCookies()) return;

  window.__tawkInjected = true;
  patchTawkPerformanceLogging();

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  const script = document.createElement("script");
  script.async = true;
  script.src = TAWK_EMBED_SRC;
  script.charset = "UTF-8";
  document.body.appendChild(script);
}

export default function TawkChatLoader() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    patchTawkPerformanceLogging();

    const onConsent = () => {
      if (hasAcceptedCookies()) injectTawk();
    };

    onConsent();
    window.addEventListener("360:cookie-consent", onConsent);

    const onIntent = () => {
      if (hasAcceptedCookies()) injectTawk();
      window.removeEventListener("scroll", onIntent);
      window.removeEventListener("touchstart", onIntent);
    };

    if (getCookieConsent() === "accepted") {
      window.addEventListener("scroll", onIntent, { passive: true });
      window.addEventListener("touchstart", onIntent, { passive: true });
    }

    return () => {
      window.removeEventListener("360:cookie-consent", onConsent);
      window.removeEventListener("scroll", onIntent);
      window.removeEventListener("touchstart", onIntent);
    };
  }, []);

  return null;
}
