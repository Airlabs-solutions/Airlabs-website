import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us — AirLabs Solutions",
  description:
    "Get in touch with AirLabs Solutions — send a project inquiry or reach us by email, phone, or visit our location.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
