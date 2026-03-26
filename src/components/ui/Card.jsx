"use client";

import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <motion.div
      className={`
        relative bg-gradient-to-br from-[var(--surface)] to-[var(--surface-elevated)]
        border border-[var(--border)] rounded-2xl p-7
        ${hover ? "card-hover" : ""}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
