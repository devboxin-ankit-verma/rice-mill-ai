import type { Transition, Variants } from "framer-motion";

const premiumEase = [0.22, 1, 0.36, 1] as const;

export const premiumTransition: Transition = {
  duration: 0.45,
  ease: premiumEase,
};

export const fastTransition: Transition = {
  duration: 0.3,
  ease: premiumEase,
};

export const navbarFadeIn: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: premiumEase },
  },
};

export const mobileOverlay: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.35, ease: premiumEase },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: premiumEase },
  },
};

export const mobileDrawer: Variants = {
  closed: { x: "100%" },
  open: {
    x: 0,
    transition: { duration: 0.45, ease: premiumEase },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.35, ease: premiumEase },
  },
};

export const mobileNavStagger: Variants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

export const mobileNavItem: Variants = {
  closed: { opacity: 0, x: 24 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: premiumEase },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: premiumEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: premiumEase },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: premiumEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: premiumEase },
  },
};

export const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const heroFloatAnimation = {
  y: [0, -14, 0],
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: [0.45, 0, 0.55, 1] as const,
  },
};

export const heroGlowPulse = {
  scale: [1, 1.08, 1],
  opacity: [0.45, 0.7, 0.45],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const heroEntrance = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: premiumEase },
  },
};

export const hamburgerLine = (index: number): Variants => ({
  closed: {
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: fastTransition,
  },
  open: {
    rotate: index === 0 ? 45 : index === 2 ? -45 : 0,
    y: index === 0 ? 7 : index === 2 ? -7 : 0,
    opacity: index === 1 ? 0 : 1,
    transition: fastTransition,
  },
});
