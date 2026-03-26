"use client";

import { motion } from "framer-motion";
import { Globe, Lock, Zap, Clock } from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "Global",
    label: "Infrastructure",
    description: "Edge nodes on 5 continents",
  },
  {
    icon: Lock,
    value: "SOC 2",
    label: "Certified",
    description: "Enterprise-grade security",
  },
  {
    icon: Zap,
    value: "50ms",
    label: "Avg Latency",
    description: "Real-time responsiveness",
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Reliability guaranteed",
  },
];

export default function TrustSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--base)] via-[var(--surface)] to-[var(--base)]" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Engineered for <span className="text-gradient">Global Scale</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            Built in Wyoming, deployed worldwide. Our infrastructure delivers
            enterprise-grade reliability and performance.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center mx-auto mb-5 group-hover:bg-[rgba(0,212,255,0.15)] transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[var(--accent)] text-sm font-medium mb-2">
                {stat.label}
              </div>
              <div className="text-[var(--text-muted)] text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Wyoming Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[rgba(255,255,255,0.02)] border border-[var(--border)]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center">
              <span className="text-[var(--base)] font-bold text-xs">WY</span>
            </div>
            <span className="text-[var(--text-secondary)] text-sm">
              MakeItAI LLC — Registered in Wyoming, USA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
