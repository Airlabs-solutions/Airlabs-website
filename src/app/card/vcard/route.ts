import { business, siteUrl } from "@/data/seo";

function escapeVcard(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function vcard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:;Airlabs Solutions;;;",
    "FN:Airlabs Solutions",
    "ORG:Airlabs Solutions",
    `TEL;TYPE=WORK,VOICE:${business.phoneE164}`,
    `EMAIL;TYPE=INTERNET,WORK:${business.email}`,
    `URL:${siteUrl}`,
    `ADR;TYPE=WORK:;;${escapeVcard(business.streetAddress)};${escapeVcard(business.addressLocality)};${escapeVcard(business.addressRegion)};${business.postalCode};Saudi Arabia`,
    "END:VCARD",
  ];
  return `${lines.join("\r\n")}\r\n`;
}

export function GET() {
  return new Response(vcard(), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="AirLabs-Solutions.vcf"',
      "Cache-Control": "no-store",
    },
  });
}
