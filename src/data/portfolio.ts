export type PortfolioCategory =
  | "Web"
  | "Software"
  | "Mobile"
  | "AI"
  | "Marketing"
  | "Infrastructure";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  summary: string;
  tags: string[];
}

export const portfolioCategories: PortfolioCategory[] = [
  "Web",
  "Software",
  "Mobile",
  "AI",
  "Marketing",
  "Infrastructure",
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "nova-retail-storefront",
    title: "Nova Retail — E-commerce Storefront",
    category: "Web",
    summary:
      "A Shopify-based storefront rebuild that cut checkout drop-off and doubled mobile conversion.",
    tags: ["Shopify", "Next.js", "Performance"],
  },
  {
    slug: "brightline-ops-platform",
    title: "Brightline — Internal Ops Platform",
    category: "Software",
    summary:
      "Custom business-management software replacing a stack of spreadsheets with one source of truth.",
    tags: ["Custom Software", "API Integration"],
  },
  {
    slug: "vantage-field-app",
    title: "Vantage — Field Service App",
    category: "Mobile",
    summary:
      "A cross-platform app giving field technicians offline-first job tracking and instant sync.",
    tags: ["React Native", "Offline-first"],
  },
  {
    slug: "solstice-support-bot",
    title: "Solstice — WhatsApp Support Automation",
    category: "AI",
    summary:
      "A WhatsApp chatbot handling 70% of tier-1 support volume with human handoff built in.",
    tags: ["Chatbot", "WhatsApp Business API"],
  },
  {
    slug: "pinnacle-growth-engine",
    title: "Pinnacle Group — Growth Engine",
    category: "Marketing",
    summary:
      "SEO + performance marketing program that tripled qualified organic leads in two quarters.",
    tags: ["SEO", "Performance Marketing"],
  },
  {
    slug: "northwind-network-rollout",
    title: "Northwind — Multi-Site Network Rollout",
    category: "Infrastructure",
    summary:
      "Hardware procurement, networking, and CCTV rollout across 12 branch locations.",
    tags: ["Networking", "CCTV", "Procurement"],
  },
];
