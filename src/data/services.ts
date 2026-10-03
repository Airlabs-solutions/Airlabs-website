import {
  Code2,
  Cpu,
  Smartphone,
  Workflow,
  Megaphone,
  Server,
} from "lucide-react";
import type { ServiceCategory } from "@/types";

export const services: ServiceCategory[] = [
  {
    slug: "software-development",
    title: "Software Development",
    shortLabel: "Software",
    tagline: "Mission-critical architectures engineered for scale and reliability.",
    badge: "Enterprise Ready",
    stats: { value: "99.99%", label: "System Availability" },
    description:
      "Custom software and enterprise systems engineered around how your business actually operates.",
    longDescription:
      "We design and ship custom software that mirrors your operations ERPs, CRMs, internal tools, and API platforms — so teams stop fighting spreadsheets and start running on systems that scale. From discovery and architecture through hardening and handover, we build for uptime, auditability, and the way your people work day to day.",
    outcomes: [
      "Purpose-built workflows instead of forced SaaS compromises",
      "Clean APIs and integrations across your existing stack",
      "Production-grade reliability, roles, and observability",
      "Security review before launch, with data encrypted and access limited to the people who need it",
    ],
    accent: "#0d9488",
    icon: Server,
    items: [
      "Custom Software Development",
      "Business Management Software",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Third-Party System Integrations",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortLabel: "Mobile",
    tagline: "Silky 60fps native & cross-platform apps that users love.",
    badge: "iOS & Android",
    stats: { value: "4.9★", label: "Average App Rating" },
    description:
      "Native and cross-platform apps with polished UI/UX, shipped to iOS and Android and kept running.",
    longDescription:
      "From consumer products to field-ops tools, we build mobile apps that feel native, stay fast offline, and keep syncing when connectivity returns. We cover product design, iOS/Android or cross-platform builds, store submission, and ongoing maintenance so your app doesn’t stall after launch day.",
    outcomes: [
      "Polished UI/UX with smooth, production-ready motion",
      "Reliable offline behavior and cloud sync",
      "Post-launch support, updates, and store compliance",
    ],
    accent: "#c5e14a",
    icon: Smartphone,
    items: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform App Development",
      "Mobile App UI/UX Development",
      "App Maintenance & Support",
    ],
  },
  {
    slug: "automation-ai",
    title: "Automation & AI Solutions",
    shortLabel: "AI & Automation",
    tagline: "Autonomous workflows and intelligent assistants working 24/7.",
    badge: "Next-Gen AI",
    stats: { value: "10x", label: "Workflow Efficiency Gain" },
    description:
      "Automate the busywork and put AI to work across support, operations, and your CRM.",
    longDescription:
      "We connect the tools you already use and layer automation and AI where it removes real friction — WhatsApp and chat support, lead routing, CRM hygiene, approvals, and back-office workflows. The goal isn’t novelty demos; it’s fewer handoffs, faster cycle times, and assistants that stay grounded in your data.",
    outcomes: [
      "Repeatable workflows that run without constant babysitting",
      "Chat and messaging bots tied to real business systems",
      "AI features that augment teams instead of creating noise",
    ],
    accent: "#6366f1",
    icon: Cpu,
    items: [
      "WhatsApp Business Automation",
      "Chatbot Development",
      "Business Process Automation",
      "Workflow Automation",
      "AI Integration",
      "AI-Powered Business Solutions",
      "CRM & System Automation",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortLabel: "Web",
    tagline: "Sub-second load times with pixel-perfect responsive execution.",
    badge: "High Performance",
    stats: { value: "<0.8s", label: "First Contentful Paint" },
    description:
      "Fast, scalable websites and web apps built for growth — from marketing sites to custom platforms.",
    longDescription:
      "Marketing sites, e-commerce, and custom web apps — built for speed, SEO, and conversion. We ship responsive interfaces, CMS or headless setups, Shopify storefronts, and application UIs that stay maintainable as your traffic and catalog grow.",
    outcomes: [
      "Fast Core Web Vitals and mobile-first layouts",
      "Storefronts and platforms ready for real traffic",
      "Clean codebases your team can extend later",
    ],
    accent: "#0284c7",
    icon: Code2,
    items: [
      "Static Website Development",
      "Dynamic Website Development",
      "E-commerce Website Development",
      "Shopify Website Development",
      "Custom Web Applications",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortLabel: "Marketing",
    tagline: "Predictable customer acquisition engines with closed-loop attribution.",
    badge: "ROI Driven",
    stats: { value: "3.8x", label: "Average ROAS Multiplier" },
    description:
      "Get found, get traffic, get customers — SEO, paid, social, and conversion optimization in one loop.",
    longDescription:
      "We build acquisition systems, not one-off campaigns: SEO and GEO for durable demand, paid and social for controlled tests, creative that matches the funnel stage, and conversion work so traffic becomes pipeline. Attribution stays honest so you know what to scale — and what to cut.",
    outcomes: [
      "Search and social presence that compounds over time",
      "Paid spend tied to leads and revenue, not vanity metrics",
      "Landing and funnel optimization that improves conversion",
    ],
    accent: "#f59e0b",
    icon: Megaphone,
    items: [
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "Social Media Marketing",
      "Social Media Content Creation",
      "Performance Marketing",
      "Digital Advertising",
      "Lead Generation & Conversion Optimization",
    ],
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure & Hardware Solutions",
    shortLabel: "Infrastructure",
    tagline: "Bulletproof networking, physical security, and turnkey hardware provisioning.",
    badge: "Zero Downtime",
    stats: { value: "24/7", label: "Active Monitoring" },
    description:
      "The physical and network backbone — hardware, licensing, networking, and security, sourced and set up.",
    longDescription:
      "Software only works when the floor beneath it is solid. We source and configure workstations, licensing, networking and telecom gear, CCTV, and smart-office systems — then leave you with a documented, supportable setup instead of a pile of boxes and unanswered questions.",
    outcomes: [
      "Right-sized hardware and licensing for your team",
      "Secure networks and surveillance that actually cover the site",
      "Turnkey install with clear handover documentation",
    ],
    accent: "#64748b",
    icon: Workflow,
    items: [
      "IT Hardware Supply & Procurement (Desktops, Laptops & Workstations)",
      "Enterprise Software Licensing & Setup",
      "Network & Telecom Gear (Routers, Switches & Access Points)",
      "CCTV & Surveillance Systems",
      "Smart Office & Automation Systems",
    ],
  },
];
