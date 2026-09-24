"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
  type Easing,
} from "framer-motion";
import {
  Shield,
  Zap,
  HeadphonesIcon,
  Layers,
  CheckCircle2,
  BarChart2,
  Globe,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";

// ─── Animation Variants (tune from here) ────────────────────────────────────

const textContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const textChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const cardEntrance: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay: 0.55 },
  },
};

const pillEntrance = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay },
  },
});

const EASE_IN_OUT: Easing = "easeInOut";

/** Continuous float loop — each pill gets slightly different params */
const floatLoop = (yRange: number, duration: number) => ({
  y: [0, -yRange, 0],
  transition: {
    duration,
    ease: EASE_IN_OUT,
    repeat: Infinity,
    repeatType: "loop" as const,
  },
});

/** Idle continuous float for the main dashboard card */
const cardFloat = {
  y: [0, -8, 0],
  transition: {
    duration: 5.5,
    ease: EASE_IN_OUT,
    repeat: Infinity,
    repeatType: "loop" as const,
  },
};

// ─── Stat Pill Data ──────────────────────────────────────────────────────────

const pills = [
  {
    id: "uptime",
    icon: Activity,
    label: "80% leads",
    pos: "top-[-24px] left-[-32px] lg:top-[-20px] lg:left-[-52px]",
    floatY: 10,
    floatDuration: 6.2,
    delay: 1.05,
    scale: 1,
  },
  {
    id: "ai",
    icon: Zap,
    label: "AI Integrated",
    pos: "top-[8px] right-[-28px] lg:top-[16px] lg:right-[-60px]",
    floatY: 8,
    floatDuration: 5.8,
    delay: 1.2,
    scale: 0.95,
  },
  {
    id: "support",
    icon: HeadphonesIcon,
    label: "24/7 Support",
    pos: "top-[42%] right-[-40px] lg:right-[-72px]",
    floatY: 12,
    floatDuration: 7.1,
    delay: 1.35,
    scale: 0.92,
  },
  {
    id: "projects",
    icon: Layers,
    label: "500+ Projects",
    pos: "bottom-[-16px] left-[-28px] lg:bottom-[-20px] lg:left-[-60px]",
    floatY: 9,
    floatDuration: 6.6,
    delay: 1.5,
    scale: 0.97,
  },
  {
    id: "soc2",
    icon: Shield,
    label: "SOC 2 Ready",
    pos: "bottom-[10%] right-[-36px] lg:right-[-68px]",
    floatY: 11,
    floatDuration: 5.4,
    delay: 1.65,
    scale: 0.9,
  },
];

// ─── Dashboard Mock Data ─────────────────────────────────────────────────────

const serviceRows = [
  { label: "Web Development", pct: 82, color: "#1B4E71" },
  { label: "AI & Automation", pct: 68, color: "#2472A8" },
  { label: "Mobile Apps", pct: 55, color: "#429AD6" },
  { label: "Digital Marketing", pct: 71, color: "#81BCE4" },
];

