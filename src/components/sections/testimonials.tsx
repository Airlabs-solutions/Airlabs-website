"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  testimonials,
  type Testimonial,
  type TestimonialVariant,
} from "@/data/testimonials";
import { defaultViewport, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type BloomPose = { x: number; y: number; rotate: number };

/** Stacked deck offsets (progress = 0) */
const STACKED: BloomPose[] = [
  { x: -6, y: 8, rotate: -4 },
  { x: 4, y: -4, rotate: 3 },
  { x: -2, y: 2, rotate: -1 },
  { x: 8, y: -6, rotate: 5 },
  { x: 0, y: 0, rotate: 0 },
];

/**
 * Bloomed positions — spread far enough that cards barely overlap
 * so every quote stays readable.
 * Order: dark, navy, white, muted, soft
 */
const BLOOM_DESKTOP: BloomPose[] = [
  { x: -440, y: -55, rotate: -5 },
  { x: 0, y: -185, rotate: -2 },
  { x: -320, y: 215, rotate: 2 },
  { x: 440, y: -55, rotate: 5 },
  { x: 320, y: 215, rotate: 2 },
];

const BLOOM_TABLET: BloomPose[] = [
  { x: -275, y: -40, rotate: -4 },
  { x: 0, y: -165, rotate: -2 },
  { x: -190, y: 210, rotate: 2 },
  { x: 275, y: -40, rotate: 4 },
  { x: 190, y: 210, rotate: 2 },
];

/** Mobile: staggered 2-column cascade so each card clears the others */
const BLOOM_MOBILE: BloomPose[] = [
  { x: -86, y: -235, rotate: -2 },
  { x: 86, y: -118, rotate: 2 },
  { x: -86, y: 0, rotate: -1 },
  { x: 86, y: 118, rotate: 2 },
  { x: 0, y: 240, rotate: 0 },
];

const variantStyles: Record<
  TestimonialVariant,
  { card: string; quote: string; meta: string; star: string; rule: string }
> = {
  dark: {
    card: "bg-charcoal-900 text-white shadow-xl shadow-charcoal-900/25",
    quote: "text-white/90",
    meta: "text-white/70",
    star: "fill-navy-300 text-navy-300",
    rule: "border-white/15",
  },
  navy: {
    card: "bg-navy-600 text-white shadow-xl shadow-navy-600/30",
    quote: "text-white/95",
    meta: "text-white/75",
    star: "fill-white text-white",
    rule: "border-white/20",
  },
  white: {
    card:
      "bg-background text-foreground shadow-xl shadow-charcoal-900/10 border border-border",
    quote: "text-foreground/90",
    meta: "text-muted-foreground",
    star: "fill-navy-500 text-navy-500",
    rule: "border-border",
  },
  muted: {
    card:
      "bg-charcoal-100 text-charcoal-900 shadow-xl shadow-charcoal-900/10 dark:bg-charcoal-800 dark:text-white",
    quote: "text-charcoal-800 dark:text-white/90",
    meta: "text-charcoal-500 dark:text-white/60",
    star: "fill-navy-500 text-navy-500 dark:fill-navy-300 dark:text-navy-300",
    rule: "border-charcoal-200 dark:border-white/15",
  },
  soft: {
    card:
      "bg-navy-100 text-charcoal-900 shadow-xl shadow-navy-600/15 dark:bg-navy-900 dark:text-white",
    quote: "text-charcoal-800 dark:text-white/90",
    meta: "text-charcoal-600 dark:text-white/65",
    star: "fill-navy-700 text-navy-700 dark:fill-navy-300 dark:text-navy-300",
    rule: "border-navy-200/80 dark:border-white/15",
  },
};

function useBloomScale() {
  const [scale, setScale] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setScale("mobile");
      else if (w < 1024) setScale("tablet");
      else setScale("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}

function bloomTargets(scale: "mobile" | "tablet" | "desktop") {
  if (scale === "mobile") return BLOOM_MOBILE;
  if (scale === "tablet") return BLOOM_TABLET;
  return BLOOM_DESKTOP;
}

function Stars({ className }: { className: string }) {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-3.5 w-3.5 sm:h-4 sm:w-4", className)}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  progress,
  stacked,
  bloomed,
  reduceMotion,
  zIndex,
}: {
  testimonial: Testimonial;
  progress: ReturnType<typeof useMotionValue<number>>;
  stacked: BloomPose;
  bloomed: BloomPose;
  reduceMotion: boolean;
  zIndex: number;
}) {
  const styles = variantStyles[testimonial.variant];

  const x = useTransform(progress, [0, 1], [stacked.x, bloomed.x]);
  const y = useTransform(progress, [0, 1], [stacked.y, bloomed.y]);
  const rotate = useTransform(
    progress,
    [0, 1],
    [stacked.rotate, bloomed.rotate]
  );
  const scaleMv = useTransform(progress, [0, 1], [0.96, 1]);

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex }}
    >
      <motion.article
        style={
          reduceMotion
            ? {
                x: bloomed.x,
                y: bloomed.y,
                rotate: bloomed.rotate,
                scale: 1,
              }
            : { x, y, rotate, scale: scaleMv }
        }
        className={cn(
          "w-[min(12.5rem,64vw)] rounded-3xl p-3.5 sm:w-[15rem] sm:p-5 lg:w-[16rem] lg:p-5",
          styles.card
        )}
      >
        <Stars className={styles.star} />
        <p
          className={cn(
            "mt-2.5 line-clamp-4 text-[11px] leading-relaxed sm:mt-3 sm:line-clamp-5 sm:text-[13px] lg:line-clamp-5 lg:text-sm",
            styles.quote
          )}
        >
          {testimonial.quote}
        </p>
        <div className={cn("mt-3 border-t pt-3 sm:mt-4", styles.rule)}>
          <p className={cn("text-sm font-semibold", styles.quote)}>
            {testimonial.name}
          </p>
          <p className={cn("text-[11px] sm:text-xs", styles.meta)}>
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </motion.article>
    </div>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const scale = useBloomScale();
  const bloom = bloomTargets(scale);
  const progress = useMotionValue(reduceMotion ? 1 : 0);

  useEffect(() => {
    if (reduceMotion) {
      progress.set(1);
      return;
    }

    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        progress.set(1);
        return;
      }
      // Finish bloom by ~55% of the track so the open layout can hold
      const raw = -rect.top / scrollable;
      const mapped = (raw - 0.02) / 0.53;
      progress.set(Math.min(1, Math.max(0, mapped)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [progress, reduceMotion]);

  return (
    <section
      id="testimonials"
      className="relative bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-navy-600 dark:text-navy-300">
            What clients say
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Don&apos;t take our word for it
          </h2>
        </motion.div>
      </Container>

      <div
        ref={trackRef}
        className="relative mt-6 sm:mt-8"
        style={{ height: reduceMotion ? "auto" : "280vh" }}
      >
        <div
          className={cn(
            "flex items-center justify-center",
            reduceMotion
              ? "relative py-6 sm:py-8"
              : "sticky top-14 h-[calc(100dvh-3.5rem)] sm:top-16 sm:h-[calc(100dvh-4rem)] lg:top-20 lg:h-[calc(100vh-5rem)]"
          )}
        >
          <Container className="relative w-full min-w-0 overflow-x-clip">
            <div
              className={cn(
                "relative mx-auto w-full max-w-6xl",
                reduceMotion
                  ? "h-[36rem] sm:h-[40rem] lg:h-[46rem]"
                  : "h-[34rem] sm:h-[38rem] lg:h-[44rem]"
              )}
              aria-label="Client testimonials"
            >
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={`${t.name}-${scale}-v2`}
                  testimonial={t}
                  progress={progress}
                  stacked={STACKED[i] ?? STACKED[0]}
                  bloomed={bloom[i] ?? bloom[0]}
                  reduceMotion={reduceMotion}
                  zIndex={i + 1}
                />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
