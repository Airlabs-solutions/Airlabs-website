"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ServiceVisual } from "@/components/sections/service-visual";
import { services } from "@/data/services";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileTabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const count = services.length;

  // Track scroll progress across the sticky container track (active on both mobile & desktop)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0 -> 1 progress to 0 -> (count - 1)
    const idx = Math.min(count - 1, Math.max(0, Math.floor(latest * count)));
    if (idx !== activeIndex) {
      setActiveIndex(idx);
      // Auto-scroll active mobile pill into view if needed
      mobileTabRefs.current[idx]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  });

  const selectService = useCallback(
    (index: number, shouldScroll = true) => {
      setActiveIndex(index);
      mobileTabRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });

      if (shouldScroll && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const topOffset = window.scrollY + rect.top;
        const scrollableHeight = containerRef.current.offsetHeight - window.innerHeight;
        if (scrollableHeight > 0) {
          const targetScroll = topOffset + (index / (count - 1)) * scrollableHeight;
          window.scrollTo({ top: targetScroll, behavior: "smooth" });
        }
      }
    },
    [count]
  );

  // Handle hash changes (e.g. from navbar dropdown links like #services-web-development)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#services-", "");
      if (!hash) return;
      const foundIndex = services.findIndex((s) => s.slug === hash);
      if (foundIndex !== -1) {
        selectService(foundIndex, false);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [selectService]);

  const activeService = services[activeIndex] ?? services[0];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="relative bg-background py-16 lg:py-24">
      {/* Hidden anchor points for deep links */}
      {services.map((service) => (
        <span
          key={service.slug}
          id={`services-${service.slug}`}
          className="pointer-events-none absolute -top-28 block opacity-0"
          aria-hidden
        />
      ))}

      <Container>
        {/* Section Header */}
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
            className="mt-4 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Six service lines, one accountable team
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-balance text-muted-foreground sm:text-lg"
          >
            From first pixel to production infrastructure. Scroll to explore or select a category below.
          </motion.p>
        </motion.div>
      </Container>

      {/* Sticky Scrollytelling Track (Mobile & Desktop) */}
      <div
        ref={containerRef}
        className="relative mt-8 sm:mt-12"
        style={{ height: `${count * 75}vh` }}
      >
        <div className="sticky top-16 sm:top-20 flex min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100vh-5rem)] items-center py-3 sm:py-6">
          <Container className="w-full">
            {/* Category Navigation Bar (Pill Tabs) */}
            <div className="mb-4 sm:mb-8 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.slug}
                    ref={(el) => {
                      mobileTabRefs.current[index] = el;
                    }}
                    type="button"
                    onClick={() => selectService(index)}
                    className={cn(
                      "relative flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold transition-colors duration-200",
                      isActive
                        ? "text-white"
                        : "border border-border/80 bg-surface/60 text-muted-foreground hover:bg-surface hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceTabPill"
                        className="absolute inset-0 rounded-full bg-navy-600 shadow-md shadow-navy-600/30 dark:bg-navy-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon className="relative z-10 h-3.5 w-3.5" />
                    <span className="relative z-10">{service.shortLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Stage (Large screens: 2 columns) */}
            <div className="hidden lg:grid grid-cols-12 gap-8 items-center rounded-3xl border border-border bg-surface/30 p-8 shadow-xl backdrop-blur">
              {/* Left Column: Active Service Details */}
              <div className="col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-navy-600/10 px-3 py-1 font-mono text-xs font-bold text-navy-600 dark:text-navy-300">
                      0{activeIndex + 1} / 0{count}
                    </span>
                    {activeService.badge && (
                      <span className="rounded-full border border-border bg-background px-3 py-0.5 text-xs font-medium text-muted-foreground">
                        {activeService.badge}
                      </span>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.slug}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.3 }}
                      className="mt-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white shadow-md dark:from-navy-400 dark:to-navy-600">
                          <ActiveIcon className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                            {activeService.title}
                          </h3>
                          {activeService.tagline && (
                            <p className="text-xs font-medium text-navy-600 dark:text-navy-300">
                              {activeService.tagline}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {activeService.description}
                      </p>

                      {/* Sub-services Checklist */}
                      <div className="mt-6 border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Capabilities &amp; Scope
                        </p>
                        <ul className="mt-3 space-y-2">
                          {activeService.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs font-medium text-foreground/90"
                            >
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-600 dark:text-navy-300" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Call to action & progress bar */}
                <div className="border-t border-border pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <Button href="#contact" size="md" className="group">
                      <span>Get a Quote for {activeService.shortLabel}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                    {activeService.stats && (
                      <div className="text-right">
                        <p className="font-display text-lg font-bold text-foreground">
                          {activeService.stats.value}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {activeService.stats.label}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Interactive Showcase */}
              <div className="col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.slug}
                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    <ServiceVisual service={activeService} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile & Tablet Stage (Screens < lg: Sticky Scrollytelling Card) */}
            <div className="lg:hidden rounded-2xl border border-border bg-surface/40 p-4 sm:p-6 shadow-xl backdrop-blur">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3.5"
                >
                  {/* Top Bar: Counter & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-navy-600 dark:text-navy-300">
                        0{activeIndex + 1} / 0{count}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs font-semibold text-foreground truncate max-w-[180px]">
                        {activeService.title}
                      </span>
                    </div>
                    {activeService.badge && (
                      <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {activeService.badge}
                      </span>
                    )}
                  </div>

                  {/* Visual Showcase (Adaptive Mobile Sizing) */}
                  <div className="overflow-hidden rounded-xl">
                    <ServiceVisual service={activeService} />
                  </div>

                  {/* Value Line & Top Capability Tags */}
                  <div className="space-y-1.5">
                    {activeService.tagline && (
                      <p className="text-xs font-medium text-navy-600 dark:text-navy-300">
                        {activeService.tagline}
                      </p>
                    )}
                    <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-2">
                      {activeService.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {activeService.items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1 rounded-md border border-border bg-background/80 px-2 py-0.5 text-[10px] text-foreground/80"
                        >
                          <Check className="h-3 w-3 text-navy-600 dark:text-navy-300" />
                          {item}
                        </span>
                      ))}
                      {activeService.items.length > 3 && (
                        <span className="inline-flex items-center rounded-md border border-border bg-background/60 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                          +{activeService.items.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Mobile Action Bar */}
                  <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
                    <Button href="#contact" size="md" className="flex-1 text-xs">
                      Get a Quote
                    </Button>
                    {activeService.stats && (
                      <div className="shrink-0 text-right">
                        <p className="font-display text-sm font-bold text-foreground">
                          {activeService.stats.value}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {activeService.stats.label}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
