import { ogContentType, ogSize, shareImage } from "@/lib/og-image";

export const alt = "Privacy policy — AirLabs Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return shareImage("Privacy policy");
}
