import { hasAcceptedCookies } from "@/lib/cookieConsent";
import { patchTawkPerformanceLogging } from "@/lib/tawkPerformancePatch";

const DEFAULT_TAWK_EMBED_SRC =
  "https://embed.tawk.to/6a154f283f29381c3623f315/1jphjqelu";

export const TAWK_EMBED_SRC =
  process.env.NEXT_PUBLIC_TAWK_EMBED_SRC?.trim() || DEFAULT_TAWK_EMBED_SRC;

declare global {
  interface Window {
    __tawkInjected?: boolean;
    __tawkOpenQueued?: boolean;
    Tawk_API?: {
      maximize?: () => void;
      showWidget?: () => void;
      onLoad?: () => void;
      [key: string]: unknown;
    };
    Tawk_LoadStart?: Date;
    openTawkChat?: () => void;
  }
}

function ensureTawkOnLoadHandlers() {
  const prevOnLoad = window.Tawk_API?.onLoad;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_API.onLoad = function () {
    if (typeof prevOnLoad === "function") prevOnLoad();
    window.Tawk_API?.showWidget?.();

    if (window.__tawkOpenQueued) {
      window.__tawkOpenQueued = false;
      window.Tawk_API?.maximize?.();
    }
  };
}

export function injectTawk() {
  if (window.__tawkInjected || !hasAcceptedCookies()) return;

  window.__tawkInjected = true;
  patchTawkPerformanceLogging();
  ensureTawkOnLoadHandlers();

  window.Tawk_LoadStart = new Date();

  const script = document.createElement("script");
  script.async = true;
  script.src = TAWK_EMBED_SRC;
  script.charset = "UTF-8";
  script.onerror = () => {
    window.__tawkInjected = false;
  };
  document.body.appendChild(script);
}

function maximizeTawk() {
  if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
    window.Tawk_API.maximize();
    return;
  }

  window.__tawkOpenQueued = true;
}

export function openTawkChat() {
  if (!hasAcceptedCookies()) {
    window.__tawkOpenQueued = true;
    window.dispatchEvent(new CustomEvent("360:cookie-settings"));
    return;
  }

  injectTawk();
  maximizeTawk();
}

export function handleQueuedTawkOpen() {
  if (!window.__tawkOpenQueued || !hasAcceptedCookies()) return;

  injectTawk();

  if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
    window.__tawkOpenQueued = false;
    window.Tawk_API.maximize();
  }
}
