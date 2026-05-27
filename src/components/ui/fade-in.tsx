"use client";

import { fadeInUp } from "@/lib/motion/variants";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeInUp}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
