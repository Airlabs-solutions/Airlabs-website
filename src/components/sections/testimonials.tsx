"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { defaultViewport, fadeUp } from "@/lib/motion";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = setInterval(() => go(index + 1), 7000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const active = testimonials[index];

  return (
    <Section id="testimonials">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-navy-600 dark:text-navy-300">
            What clients say
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Don&apos;t take our word for it
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto h-8 w-8 text-navy-600/30 dark:text-navy-300/30" />

          <div className="relative mt-6 min-h-[220px] overflow-hidden sm:min-h-[180px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.name}
                custom={direction}
                initial={{ opacity: 0, x: 40 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 * direction }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 text-center"
              >
                <p className="text-balance font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold text-foreground">
                  {active.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {active.role}, {active.company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-navy-600 hover:text-navy-600 dark:hover:text-navy-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-navy-600 dark:bg-navy-300" : "w-1.5 bg-border"
                  )}
                />
              ))}
            </div>

            <button
              aria-label="Next testimonial"
              onClick={() => go(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-navy-600 hover:text-navy-600 dark:hover:text-navy-300"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
