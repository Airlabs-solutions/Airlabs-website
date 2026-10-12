import { ogContentType, ogSize, shareImage } from "@/lib/og-image";

export const alt = "Terms and conditions — AirLabs Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return shareImage("Terms and conditions");
}
