"use client";

import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import type { ServiceCategory } from "@/types";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  index,
  expanded,
  onToggle,
  className,
}: {
  service: ServiceCategory;
  index: number;
  expanded: boolean;
  onToggle: () => void;
  className?: string;
}) {
  const Icon = service.icon;
  const ref = useRef<HTMLDivElement>(null);

  // Pointer-driven tilt — subtle 3D lean toward the cursor.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
    stiffness: 300,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn(
        "group relative scroll-mt-28 rounded-2xl border border-border bg-surface/50 p-6 card-elevate hover:border-navy-600/40",
        className
      )}
      id={`services-${service.slug}`}
    >
      <span className="pointer-events-none absolute right-6 top-6 font-display text-sm font-semibold text-muted-foreground/40">
        {String(index + 1).padStart(2, "0")}
      </span>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="flex w-full flex-col items-start text-left"
        style={{ transform: "translateZ(30px)" }}
      >
        <motion.span
          whileHover={{ rotate: -8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white shadow-lg shadow-navy-600/20 dark:from-navy-400 dark:to-navy-600"
        >
          <Icon className="h-6 w-6" />
        </motion.span>

        <span className="mt-5 block font-display text-lg font-semibold text-foreground">
          {service.title}
        </span>
        <span className="mt-1.5 block text-sm text-muted-foreground">
          {service.description}
        </span>

        <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-navy-600 dark:text-navy-300">
          <span className="relative overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {service.items.length} services
            </span>
            <span className="absolute inset-0 flex translate-y-full items-center gap-1 transition-transform duration-300 group-hover:translate-y-0">
              {expanded ? "Show less" : "View all"}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              expanded && "rotate-180"
            )}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            style={{ transform: "translateZ(30px)" }}
          >
            <ul className="mt-5 grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-600 dark:text-navy-300" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
