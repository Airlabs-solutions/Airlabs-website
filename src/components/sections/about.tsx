"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardCheck, LockKeyhole, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { aboutContent } from "@/data/about";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const securityIcons = {
  build: ShieldCheck,
  review: ClipboardCheck,
  data: LockKeyhole,
} as const;

export function About() {
  return (
    <Section id="about">
      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="grid items-center gap-12 lg:grid-cols-[24rem_1fr] lg:gap-16"
        >
          <motion.div
            variants={fadeUp}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-border lg:max-w-none"
          >
            <Image
              src="/about/studio.webp"
              alt="Engineers working together in the AirLabs studio"
              fill
              sizes="384px"
              className="object-cover"
            />
          </motion.div>

          <motion.div variants={staggerContainer(0.08)}>
            <motion.span
              variants={fadeUp}
              className="text-xs font-medium uppercase tracking-wider text-navy-600 dark:text-navy-300"
            >
              {aboutContent.home.eyebrow}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              {aboutContent.home.title}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground"
            >
              {aboutContent.home.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-8 divide-y divide-border border-y border-border"
            >
              {aboutContent.security.items.map((item) => {
                const Icon = securityIcons[item.key];
                return (
                  <li key={item.key} className="flex gap-4 py-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-600/10 text-navy-700 dark:text-navy-300">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button href="/about" size="lg">
                About us
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Talk to us
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
