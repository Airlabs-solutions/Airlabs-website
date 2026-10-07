import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Message received",
  description:
    "We received your message and will reply within one business day.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: "/contact/thanks" },
  openGraph: {
    title: "Message received — AirLabs Solutions",
    description:
      "We received your message and will reply within one business day.",
    url: "/contact/thanks",
  },
  twitter: {
    card: "summary",
    title: "Message received — AirLabs Solutions",
    description:
      "We received your message and will reply within one business day.",
  },
};

export default function ThanksPage() {
  return (
    <Section className="!pb-24 !pt-32 md:!pt-40">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600 dark:text-navy-300">
          Contact
        </p>
        <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Message received
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Thanks. We&apos;ll review what you shared and get back within one
          business day.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Home</Button>
          <Button href="/services" variant="secondary">
            Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
