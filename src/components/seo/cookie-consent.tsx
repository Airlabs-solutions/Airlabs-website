"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  OPEN_CONSENT_EVENT,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/consent";

export function CookieConsent() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(readCookieConsent() === null);
    const show = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, show);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, show);
  }, []);

  if (pathname === "/card" || !open) return null;

  const choose = (value: "accepted" | "rejected") => {
    writeCookieConsent(value);
    if (value === "rejected" && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
    setOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-4 shadow-lg sm:p-5">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Analytics cookies help us see how the site is used. They stay off
          until you accept. Your theme choice stays on this device either way.{" "}
          <Link
            href="/privacy"
            className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
          >
            Privacy policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="h-11 rounded-full border border-border px-5 text-sm font-medium text-foreground hover:border-navy-600 hover:text-navy-600 dark:hover:text-navy-300"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="h-11 rounded-full bg-navy-600 px-5 text-sm font-medium text-white hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-400"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
