export const aboutContent = {
  eyebrow: "About AirLabs",
  title: "We engineer the systems growing businesses actually run on.",
  lead:
    "AirLabs Solutions is a full-stack IT partner for software, mobile, web, AI automation, digital marketing, and infrastructure built as one team so strategy and delivery stay aligned.",
  story: [
    "We started as engineers who were tired of fractured vendor stacks: one agency for the website, another for the app, a third for ads, and nobody owning the outcome. AirLabs exists to close that gap.",
    "Today we design, build, and operate products and platforms for founders and operators who need reliable delivery — not slide decks. From enterprise workflows and CRM integrations to customer-facing apps and growth loops, we treat every engagement as a production system.",
  ],
  mission: {
    title: "Mission",
    body: "Ship durable technology and measurable growth with the clarity of an in-house team — without the overhead of assembling one from scratch.",
  },
  vision: {
    title: "Vision",
    body: "Become the default engineering and growth partner for ambitious companies that want one accountable crew across product, marketing, and infrastructure.",
  },
  values: [
    {
      title: "Clarity over jargon",
      body: "Scope, timelines, and trade-offs in plain language — so you can decide fast.",
    },
    {
      title: "Build for operations",
      body: "We design around how your teams actually work, not how a template assumes they should.",
    },
    {
      title: "Own the outcome",
      body: "From first architecture sketch to live support, we stay accountable after launch.",
    },
    {
      title: "Measure what matters",
      body: "Whether it’s uptime, conversion, or cycle time — we define success before we start.",
    },
  ],
  highlights: [
    { value: "6+", label: "Service lines under one roof" },
    { value: "Full-stack", label: "Product + growth + infra" },
    { value: "24/7", label: "Support-ready delivery mindset" },
  ],
  home: {
    eyebrow: "About us",
    title: "One IT company for software, webapps, apps, and marketing.",
    paragraphs: [
      "AirLabs is a full-stack IT partner software, mobile, web, AI, marketing, and infrastructure, so strategy and delivery stay with one team.",
      "We design, build, and operate products for founders who need reliable delivery. Security and data handling are part of that work, not a checklist added at the end.",
    ],
  },
  security: {
    title: "Security and data",
    lead: "We build software the way operators expect it to run: reviewed before it goes live, with customer data stored under access you can explain.",
    items: [
      {
        key: "build",
        title: "Secure by design",
        body: "Architecture, roles, and dependencies are chosen so the system is hard to misuse from the start.",
        detail:
          "We set access, roles, and dependencies before feature work piles up, so the system is hard to misuse and a later review has something real to inspect.",
      },
      {
        key: "review",
        title: "Reviewed before launch",
        body: "Every release gets a security pass: authentication, permissions, and the paths data can take.",
        detail:
          "Before go-live we review authentication, permissions, and the paths customer data can take. Fixes land in that release, not in a follow-up nobody scheduled.",
      },
      {
        key: "data",
        title: "Data stored with care",
        body: "Data is encrypted in transit and at rest, and only the people who need it can reach it.",
        detail:
          "Customer and business data is encrypted in transit and at rest. Access follows least privilege: the people who need a record can open it, and everyone else cannot. We do not leave data in unmanaged tools or share it casually.",
      },
    ],
  },
} as const;
