import type { Variants } from "framer-motion";

/** Standard scroll-triggered easing curve used across the site. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Wrap a group of children with this to stagger their entrance. */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/**
 * Default viewport config for whileInView.
 * "some" reveals as soon as any part is on screen. A percentage threshold
 * keeps tall blocks (the contact form, service sections) invisible on mobile
 * until the user scrolls, because 30% of the block is taller than the viewport.
 */
export const defaultViewport = { once: true, amount: "some" } as const;
