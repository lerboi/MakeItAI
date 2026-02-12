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
        relative bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6
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
