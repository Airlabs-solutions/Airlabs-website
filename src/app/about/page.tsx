"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/data/about";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        lead={aboutContent.lead}
      />

      <Section className="!pt-16 md:!pt-20">
        <Container>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={defaultViewport}
            className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
          >
            <div>
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Our story
              </motion.h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {aboutContent.story.map((paragraph) => (
                  <motion.p key={paragraph.slice(0, 24)} variants={fadeUp}>
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            <motion.div variants={fadeUp} className="grid gap-3 self-start">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-surface/60 p-5"
                >
                  <p className="font-display text-2xl font-semibold text-navy-700 dark:text-navy-300">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface/40 !py-20 md:!py-24">
        <Container>
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={defaultViewport}
            className="grid gap-6 md:grid-cols-2"
          >
            {[aboutContent.mission, aboutContent.vision].map((block) => (
              <motion.div
                key={block.title}
                variants={fadeUp}
                className="rounded-3xl border border-border bg-background p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
                  {block.title}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  {block.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={defaultViewport}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              How we work
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-2xl text-muted-foreground"
            >
              A few principles that show up in every engagement — whether we&apos;re
              shipping software, a mobile product, or a growth system.
            </motion.p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {aboutContent.values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="flex gap-4 rounded-2xl border border-border bg-background p-6"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-600/10 text-navy-700 dark:text-navy-300">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Talk to us
              </Button>
              <Button href="/services" size="lg" variant="secondary">
                Explore services
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
