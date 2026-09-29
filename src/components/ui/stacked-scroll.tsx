"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { cn } from "@/lib/utils";

type StackContextValue = {
  count: number;
  trackRef: RefObject<HTMLDivElement | null>;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
};

const StackContext = createContext<StackContextValue | null>(null);

export function useStackedScroll() {
  const ctx = useContext(StackContext);
  if (!ctx) {
    throw new Error("useStackedScroll must be used within StackedScroll");
  }
  return ctx;
}

/**
 * CSS sticky card stack — native compositor scrolling, no per-frame JS transforms.
 * Each card pins under the navbar; the next card slides over it as you scroll.
 */
export function StackedScroll({
  count,
  className,
  children,
  header,
}: {
  count: number;
  className?: string;
  children: ReactNode;
  header?: ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StackContext.Provider
      value={{ count, trackRef, activeIndex, setActiveIndex }}
    >
      <div ref={trackRef} className={cn("relative", className)}>
        {header}
        <div className="relative mx-auto max-w-4xl px-4 pb-2 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </StackContext.Provider>
  );
}

/**
 * One sticky layer. Higher z-index cards cover lower ones as they arrive.
 */
export function ScrollStackCard({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: ReactNode;
}) {
  const { setActiveIndex, count } = useStackedScroll();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && entry.intersectionRatio >= 0.45) {
          setActiveIndex(index);
        }
      },
      {
        // Prefer the card occupying the sticky stage band
        root: null,
        rootMargin: "-20% 0px -35% 0px",
        threshold: [0.45, 0.6, 0.75],
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [index, setActiveIndex, count]);

  return (
    <div
      ref={ref}
      data-stack-index={index}
      className={cn(
        // Native sticky — GPU scrolls the page; we don't scrub transforms
        // Compact sticky box — not full-bleed viewport height
        "sticky top-[calc(4rem+2.75rem)] mx-auto mb-6 h-auto w-full last:mb-0 sm:top-[calc(4.5rem+2.75rem)] sm:mb-8 sm:last:mb-0 lg:top-[calc(5rem+2.75rem)]",
        className
      )}
      style={{ zIndex: index + 1 }}
    >
      {children}
    </div>
  );
}

/** Jump so the target sticky card sits in the pinned band. */
export function scrollToStackIndex(
  track: HTMLDivElement | null,
  index: number,
  _count: number,
  behavior: ScrollBehavior = "smooth"
) {
  if (!track) return;
  const card = track.querySelector<HTMLElement>(
    `[data-stack-index="${index}"]`
  );
  if (!card) return;
  const top = window.scrollY + card.getBoundingClientRect().top - 80;
  window.scrollTo({ top, behavior });
}
