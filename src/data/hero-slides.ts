export type HeroSlideId = "software" | "mobile" | "marketing";

export interface HeroSlide {
  id: HeroSlideId;
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  /** Bright accent for the active pill / stage glow (not limited to brand navy) */
  accent: string;
  accentSoft: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "software",
    label: "Software",
    title: "Custom software that fits how you work",
    description:
      "Enterprise systems, APIs, and integrations engineered around your operations from first architecture sketch to production-ready build.",
    ctaLabel: "Build with us",
    accent: "#14b8a6",
    accentSoft: "rgba(20, 184, 166, 0.18)",
  },
  {
    id: "mobile",
    label: "Mobile",
    title: "Native-feel apps users love",
    description:
      "iOS and Android experiences with polished UI, smooth 60fps motion, and offline-ready sync shipped and kept running.",
    ctaLabel: "Launch an app",
    accent: "#c5e14a",
    accentSoft: "rgba(197, 225, 74, 0.22)",
  },
  {
    id: "marketing",
    label: "Marketing",
    title: "Leads and growth you can measure",
    description:
      "SEO, paid, social, and conversion loops that turn traffic into pipeline with attribution you can actually trust.",
    ctaLabel: "Grow pipeline",
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.18)",
  },
];
