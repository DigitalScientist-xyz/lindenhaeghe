"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const defaultTransition = {
  duration: 0.5,
  ease: [0.25, 0.4, 0.25, 1] as const,
};

type ScrollSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function ScrollSection({
  children,
  className = "",
  delay = 0,
  id,
}: ScrollSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px -80px 0px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={defaultVariants}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={defaultVariants}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
