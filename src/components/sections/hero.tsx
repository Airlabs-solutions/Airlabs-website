"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroShowcaseVisual } from "@/components/sections/hero-visuals";
import { heroSlides } from "@/data/hero-slides";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5500;

const textContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const textChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion() ?? false;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const count = heroSlides.length;
  const active = heroSlides[index] ?? heroSlides[0];

  const goTo = useCallback(
    (next: number, dir?: number) => {
      const normalized = ((next % count) + count) % count;
      setDirection(dir ?? (normalized > index ? 1 : -1));
      setIndex(normalized);
    },
    [count, index]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [count, paused, reduceMotion, index]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-background pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      {/* Mesh glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-mesh-navy opacity-70 dark:opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[28rem] w-[28rem] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(14,45,67,0.18) 0%, rgba(10,31,46,0.06) 60%, transparent 80%)",
          filter: "blur(56px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(27,78,113,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.045,
        }}
      />
      {/* Slide accent wash */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full blur-3xl"
        animate={{ backgroundColor: active.accentSoft }}
        transition={{ duration: 0.6 }}
      />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        {/* ── Left: brand + synced copy ─────────────────────────────────── */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="order-1 flex flex-col lg:order-1"
        >
          

          <motion.h1
            variants={textChild}
            className="mt-5 font-display text-[clamp(2.75rem,6.5vw,5rem)] font-semibold leading-[0.95] tracking-tight text-charcoal-900 dark:text-white"
          >
            AIRLabs{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #1B4E71 0%, #2472A8 40%, #81BCE4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SOLUTIONS.
            </span>
          </motion.h1>

          {/* Service pills */}
          <motion.div
            variants={textChild}
            className="mt-6 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Hero service showcase"
          >
            {heroSlides.map((slide, i) => {
              const isActive = i === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                    isActive
                      ? "text-white shadow-md"
                      : "border border-border bg-surface/70 text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                  )}
                  style={
                    isActive
                      ? { backgroundColor: active.accent }
                      : undefined
                  }
                >
                  {isActive && <Check className="h-3.5 w-3.5" />}
                  {slide.label}
                </button>
              );
            })}
          </motion.div>

          <div className="relative mt-5 min-h-[7.5rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {active.title}
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            variants={textChild}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Button href="/contact" size="lg" variant="primary">
              {active.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" size="lg" variant="secondary">
              Explore Services
            </Button>
          </motion.div>

          <motion.p
            variants={textChild}
            className="mt-4 text-xs text-muted-foreground"
          >
            Full-stack IT partner: software, mobile, marketing, and more under
            one roof.
          </motion.p>
        </motion.div>

        {/* ── Right: animated showcase ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="relative order-2 lg:order-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setPaused(false);
            }
          }}
        >
          <div
            className="pointer-events-none absolute -inset-3 rounded-[2rem] opacity-60 blur-2xl transition-colors duration-500 sm:-inset-4"
            style={{ background: active.accentSoft }}
            aria-hidden
          />

          <div className="relative h-[320px] overflow-hidden rounded-[1.75rem] sm:h-[380px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 36 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 * direction }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <HeroShowcaseVisual
                  slideId={active.id}
                  accent={active.accent}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stage controls */}
          <div className="relative z-10 mt-4 flex items-center gap-3">
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous showcase"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-600 text-white transition-colors hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-400"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next showcase"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-600 text-white transition-colors hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-400"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show ${slide.label}`}
                  aria-current={i === index}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className={cn(
                    "h-3 rounded-full transition-all duration-300",
                    i === index ? "w-8" : "w-3 bg-border hover:bg-muted-foreground/40"
                  )}
                  style={i === index ? { backgroundColor: active.accent } : undefined}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
