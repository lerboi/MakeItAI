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
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engineered for <span className="text-gradient">Global Scale</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Built in Wyoming, deployed worldwide. Our infrastructure delivers
            enterprise-grade reliability and performance.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative p-6 rounded-2xl bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)] text-center group"
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
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,240,255,0.1)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[rgba(0,240,255,0.2)] transition-colors">
                <stat.icon className="w-6 h-6 text-[#00F0FF]" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[#00F0FF] text-sm font-medium mb-2">
                {stat.label}
              </div>
              <div className="text-[#64748B] text-sm">{stat.description}</div>
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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00F0FF] to-[#0080FF] flex items-center justify-center">
              <span className="text-[#050505] font-bold text-xs">WY</span>
            </div>
            <span className="text-[#94A3B8]">
              MakeItAI LLC — Registered in Wyoming, USA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
