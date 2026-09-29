import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AirLabs Solutions",
  description:
    "Explore AirLabs services in detail: software, mobile apps, AI automation, web development, digital marketing, and IT infrastructure.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
