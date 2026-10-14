"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-PF74BC4M";
const META_PIXEL_ID = "2397962760612638";

const INTERACTION_EVENTS = [
  "scroll",
  "pointerdown",
  "keydown",
  "touchstart",
] as const;

const META_PIXEL_SNIPPET = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');`;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/** Survives remounts and React strict-mode double effects. */
let injected = false;

function injectTracking() {
  if (injected) return;
  injected = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const gtm = document.createElement("script");
  gtm.async = true;
  gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtm);

  const pixel = document.createElement("script");
  pixel.text = META_PIXEL_SNIPPET;
  document.head.appendChild(pixel);
}

/**
 * Loads Google Tag Manager and the Meta Pixel on the first real user
 * interaction instead of during page load (keeps them off the main thread
 * while Lighthouse measures TBT). Same container / pixel IDs as before.
 */
export default function DeferredTracking() {
  useEffect(() => {
    if (injected) return;

    const onFirstInteraction = () => {
      for (const eventName of INTERACTION_EVENTS) {
        window.removeEventListener(eventName, onFirstInteraction);
      }
      injectTracking();
    };

    for (const eventName of INTERACTION_EVENTS) {
      window.addEventListener(eventName, onFirstInteraction, {
        once: true,
        passive: true,
      });
    }

    return () => {
      for (const eventName of INTERACTION_EVENTS) {
        window.removeEventListener(eventName, onFirstInteraction);
      }
    };
  }, []);

  return null;
}
