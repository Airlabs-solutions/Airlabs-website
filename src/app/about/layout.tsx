import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: "About us",
  description:
    "AirLabs Solutions is a full-stack IT partner in Al Khobar for software, mobile, AI, web, marketing, and infrastructure.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
