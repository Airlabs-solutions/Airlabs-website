import { ogContentType, ogSize, shareImage } from "@/lib/og-image";

export const alt =
  "AirLabs Solutions — IT Services & Software Engineering in Al Khobar";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return shareImage("IT Services & Software Engineering in Al Khobar");
}
