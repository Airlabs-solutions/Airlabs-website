"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { CONSENT_CHANGE_EVENT, readCookieConsent } from "@/lib/consent";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(readCookieConsent() === "accepted");
    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!measurementId || !allowed || pathname !== "/contact/thanks") return;

    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") {
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
    }
    window.gtag("event", "generate_lead");
  }, [pathname, allowed]);

  if (!measurementId || !allowed || pathname === "/card") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}');`}
      </Script>
    </>
  );
}
