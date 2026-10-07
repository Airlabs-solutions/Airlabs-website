import { contactDetails } from "@/data/contact";

export const privacyUpdated = "October 2026";

export const privacyIntro =
  "This page describes what AirLabs Solutions collects on this website, why, and how to ask us to delete it. It matches how the site actually works.";

export const privacySections = [
  {
    title: "Who we are",
    paragraphs: [
      `AirLabs Solutions, ${contactDetails.location.line1}, ${contactDetails.location.line2}.`,
      `For anything on this page, email ${contactDetails.email}.`,
    ],
  },
  {
    title: "What the contact form collects",
    paragraphs: [
      "If you send a project inquiry, we receive your name, email, the service you picked, and any company, phone number, and project details you choose to add. Company, phone, and project details are optional.",
      `That message is emailed to ${contactDetails.email} through Resend so we can reply. We do not sell the inquiry, and we do not use it for advertising.`,
    ],
  },
  {
    title: "How long we keep it",
    paragraphs: [
      "We keep the email so we can reply and follow the project. Email us if you want that inquiry deleted, and we will remove it from the inbox we control.",
    ],
  },
  {
    title: "Theme preference",
    paragraphs: [
      "If you switch light or dark mode, the choice is stored in this browser under the name theme. It stays on your device. We do not receive it.",
    ],
  },
  {
    title: "Analytics",
    paragraphs: [
      "If a Google Analytics measurement ID is configured for this site, Google Analytics 4 receives page views, and a lead event when the thank-you page loads after a form is sent. The script does not load until that ID is set. The business-card page is excluded.",
      "Google processes that data under its own terms. We use it to see which pages are used, not to build an advertising profile.",
    ],
  },
  {
    title: "Ask us",
    paragraphs: [
      `To ask what we hold, or to ask us to delete an inquiry, email ${contactDetails.email} or use the contact page.`,
    ],
  },
] as const;
