import type { LucideIcon } from "lucide-react";

export interface ServiceCategory {
  slug: string;
  title: string;
  shortLabel: string;
  description: string;
  /** Longer copy used on the dedicated Services page */
  longDescription: string;
  outcomes: string[];
  icon: LucideIcon;
  items: string[];
  tagline?: string;
  stats?: { value: string; label: string };
  badge?: string;
  /** Accent for service detail cards (hex) */
  accent: string;
}

