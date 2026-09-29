"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to build, launch, and grow — under one roof."
        lead="Deep capability across software, mobile, AI automation, web, digital marketing, and infrastructure. Pick a lane or combine them; we stay accountable end to end."
      />

      <Section className="!pt-12 md:!pt-16">
        <Container>
          {/* Jump links */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-8">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                {service.shortLabel}
              </a>
            ))}
          </div>

          <div className="mt-4 divide-y divide-border">
            {services.map((service, index) => (
              <motion.article
                key={service.slug}
                id={service.slug}
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={defaultViewport}
                className="scroll-mt-28 grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
              >
                <div>
                  <motion.div variants={fadeUp} className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: service.accent }}
                    >
                      <service.icon className="h-5 w-5" />
                    </span>
                    {service.badge && (
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"
                        style={{ backgroundColor: service.accent }}
                      >
                        {service.badge}
                      </span>
                    )}
                  </motion.div>

                  <motion.h2
                    variants={fadeUp}
                    className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                  >
                    {service.title}
                  </motion.h2>
                  {service.tagline && (
                    <motion.p
                      variants={fadeUp}
                      className="mt-2 text-sm font-medium"
                      style={{ color: service.accent }}
                    >
                      {service.tagline}
                    </motion.p>
                  )}
                  <motion.p
                    variants={fadeUp}
                    className="mt-4 text-base leading-relaxed text-muted-foreground"
                  >
                    {service.longDescription}
                  </motion.p>

                  {service.stats && (
                    <motion.div
                      variants={fadeUp}
                      className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-border bg-surface/50 px-4 py-3"
                    >
                      <span
                        className="font-display text-2xl font-semibold"
                        style={{ color: service.accent }}
                      >
                        {service.stats.value}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {service.stats.label}
                      </span>
                    </motion.div>
                  )}
                </div>

                <div className="space-y-6">
                  <motion.div variants={fadeUp}>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                      What we deliver
                    </h3>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: service.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                      Outcomes
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {service.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            )}
                            style={{ backgroundColor: service.accent }}
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Button href="/contact" size="md" variant="secondary">
                      Ask about {service.shortLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>

                {index < services.length - 1 && (
                  <span className="sr-only">Next service</span>
                )}
              </motion.article>
            ))}
          </div>

          <div className="mt-4 rounded-3xl border border-border bg-gradient-to-br from-navy-700 via-navy-800 to-charcoal-900 px-8 py-12 text-center sm:px-12">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Need more than one service line?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
              Most clients combine product, growth, and infrastructure. We scope
              it as one engagement so ownership stays clear.
            </p>
            <Button
              href="/contact"
              size="lg"
              className="mt-7 bg-white text-navy-800 hover:bg-white/90"
            >
              Get a Quote
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
