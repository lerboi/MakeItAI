"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

const floatingNodes = [
  { left: 12, top: 8, duration: 3.5, delay: 0.2, size: 3 },
  { left: 85, top: 15, duration: 4.2, delay: 1.1, size: 2 },
  { left: 23, top: 78, duration: 3.8, delay: 0.8, size: 4 },
  { left: 67, top: 42, duration: 4.5, delay: 1.5, size: 2 },
  { left: 45, top: 25, duration: 3.2, delay: 0.4, size: 3 },
  { left: 92, top: 68, duration: 4.0, delay: 1.8, size: 2 },
  { left: 8, top: 55, duration: 3.6, delay: 0.6, size: 3 },
  { left: 78, top: 88, duration: 4.3, delay: 1.2, size: 2 },
  { left: 35, top: 12, duration: 3.9, delay: 0.9, size: 4 },
  { left: 55, top: 65, duration: 4.1, delay: 1.4, size: 2 },
  { left: 18, top: 35, duration: 3.4, delay: 0.3, size: 3 },
  { left: 72, top: 22, duration: 4.4, delay: 1.7, size: 2 },
  { left: 40, top: 92, duration: 3.7, delay: 0.7, size: 3 },
  { left: 88, top: 45, duration: 4.6, delay: 1.9, size: 2 },
  { left: 5, top: 82, duration: 3.3, delay: 0.5, size: 4 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,212,255,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(123,97,255,0.06)_0%,transparent_70%)]" />

      {/* Floating Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingNodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
              width: node.size,
              height: node.size,
              background: i % 3 === 0 ? "#7B61FF" : "#00D4FF",
            }}
            animate={{
              opacity: [0.15, 0.5, 0.15],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="badge mb-8">
                <Sparkles size={14} />
                <span>Enterprise AI Solutions</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            >
              The Perfect AI Solution{" "}
              <span className="text-gradient">Tailored for Your Industry</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            >
              We craft bespoke AI solutions designed to address your unique challenges.
              From healthcare to finance, retail to manufacturing — our custom-built systems
              integrate seamlessly and deliver measurable results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
            >
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button href="/solutions" variant="secondary" size="lg">
                Explore Solutions
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-14 pt-8 border-t border-[var(--border)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest mb-5 font-medium">
                Trusted by innovative teams
              </p>
              <div className="flex items-center gap-10">
                {[
                  { value: "99.9%", label: "Uptime SLA" },
                  { value: "50ms", label: "Avg Response" },
                  { value: "SOC 2", label: "Compliant" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <span className="block text-xs text-[var(--text-muted)] mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] via-[#0080FF] to-[var(--accent-secondary)] opacity-15 blur-[80px] rounded-full" />

              {/* Animated rings */}
              <motion.div
                className="absolute inset-6 border border-[rgba(0,212,255,0.15)] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-16 border border-[rgba(123,97,255,0.12)] rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Center Node */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center shadow-[0_0_80px_rgba(0,212,255,0.4)]">
                  <span className="text-4xl font-bold text-[var(--base)]">AI</span>
                </div>
              </div>

              {/* Orbiting Nodes */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-5 h-5 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                  style={{
                    top: "50%",
                    left: "50%",
                    background: i % 2 === 0
                      ? "linear-gradient(135deg, #00D4FF, #0080FF)"
                      : "linear-gradient(135deg, #7B61FF, #A855F7)",
                  }}
                  animate={{
                    x: [
                      Math.cos((i * Math.PI) / 2) * 130,
                      Math.cos((i * Math.PI) / 2 + Math.PI * 2) * 130,
                    ],
                    y: [
                      Math.sin((i * Math.PI) / 2) * 130,
                      Math.sin((i * Math.PI) / 2 + Math.PI * 2) * 130,
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}>
                {[0, 1, 2, 3].map((i) => (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + Math.cos((i * Math.PI) / 2) * 35}%`}
                    y2={`${50 + Math.sin((i * Math.PI) / 2) * 35}%`}
                    stroke={i % 2 === 0 ? "rgba(0, 212, 255, 0.2)" : "rgba(123, 97, 255, 0.2)"}
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.2 }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
