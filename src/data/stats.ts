export interface Stat {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years in business" },
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 60, suffix: "+", label: "Clients served" },
  { value: 95.9, suffix: "%", decimals: 1, label: "Uptime SLA" },
];
