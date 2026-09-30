import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Software, mobile apps, AI automation, web development, digital marketing, and IT infrastructure from AirLabs Solutions in Al Khobar, Saudi Arabia.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
