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
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full";

  const variants = {
    primary: "bg-[#00F0FF] text-[#050505] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105",
    secondary: "bg-transparent border border-[rgba(255,255,255,0.15)] text-white hover:border-[#00F0FF] hover:text-[#00F0FF]",
    ghost: "bg-transparent text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
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
