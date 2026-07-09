"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsentChoice,
} from "@/lib/cookieConsent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) {
      setVisible(true);
    }

    const openSettings = () => setVisible(true);
    window.addEventListener("360:cookie-settings", openSettings);

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-cookie-settings]")) {
        event.preventDefault();
        setVisible(true);
      }
    };
    document.addEventListener("click", onDocumentClick);

    return () => {
      window.removeEventListener("360:cookie-settings", openSettings);
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  const saveChoice = (choice: CookieConsentChoice) => {
    setCookieConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-consent"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      aria-live="polite"
    >
      <div className="cookie-consent__panel">
        <div className="cookie-consent__copy">
          <p id="cookie-consent-title" className="cookie-consent__title">
            We value your privacy
          </p>
          <p id="cookie-consent-desc" className="cookie-consent__text">
            We use cookies to improve your experience, analyse site traffic, and
            enable our live chat widget. Accept cookies to see the chat button in
            the bottom right corner.{" "}
            <Link href="/cookie-policy" className="cookie-consent__link">
              Cookie Policy
            </Link>
          </p>
        </div>
        <div className="cookie-consent__actions">
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--decline"
            onClick={() => saveChoice("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--accept"
            onClick={() => saveChoice("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
