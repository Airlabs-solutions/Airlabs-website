"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/data/stats";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

export function Stats() {
  return (
    <section className="bg-charcoal-900 py-20 text-white dark:bg-charcoal-950">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="grid grid-cols-2 gap-10 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <p className="font-display text-4xl font-semibold sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
