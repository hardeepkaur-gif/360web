"use client";

import { useEffect } from "react";

import { hasAcceptedCookies } from "@/lib/cookieConsent";
import {
  handleQueuedTawkOpen,
  injectTawk,
  openTawkChat,
} from "@/lib/tawkEmbed";

const INTERACTION_EVENTS = [
  "scroll",
  "pointerdown",
  "keydown",
  "touchstart",
] as const;

/**
 * Loads Tawk.to only on the first real user interaction.
 * Same embed URL / Tawk_API behaviour (via lib/tawkEmbed).
 * Does not touch GTM, gtag, or Meta Pixel.
 */
export default function TawkChat() {
  useEffect(() => {
    window.openTawkChat = openTawkChat;

    let armed = false;
    let loaded = false;

    const cleanupTriggers = () => {
      for (const eventName of INTERACTION_EVENTS) {
        window.removeEventListener(eventName, onArm);
      }
    };

    const tryLoad = () => {
      if (loaded || !armed || !hasAcceptedCookies()) return;
      loaded = true;
      cleanupTriggers();
      injectTawk();
      handleQueuedTawkOpen();
    };

    function onArm() {
      if (armed) return;
      armed = true;
      tryLoad();
    }

    const onConsent = () => {
      tryLoad();
    };

    for (const eventName of INTERACTION_EVENTS) {
      window.addEventListener(eventName, onArm, { once: true, passive: true });
    }

    window.addEventListener("360:cookie-consent", onConsent);

    const onChatTrigger = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement | null)?.closest(
        "[data-open-tawk-chat]",
      );
      if (!trigger) return;

      event.preventDefault();
      armed = true;
      openTawkChat();
    };

    document.addEventListener("click", onChatTrigger);

    return () => {
      cleanupTriggers();
      window.removeEventListener("360:cookie-consent", onConsent);
      document.removeEventListener("click", onChatTrigger);
      delete window.openTawkChat;
    };
  }, []);

  return null;
}
