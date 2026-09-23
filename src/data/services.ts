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

