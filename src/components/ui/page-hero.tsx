import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-border bg-background pb-16 pt-28 sm:pb-20 sm:pt-32",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-mesh-navy opacity-60 dark:opacity-35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-navy-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-teal-500/10 blur-3xl"
      />
      <Container className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600 dark:text-navy-300">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
      </Container>
    </div>
  );
}
