import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/seo/analytics";
import { CookieConsent } from "@/components/seo/cookie-consent";
import { JsonLd } from "@/components/seo/json-ld";
import {
  defaultDescription,
  defaultTitle,
  keywords,
  siteName,
  siteUrl,
} from "@/data/seo";
import "./globals.css";

const sans = localFont({
  src: "../fonts/inter-latin.woff2",
  weight: "400 600",
  style: "normal",
  variable: "--font-sans",
  display: "swap",
});

const display = localFont({
  src: [
    {
      path: "../fonts/poppins-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/poppins-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s — ${siteName}`,
  },
  description: defaultDescription,
  keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          // Prevents a light-mode flash on load by applying the saved theme
          // before React hydrates.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${sans.variable} ${display.variable} font-sans font-normal`}
      >
        <JsonLd />
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
