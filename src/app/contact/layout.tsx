import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: "Contact us",
  description:
    "Contact AirLabs Solutions in Al Khobar by email, phone, or a visit to the Riyad Bank Building on King Fahd Bin Abdulaziz Rd.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
