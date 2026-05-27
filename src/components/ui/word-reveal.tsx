"use client";

import { motion, useReducedMotion } from "framer-motion";

const premiumEase = [0.22, 1, 0.36, 1] as const;

export function WordReveal({
  text,
  wordClassName = "",
  containerClassName = "",
  stagger = 0.045,
  startDelay = 0,
}: {
  text: string;
  wordClassName?: string;
  containerClassName?: string;
  stagger?: number;
  startDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={containerClassName}>{text}</span>;
  }

  const words = text.split(/\s+/).filter(Boolean);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: startDelay },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: premiumEase },
    },
  };

  return (
    <motion.span
      className={`inline-flex max-w-full flex-wrap items-baseline gap-x-[0.35em] gap-y-1 ${containerClassName}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={wordVariants} className={wordClassName}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
