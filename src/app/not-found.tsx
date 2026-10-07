import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
] as const;

export default function NotFound() {
  return (
    <Section className="!pb-24 !pt-32 md:!pt-40">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600 dark:text-navy-300">
          404
        </p>
        <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          This page is not on the site.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          The link may be old, or the address was typed wrong. These are the
          pages we publish.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              variant={link.href === "/" ? "primary" : "secondary"}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </Container>
    </Section>
  );
}
