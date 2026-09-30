"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  ScrollStackCard,
  StackedScroll,
  scrollToStackIndex,
  useStackedScroll,
} from "@/components/ui/stacked-scroll";
import { services } from "@/data/services";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/types";

const count = services.length;

export function Services() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-charcoal-100 dark:bg-charcoal-900"
    >
      {services.map((service) => (
        <span
          key={service.slug}
          id={`services-${service.slug}`}
          className="pointer-events-none absolute -top-28 block opacity-0"
          aria-hidden
        />
      ))}

      <Container className="pb-8 pt-16 lg:pb-10 lg:pt-24">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-600 dark:text-navy-300"
          >
            <Sparkles className="h-3.5 w-3.5" /> What we do
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            One team across every service line
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-balance text-muted-foreground sm:text-lg"
          >
            Software, mobile, web, automation, marketing, and infrastructure
            designed, built, and supported together.
          </motion.p>
        </motion.div>
      </Container>

      {reduceMotion ? (
        <StaticServiceList />
      ) : (
        <StackedServices />
      )}
    </section>
  );
}

function StackedServices() {
  return (
    <StackedScroll
      count={count}
      header={<StackChrome />}
    >
      {services.map((service, index) => (
        <ScrollStackCard key={service.slug} index={index}>
          <ServiceCardPanel service={service} />
        </ScrollStackCard>
      ))}
    </StackedScroll>
  );
}

function StackChrome() {
  const { count: n, trackRef, activeIndex } = useStackedScroll();
  const reduceMotion = useReducedMotion() ?? false;

  // Deep links: #services-{slug}
  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash;
      if (!raw.startsWith("#services-")) return;
      const slug = raw.replace("#services-", "");
      const found = services.findIndex((s) => s.slug === slug);
      if (found === -1) return;
      scrollToStackIndex(
        trackRef.current,
        found,
        n,
        reduceMotion ? "auto" : "smooth"
      );
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [n, reduceMotion, trackRef]);

  return (
    <div className="sticky top-16 z-20 mx-auto flex max-w-4xl items-center justify-between gap-3 bg-charcoal-100 px-4 py-2.5 dark:bg-charcoal-900 sm:top-[4.5rem] sm:px-6 lg:top-20 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <span className="font-mono text-[11px] font-bold tabular-nums text-navy-600 dark:text-navy-300">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(n).padStart(2, "0")}
        </span>
        <div
          className="hidden min-w-0 items-center gap-2 overflow-x-auto sm:flex"
          role="tablist"
          aria-label="Jump to service"
        >
          {services.map((service, i) => (
            <button
              key={service.slug}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-current={i === activeIndex ? "true" : undefined}
              onClick={() =>
                scrollToStackIndex(trackRef.current, i, n, "smooth")
              }
              className={cn(
                "shrink-0 text-xs font-semibold",
                i === activeIndex
                  ? "text-navy-600 dark:text-navy-300"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {service.shortLabel}
            </button>
          ))}
        </div>
        <span className="truncate text-xs font-semibold text-foreground sm:hidden">
          {services[activeIndex]?.shortLabel}
        </span>
      </div>
      <Link
        href="/services"
        className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-navy-600 dark:text-navy-300"
      >
        View all
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function ServiceCardPanel({
  service,
  className,
}: {
  service: ServiceCategory;
  className?: string;
}) {
  const Icon = service.icon;

  return (
    <article
      className={cn(
        "mx-auto flex max-w-3xl flex-col rounded-2xl border border-border bg-white p-5 shadow-md dark:bg-charcoal-950 sm:p-6",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
          style={{ backgroundColor: service.accent }}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {service.title}
          </h3>
          {service.tagline && (
            <p className="mt-0.5 text-xs font-medium leading-snug text-muted-foreground">
              {service.tagline}
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="mt-4 space-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-2">
        {service.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm font-medium text-foreground/90"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: service.accent }}
            />
            {item}
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        size="md"
        className="mt-6 w-fit"
      >
        Quote for {service.shortLabel}
        <ArrowRight className="h-4 w-4 shrink-0" />
      </Button>
    </article>
  );
}

function StaticServiceList() {
  return (
    <Container className="space-y-6 pb-16 lg:pb-24">
      <div className="flex justify-end">
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-sm font-semibold text-navy-600 dark:text-navy-300"
        >
          View all services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      {services.map((service) => (
        <ServiceCardPanel key={service.slug} service={service} />
      ))}
    </Container>
  );
}
