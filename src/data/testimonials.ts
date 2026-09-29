export type TestimonialVariant = "dark" | "navy" | "white" | "muted" | "soft";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  variant: TestimonialVariant;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "AirLabs built custom software around how our team actually works. In six weeks we replaced a pile of manual steps with one system, and they understood the business not just the request.",
    name: "Sharif",
    role: "Managing Director",
    company: "Mazin Solutions",
    variant: "dark",
  },
  {
    quote:
      "We handed them a mess of spreadsheets and got back a system our ops team actually wants to use. Communication was tight the entire way through.",
    name: "Darshan",
    role: "Founder",
    company: "Brightline",
    variant: "navy",
  },
  {
    quote:
      "WhatsApp now answers most of our everyday customer questions. Replies that used to take hours now take seconds, and when someone still needs a person, the switch is smooth.",
    name: "Priya Nair",
    role: "Customer Experience Lead",
    company: "Solstice",
    variant: "white",
  },
  {
    quote:
      "Hardware, networking, CCTV — twelve sites rolled out on schedule with zero surprises. Having one team accountable for the whole stack made all the difference.",
    name: "Ahmed Hussain",
    role: "Procurement Manager",
    company: "Spectra Engineering",
    variant: "muted",
  },
  {
    quote:
      "Our Android and iOS app went live on time. They didn’t cut corners, and they still pick up when something breaks.",
    name: "Abdul Zaymir",
    role: "CEO",
    company: "Marcazi",
    variant: "soft",
  },
];
