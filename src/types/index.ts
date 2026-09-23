import type { LucideIcon } from "lucide-react";

export interface ServiceCategory {
  slug: string;
  title: string;
  shortLabel: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  tagline?: string;
  stats?: { value: string; label: string };
  badge?: string;
}

