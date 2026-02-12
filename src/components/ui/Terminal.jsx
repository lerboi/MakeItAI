"use client";

import { motion } from "framer-motion";

export default function Terminal({ children, title = "terminal", className = "" }) {
  return (
    <motion.div
      className={`terminal ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="ml-4 text-xs text-[#64748B]">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm overflow-x-auto">
        {children}
      </div>
    </motion.div>
  );
}

export function TerminalLine({ prompt = "$", children, className = "" }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <span className="text-[#00F0FF]">{prompt}</span>
      <span className="text-[#94A3B8]">{children}</span>
    </div>
  );
}

export function TerminalOutput({ children, className = "" }) {
  return (
    <div className={`text-[#64748B] pl-4 ${className}`}>
      {children}
    </div>
  );
}

export function CodeBlock({ code, language = "javascript" }) {
  return (
    <pre className="text-[#94A3B8] whitespace-pre-wrap">
      <code>{code}</code>
    </pre>
  );
}
