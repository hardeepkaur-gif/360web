"use client";

import { useEffect } from "react";

import { hasAcceptedCookies } from "@/lib/cookieConsent";
import {
  handleQueuedTawkOpen,
  injectTawk,
  openTawkChat,
} from "@/lib/tawkEmbed";
import { patchTawkPerformanceLogging } from "@/lib/tawkPerformancePatch";

export default function TawkChatLoader() {
  useEffect(() => {
    patchTawkPerformanceLogging();
    window.openTawkChat = openTawkChat;

    const onConsent = () => {
      if (!hasAcceptedCookies()) return;

      injectTawk();
      handleQueuedTawkOpen();
    };

    onConsent();
    window.addEventListener("360:cookie-consent", onConsent);

    const onChatTrigger = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement | null)?.closest(
        "[data-open-tawk-chat]",
      );
      if (!trigger) return;

      event.preventDefault();
      openTawkChat();
    };

    document.addEventListener("click", onChatTrigger);

    return () => {
      window.removeEventListener("360:cookie-consent", onConsent);
      document.removeEventListener("click", onChatTrigger);
      delete window.openTawkChat;
    };
  }, []);

  return null;
}
