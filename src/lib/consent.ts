export const CONSENT_STORAGE_KEY = "cookie-consent";
export const CONSENT_CHANGE_EVENT = "cookie-consent-change";
export const OPEN_CONSENT_EVENT = "open-cookie-settings";

export type CookieConsent = "accepted" | "rejected";

export function readCookieConsent(): CookieConsent | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "accepted" || value === "rejected") return value;
  } catch {
    return null;
  }
  return null;
}

export function writeCookieConsent(value: CookieConsent) {
  localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
