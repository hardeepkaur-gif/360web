"use client";

import { useEffect } from "react";

import { getCookieConsent, hasAcceptedCookies } from "@/lib/cookieConsent";

const TAWK_EMBED_SRC =
  "https://embed.tawk.to/6a154f283f29381c3623f315/1jphjqelu";

declare global {
  interface Window {
    __tawkInjected?: boolean;
    __tawkPerfPatched?: boolean;
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

/** Tawk's performance logger fails CORS preflight — block it before the widget loads. */
function patchTawkPerformanceLogging() {
  if (window.__tawkPerfPatched) return;
  window.__tawkPerfPatched = true;

  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const url =
      typeof input === "string"
        ? input
        : input instanceof Request
          ? input.url
          : "";

    if (url.includes("va.tawk.to/log-performance")) {
      return Promise.resolve(new Response(null, { status: 204 }));
    }

    return originalFetch(input, init);
  };
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
