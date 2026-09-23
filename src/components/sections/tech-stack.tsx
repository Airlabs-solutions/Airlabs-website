"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { techStack } from "@/data/tech-stack";
import { defaultViewport, fadeUp } from "@/lib/motion";

const half = Math.ceil(techStack.length / 2);
const rows = [techStack.slice(0, half), techStack.slice(half)];

export function TechStack() {
  return (
    <Section className="bg-surface/40">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-navy-600 dark:text-navy-300">
            Our stack
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tools we build with
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="relative mx-auto mt-14 max-w-4xl space-y-4"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

          {rows.map((row, i) => {
            const track = [...row, ...row];
            return (
              <div key={i} className="overflow-hidden">
                <div
                  className="flex w-max items-center gap-4 animate-marquee [animation-play-state:running] hover:[animation-play-state:paused]"
                  style={{
                    animationDirection: i === 1 ? "reverse" : "normal",
                    animationDuration: i === 1 ? "34s" : "28s",
                  }}
                >
                  {track.map(({ name, icon: Icon }, j) => (
                    <div
                      key={`${name}-${j}`}
                      className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-background px-5 py-3 transition-colors hover:border-navy-600/40"
                    >
                      <Icon className="h-5 w-5 text-foreground/70" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
