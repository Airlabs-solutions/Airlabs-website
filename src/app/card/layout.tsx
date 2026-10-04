import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "AIRLabs Solutions" },
  description: "Contact card for AIRLabs Solutions in Al Khobar.",
  alternates: { canonical: "/card" },
  openGraph: {
    title: "AIRLabs Solutions",
    description: "Contact card for AIRLabs Solutions in Al Khobar.",
    url: "/card",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function CardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
