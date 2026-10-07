export type FaqPart = {
  text: string;
  href?: string;
};

export const faqIntro = {
  eyebrow: "FAQ",
  title: "Questions people ask before they write.",
  lead: "What we do, where we work, and what happens after you get in touch.",
};

export const faq: { question: string; answer: FaqPart[] }[] = [
  {
    question: "What does AirLabs do?",
    answer: [
      {
        text: "AirLabs is one IT company for software, websites, apps, and marketing. Strategy and delivery stay with the same team. ",
      },
      { text: "Read about the company", href: "/about" },
      { text: "." },
    ],
  },
  {
    question: "Which services can you take on?",
    answer: [
      {
        text: "Software, mobile apps, AI automation, web development, digital marketing, and IT infrastructure. You can start with one, or combine them. ",
      },
      { text: "See the services", href: "/services" },
      { text: "." },
    ],
  },
  {
    question: "Where are you based?",
    answer: [
      {
        text: "The office is in the Riyad Bank Building on King Fahd Bin Abdulaziz Rd, Al Khobar. Hours are Saturday to Thursday, 9:00 AM to 6:00 PM. We work with businesses across Saudi Arabia. ",
      },
      { text: "Call, email, or visit", href: "/contact" },
      { text: "." },
    ],
  },
  {
    question: "How does a project start?",
    answer: [
      {
        text: "A working session on the problem, then a written plan with scope, timeline, and cost. Nothing is built until you approve it. After that, you see working software in short cycles, then a launch and a named person for changes. ",
      },
      { text: "Start with a message", href: "/contact" },
      { text: "." },
    ],
  },
  {
    question: "How do you handle security and data?",
    answer: [
      {
        text: "Access and roles are set before feature work piles up. Every release gets a security pass covering authentication, permissions, and the paths data can take. Data is encrypted in transit and at rest, and only the people who need a record can open it. ",
      },
      { text: "More on how we work", href: "/about" },
      { text: "." },
    ],
  },
];

export function faqPlainText(answer: readonly FaqPart[]) {
  return answer.map((part) => part.text).join("");
}
