export type HeroSlideId = "software" | "mobile" | "ai" | "marketing";

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
    title: "Mobile app development for iOS and Android",
    description:
      "We design and build the apps your customers use, polished UI, smooth 60fps motion, and offline-ready sync, shipped and kept running.",
    ctaLabel: "Launch an app",
    accent: "#c5e14a",
    accentSoft: "rgba(197, 225, 74, 0.22)",
  },
  {
    id: "ai",
    label: "AI",
    title: "AI built into the tools you already use",
    description:
      "We build AI automation into support, operations, and the internal tools your team opens every day, so the busy work happens inside those systems.",
    ctaLabel: "Add AI",
    accent: "#6366f1",
    accentSoft: "rgba(99, 102, 241, 0.18)",
  },
  {
    id: "marketing",
    label: "Marketing",
    title: "Digital marketing you can measure",
    description:
      "SEO, paid, social, and conversion work that turns traffic into leads and growth you can actually measure.",
    ctaLabel: "Grow pipeline",
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.18)",
  },
];
