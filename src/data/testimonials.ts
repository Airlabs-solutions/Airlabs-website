export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "AirLabs rebuilt our storefront in six weeks and mobile conversion doubled within the first month. They actually understood the business, not just the brief.",
    name: "Sarah Chen",
    role: "Head of Growth",
    company: "Nova Retail",
  },
  {
    quote:
      "We handed them a mess of spreadsheets and got back a system our ops team actually wants to use. Communication was tight the entire way through.",
    name: "Marcus Webb",
    role: "COO",
    company: "Brightline",
  },
  {
    quote:
      "The WhatsApp automation now handles most of our tier-1 tickets. Support response time dropped from hours to seconds, and the handoff to humans feels seamless.",
    name: "Priya Nair",
    role: "Customer Experience Lead",
    company: "Solstice",
  },
  {
    quote:
      "Hardware, networking, CCTV — twelve sites rolled out on schedule with zero surprises. Having one team accountable for the whole stack made all the difference.",
    name: "Daniel Osei",
    role: "IT Director",
    company: "Northwind",
  },
];
