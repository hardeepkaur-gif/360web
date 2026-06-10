export const COOKIE_CONSENT_KEY = "360-cookie-consent";

export type CookieConsentChoice = "accepted" | "declined";

export function getCookieConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setCookieConsent(choice: CookieConsentChoice): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, choice);
  window.dispatchEvent(
    new CustomEvent("360:cookie-consent", { detail: choice }),
  );
}

export function hasAcceptedCookies(): boolean {
  return getCookieConsent() === "accepted";
}
