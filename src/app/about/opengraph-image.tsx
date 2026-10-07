import { ogContentType, ogSize, shareImage } from "@/lib/og-image";

export const alt = "About us — AirLabs Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return shareImage("About us");
}
