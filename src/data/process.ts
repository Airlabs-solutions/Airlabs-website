export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dig into your goals, users, and constraints before writing a single line of scope.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture, UX, and a project plan you sign off on — no surprises once build starts.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Agile sprints with regular demos, so you're steering the whole way, not just at the end.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We ship, monitor, and keep improving — support doesn't stop at go-live.",
  },
];
