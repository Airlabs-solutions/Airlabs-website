import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us — AirLabs Solutions",
  description:
    "Learn about AirLabs Solutions — a full-stack IT partner for software, mobile, AI, web, marketing, and infrastructure.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
