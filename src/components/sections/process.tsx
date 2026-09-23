"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { processSteps } from "@/data/process";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="process" className="bg-surface/40">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-wider text-navy-600 dark:text-navy-300"
          >
            How we work
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            A process built for momentum
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          variants={staggerContainer(0.15)}
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connector line, grows in from the left */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              show: { scaleX: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
            }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
          />

          {/* Traveling pulse along the connector, once it's drawn in */}
          {!reduceMotion && (
            <motion.div
              aria-hidden
              className="absolute top-6 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-600 shadow-[0_0_12px_2px_rgba(27,78,113,0.5)] lg:block dark:bg-navy-300 dark:shadow-[0_0_12px_2px_rgba(66,154,214,0.5)]"
              style={{ left: "0%" }}
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.4,
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 1.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          )}

          {processSteps.map((step) => (
            <motion.div key={step.step} variants={fadeUp} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy-600 bg-background font-display text-sm font-bold text-navy-600 dark:border-navy-300 dark:text-navy-300">
                {step.step}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