const metrics = [
  { label: "Active Projects", value: "24", icon: Globe },
  { label: "Team Members", value: "12", icon: Users },
  { label: "Avg. Rating", value: "4.9", icon: CheckCircle2 },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function Hero() {
  const panelRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 180,
    damping: 22,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* ── Background Layer ─────────────────────────────────────────────── */}

      {/* Base background */}
      <div className="absolute inset-0 bg-white dark:bg-charcoal-950" />

      {/* Primary ambient blob: navy, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(27,78,113,0.22) 0%, rgba(26,26,26,0.08) 55%, transparent 75%)",
          filter: "blur(72px)",
        }}
      />

      {/* Secondary blob: lighter sky-navy tint, bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(66,154,214,0.15) 0%, rgba(129,188,228,0.06) 55%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* Tertiary deep-navy blob behind card area, center-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[15%] -translate-y-1/2 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(14,45,67,0.18) 0%, rgba(10,31,46,0.06) 60%, transparent 80%)",
          filter: "blur(56px)",
        }}
      />

      {/* Dot-grid texture overlay — ~5% opacity for "technical" feel */}
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

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <Container className="relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">

        {/* ── Left: Text Column ──────────────────────────────────────────── */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <motion.span
            variants={textChild}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-navy-200 bg-navy-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-navy-600 backdrop-blur-sm dark:border-navy-700 dark:bg-navy-900/40 dark:text-navy-300"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-navy-600" />
            </span>
            Engineering your next
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={textChild}
            className="mt-5 font-display text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-charcoal-900 dark:text-white"
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

          {/* Sub-headline */}
          <motion.p
            variants={textChild}
            className="mt-2 font-display text-[clamp(1.25rem,2.5vw,1.8rem)] font-bold leading-tight text-charcoal-600 dark:text-charcoal-300"
          >
            Software that scales with you.
          </motion.p>

          {/* Body copy */}
          <motion.p
            variants={textChild}
            className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-500 dark:text-charcoal-400"
          >
            AirLabs Solutions is your full-stack IT partner — web development,
            custom software, mobile apps, AI automation, digital marketing, and
            IT infrastructure — all under one roof, built to move at startup
            speed.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={textChild}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" size="lg" variant="primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#services" size="lg" variant="secondary">
              Explore Services
            </Button>
          </motion.div>

          {/* Micro-stats */}
          <motion.div
            variants={textChild}
            className="mt-10 flex items-center gap-7 text-sm"
          >
            {[
              { num: "6", desc: "Service lines" },
              { num: "40+", desc: "Sub-services" },
              { num: "500+", desc: "Projects" },
            ].map((s, i) => (
              <div key={s.desc} className="flex items-center gap-7">
                {i > 0 && (
                  <div className="h-7 w-px bg-charcoal-200 dark:bg-charcoal-700" />
                )}
                <div>
                  <p className="font-display text-2xl font-bold text-charcoal-900 dark:text-white">
                    {s.num}
                  </p>
                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: 3D Card Visual ─────────────────────────────────────── */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-[420px] w-full max-w-[400px] lg:h-[500px]">

            {/* ── Floating Stat Pills (desktop only) ───────────────────── */}
            {pills.map((pill) => {
              const Icon = pill.icon;
              return (
                <motion.div
                  key={pill.id}
                  variants={pillEntrance(pill.delay)}
                  initial="hidden"
                  animate="show"
                  whileHover={{ scale: 1.05 }}
                  style={{ scale: pill.scale }}
                  className={`absolute z-20 hidden lg:flex ${pill.pos}`}
                >
                  <motion.div
                    animate={floatLoop(pill.floatY, pill.floatDuration)}
                    className="flex items-center gap-2 rounded-full border border-navy-100 bg-white/95 px-3.5 py-2 shadow-[0_4px_20px_-4px_rgba(27,78,113,0.22),0_1px_4px_0_rgba(27,78,113,0.1)] backdrop-blur-sm dark:border-navy-700 dark:bg-charcoal-900/90 dark:shadow-[0_4px_20px_-4px_rgba(10,31,46,0.5)]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-600/10 text-navy-600 dark:text-navy-300">
                      <Icon className="h-3 w-3" />
                    </span>
                    <span className="whitespace-nowrap text-xs font-semibold text-charcoal-800 dark:text-charcoal-100">
                      {pill.label}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* ── Main Dashboard Card ───────────────────────────────────── */}
            {/*
             * FAKE-3D: perspective + rotateX/Y on mouse move gives isometric tilt.
             * Box-shadow has 5 layers, all navy-tinted, to simulate physical depth.
             * A specular shimmer overlay fakes a light-source reflection.
             */}
            <motion.div
              ref={panelRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              variants={cardEntrance}
              initial="hidden"
              animate="show"
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1100,
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0"
            >
              <motion.div animate={cardFloat} className="h-full w-full">
                <div
                  className="relative h-full w-full overflow-hidden rounded-3xl border border-navy-100/60 bg-white/95 backdrop-blur-md dark:border-navy-800/60 dark:bg-charcoal-900/90"
                  style={{
                    boxShadow: `
                      0 0 0 1px rgba(27,78,113,0.06),
                      0 4px 8px -2px rgba(27,78,113,0.12),
                      0 16px 32px -8px rgba(27,78,113,0.18),
                      0 40px 80px -20px rgba(14,45,67,0.24),
                      0 80px 120px -40px rgba(10,31,46,0.12)
                    `,
                  }}
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 border-b border-charcoal-100 bg-charcoal-50/80 px-4 py-3 dark:border-charcoal-800 dark:bg-charcoal-950/60">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                    <div className="mx-3 flex-1 rounded-md bg-charcoal-200/80 px-3 py-1 dark:bg-charcoal-700/60">
                      <p className="text-[10px] text-charcoal-400 dark:text-charcoal-500">
                        dashboard.airlabs.io
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-navy-500 dark:text-navy-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-500 opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-navy-500" />
                      </span>
                      Live
                    </span>
                  </div>

                  {/* Dashboard body */}
                  <div className="flex h-[calc(100%-41px)]">
                    {/* Sidebar — slightly darker = "recessed" depth cue */}
                    <nav className="flex w-14 flex-col items-center gap-3 border-r border-charcoal-100 bg-charcoal-50/60 py-4 dark:border-charcoal-800 dark:bg-charcoal-950/40">
                      {[Globe, BarChart2, Layers, Users, Activity].map(
                        (Icon, i) => (
                          <button
                            key={i}
                            aria-label={`nav-item-${i}`}
                            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                              i === 1
                                ? "bg-navy-600 text-white shadow-md shadow-navy-600/40"
                                : "text-charcoal-400 hover:bg-charcoal-100 dark:hover:bg-charcoal-800"
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </button>
                        )
                      )}
                    </nav>

                    {/* Main content panel */}
                    <div className="flex flex-1 flex-col gap-3 overflow-hidden p-4">
                      {/* Metric chips */}
                      <div className="grid grid-cols-3 gap-2">
                        {metrics.map(({ label, value, icon: MIcon }) => (
                          <div
                            key={label}
                            className="flex flex-col gap-0.5 rounded-xl border border-charcoal-100 bg-white px-2.5 py-2 dark:border-charcoal-800 dark:bg-charcoal-900"
                            style={{
                              boxShadow:
                                "0 1px 3px rgba(27,78,113,0.06), 0 4px 12px -4px rgba(27,78,113,0.08)",
                            }}
                          >
                            <MIcon className="h-3 w-3 text-navy-500 dark:text-navy-400" />
                            <p className="font-display text-base font-bold text-charcoal-900 dark:text-white">
                              {value}
                            </p>
                            <p className="text-[9px] leading-none text-charcoal-400">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Chart header */}
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold text-charcoal-700 dark:text-charcoal-200">
                          Service Activity
                        </p>
                        <span className="rounded-full bg-navy-50 px-2 py-0.5 text-[9px] font-medium text-navy-600 dark:bg-navy-900/40 dark:text-navy-300">
                          This month
                        </span>
                      </div>

                      {/* Progress bar chart */}
                      <div className="flex flex-1 flex-col justify-between gap-1.5">
                        {serviceRows.map((row) => (
                          <div key={row.label}>
                            <div className="mb-0.5 flex items-center justify-between">
                              <span className="text-[9px] text-charcoal-500 dark:text-charcoal-400">
                                {row.label}
                              </span>
                              <span className="text-[9px] font-semibold text-charcoal-700 dark:text-charcoal-200">
                                {row.pct}%
                              </span>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-charcoal-100 dark:bg-charcoal-800">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${row.pct}%` }}
                                transition={{
                                  duration: 1.1,
                                  delay: 0.9,
                                  ease: EASE,
                                }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: row.color }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Status strip */}
                      <div className="flex items-center justify-between rounded-xl border border-navy-100/60 bg-navy-50/60 px-3 py-2 dark:border-navy-800/40 dark:bg-navy-900/30">
                        <span className="text-[10px] font-medium text-navy-700 dark:text-navy-300">
                          All systems operational
                        </span>
                        <CheckCircle2 className="h-3 w-3 text-navy-600 dark:text-navy-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specular highlight overlay — fakes surface light reflection */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 45%, rgba(27,78,113,0.04) 100%)",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Mobile pill strip — 3 pills shown inline below card */}
            <div className="absolute -bottom-14 left-0 right-0 flex flex-wrap justify-center gap-2 lg:hidden">
              {pills.slice(0, 3).map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.id}
                    className="flex items-center gap-1.5 rounded-full border border-navy-100 bg-white/95 px-3 py-1.5 shadow-sm dark:border-navy-700 dark:bg-charcoal-900/90"
                  >
                    <Icon className="h-3 w-3 text-navy-600 dark:text-navy-300" />
                    <span className="text-xs font-semibold text-charcoal-800 dark:text-charcoal-100">
                      {pill.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom edge fade to blend with next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}

export default Hero;
