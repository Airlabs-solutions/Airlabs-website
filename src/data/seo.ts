import type { Metadata } from "next";
import { contactDetails } from "@/data/contact";

export const siteUrl = "https://www.airlabss.com";
export const siteName = "AirLabs Solutions";

export const defaultTitle =
  "AirLabs Solutions — IT Services & Software Engineering in Al Khobar";

export const defaultDescription =
  "AirLabs Solutions in Al Khobar builds custom software, mobile apps, AI automation, web apps, digital marketing, and IT infrastructure for businesses across Saudi Arabia.";

/** Real services and location. Used in metadata and llms.txt, not as a dump of unrelated terms. */
export const keywords = [
  "AirLabs Solutions",
  "IT company Al Khobar",
  "software development Saudi Arabia",
  "custom software development Khobar",
  "mobile app development KSA",
  "AI automation Saudi Arabia",
  "web development Al Khobar",
  "digital marketing Eastern Province",
  "IT infrastructure Al Khobar",
];

export const business = {
  name: contactDetails.location.name,
  email: contactDetails.email,
  phone: contactDetails.phone,
  phoneE164: "+966551076120",
  streetAddress: "4790 King Fahd Bin Abdulaziz Rd, Riyad Bank Building, Aqrabiya 7598",
  addressLocality: "Al Khobar",
  addressRegion: "Eastern Province",
  postalCode: "34441",
  addressCountry: "SA",
  latitude: 26.2972394,
  longitude: 50.2081985,
  openingDays: [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
  ],
  opens: "09:00",
  closes: "18:00",
  logoPath: "/logos/airlabs-light.png",
} as const;

const ogImage = {
  url: business.logoPath,
  alt: siteName,
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const socialTitle = `${title} — ${siteName}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
      images: [business.logoPath],
    },
  };
}
