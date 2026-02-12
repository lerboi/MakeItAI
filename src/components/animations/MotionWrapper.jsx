"use client";

import { motion } from "framer-motion";

// Spring physics for "weighted" feel
export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

export const quickSpring = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

// Fade up animation
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Scale in animation
export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

// Slide in from left
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

// Slide in from right
export const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

export function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { ...springTransition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}

export default function MotionWrapper({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  ...props
}) {
  const variants = {
    fadeUp: fadeUpVariants,
    scaleIn: scaleInVariants,
    slideLeft: slideInLeftVariants,
    slideRight: slideInRightVariants,
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[variant]}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
}
