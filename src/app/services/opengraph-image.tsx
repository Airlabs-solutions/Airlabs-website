import { ogContentType, ogSize, shareImage } from "@/lib/og-image";

export const alt = "Services — AirLabs Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return shareImage("Services");
}
