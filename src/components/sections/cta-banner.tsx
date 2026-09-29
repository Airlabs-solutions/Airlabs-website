"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

export function CTABanner() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 via-navy-800 to-charcoal-900 px-8 py-20 text-center sm:px-16"
        >
          <svg
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-full w-[160%] -translate-x-1/2 opacity-[0.06]"
            viewBox="0 0 200 100"
            fill="none"
          >
            <path d="M0 100 L50 20 L100 100" stroke="white" strokeWidth="1" />
            <path d="M100 100 L150 20 L200 100" stroke="white" strokeWidth="1" />
          </svg>

          <motion.h2
            variants={fadeUp}
            className="relative text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Have a project in mind? Let&apos;s build it.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-4 max-w-xl text-balance text-white/70"
          >
            Tell us what you&apos;re trying to solve — we&apos;ll come back
            with a plan, a timeline, and a straight answer on scope.
          </motion.p>
          <motion.div variants={fadeUp} className="relative mt-8">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-navy-800 hover:bg-white/90"
            >
              Get a Quote
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
