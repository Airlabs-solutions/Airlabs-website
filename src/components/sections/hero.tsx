"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Bell } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { EASE, fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const pipelineRows = [
  { label: "Web Development", status: "Active" as const },
  { label: "AI & Automation", status: "Active" as const },
  { label: "Mobile Apps", status: "Queued" as const },
  { label: "Digital Marketing", status: "Queued" as const },
];

export function Hero() {
  const panelRef = useRef<HTMLDivElement>(null);

  // Pointer-driven tilt for the whole hero panel — one composed visual, not scattered icons.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), {
    stiffness: 250,
    damping: 25,
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
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-mesh-navy" aria-hidden />

      {/* Peak/mountain motif accent, echoing the AIR wordmark's "A" */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-[0.05] dark:opacity-[0.08]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <motion.path
          d="M20 160 L100 40 L180 160"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-navy-600 dark:text-navy-300"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
        <motion.path
          d="M55 160 L100 90 L145 160"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-navy-600 dark:text-navy-300"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>

      <Container className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-navy-600 backdrop-blur dark:text-navy-300"
          >
            IT services, engineered for ambitious teams
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            We build the tech behind{" "}
            <span className="bg-gradient-to-r from-navy-600 to-navy-400 bg-clip-text text-transparent dark:from-navy-300 dark:to-navy-500">
              growing businesses
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
          >
            AirLabs Solutions is a full-stack IT partner — web, software,
            mobile, AI automation, digital marketing, and infrastructure —
            under one roof, built to move at startup speed.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact" size="lg">
              Get a Quote
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-14 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div>
              <p className="font-display text-2xl font-bold text-foreground">6</p>
              <p>Service lines</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">40+</p>
              <p>Sub-services</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">1</p>
              <p>Team to call</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Live service panel — one composed, mouse-reactive hero visual */}
        <div className="relative hidden h-[420px] lg:block" aria-hidden>
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-600/10 blur-3xl dark:bg-navy-400/10" />

          <motion.div
            ref={panelRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="absolute left-1/2 top-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2"
          >
            {/* Peeking notification card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 26, y: -18 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
              className="absolute -right-8 -top-10 w-48 animate-float rounded-2xl border border-border bg-background/95 p-3.5 shadow-lg shadow-navy-900/10 backdrop-blur dark:shadow-black/30"
              style={{ animationDuration: "7s" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-600/10 text-navy-600 dark:text-navy-300">
                  <Bell className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-foreground">New inquiry</p>
                  <p className="text-[11px] text-muted-foreground">Mobile app quote</p>
                </div>
              </div>
            </motion.div>

            {/* Main pipeline panel */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              style={{ transform: "translateZ(20px)" }}
              className="relative rounded-3xl border border-border bg-background/95 p-5 shadow-2xl shadow-navy-900/10 backdrop-blur dark:shadow-black/40"
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-medium text-foreground">
                  Service pipeline
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-navy-600 dark:text-navy-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-600 opacity-60 dark:bg-navy-300" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-navy-600 dark:bg-navy-300" />
                  </span>
                  Live
                </span>
              </div>

              <motion.ul
                variants={staggerContainer(0.1, 0.9)}
                initial="hidden"
                animate="show"
                className="mt-3 space-y-2.5"
              >
                {pipelineRows.map((row) => (
                  <motion.li
                    key={row.label}
                    variants={fadeUp}
                    className="flex items-center justify-between rounded-xl bg-surface/60 px-3 py-2.5"
                  >
                    <span className="flex items-center gap-2.5 text-sm text-foreground">
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full",
                          row.status === "Active"
                            ? "bg-navy-600 dark:bg-navy-300"
                            : "bg-charcoal-300 dark:bg-charcoal-600"
                        )}
                      />
                      {row.label}
                    </span>
                    <span
                      className={cn(
                        "text-xs",
                        row.status === "Active"
                          ? "text-navy-600 dark:text-navy-300"
                          : "text-muted-foreground"
                      )}
                    >
                      {row.status}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
