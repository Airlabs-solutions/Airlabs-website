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

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
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

/** Default viewport config for whileInView — fires once, slightly before fully in view. */
export const defaultViewport = { once: true, amount: 0.3 } as const;

/** Clip-path reveal shaped after the logo's peak, for dividers/loaders. */
export const peakReveal: Variants = {
  hidden: { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
  show: {
    clipPath: "inset(0 0% 0 0%)",
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};
