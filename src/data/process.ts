export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  /** What the client walks away with at this step */
  youGet: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "A working session on the problem, who uses the system, and what must be true for it to succeed.",
    youGet: "A written brief you can share with your team.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Scope, timeline, and cost in plain language. Nothing starts until you approve it.",
    youGet: "A plan you can sign off on before build.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Working software in short cycles, with a demo each round so you can correct course early.",
    youGet: "Something you can click, not a status deck.",
  },
  {
    step: "04",
    title: "Launch & support",
    description:
      "Go-live, handover, and a named person to call when something needs a change.",
    youGet: "A system you can run, plus a support path.",
  },
];
