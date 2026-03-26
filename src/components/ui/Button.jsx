"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full cursor-pointer";

  const variants = {
    primary: "bg-gradient-to-r from-[var(--accent)] to-[#0098CC] text-[var(--base)] hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:scale-105",
    secondary: "bg-transparent border border-[rgba(255,255,255,0.1)] text-white hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]",
    ghost: "bg-transparent text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: variant === "primary" ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </Component>
  );
}
