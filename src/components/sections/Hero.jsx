"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

// Pre-computed positions for floating nodes (avoids Math.random during render)
const floatingNodes = [
  { left: 12, top: 8, duration: 3.5, delay: 0.2 },
  { left: 85, top: 15, duration: 4.2, delay: 1.1 },
  { left: 23, top: 78, duration: 3.8, delay: 0.8 },
  { left: 67, top: 42, duration: 4.5, delay: 1.5 },
  { left: 45, top: 25, duration: 3.2, delay: 0.4 },
  { left: 92, top: 68, duration: 4.0, delay: 1.8 },
  { left: 8, top: 55, duration: 3.6, delay: 0.6 },
  { left: 78, top: 88, duration: 4.3, delay: 1.2 },
  { left: 35, top: 12, duration: 3.9, delay: 0.9 },
  { left: 55, top: 65, duration: 4.1, delay: 1.4 },
  { left: 18, top: 35, duration: 3.4, delay: 0.3 },
  { left: 72, top: 22, duration: 4.4, delay: 1.7 },
  { left: 40, top: 92, duration: 3.7, delay: 0.7 },
  { left: 88, top: 45, duration: 4.6, delay: 1.9 },
  { left: 5, top: 82, duration: 3.3, delay: 0.5 },
  { left: 62, top: 5, duration: 4.2, delay: 1.0 },
  { left: 28, top: 58, duration: 3.8, delay: 1.3 },
  { left: 95, top: 32, duration: 4.0, delay: 0.1 },
  { left: 50, top: 75, duration: 3.5, delay: 1.6 },
  { left: 15, top: 18, duration: 4.3, delay: 0.0 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      {/* Floating Nodes Visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingNodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#00F0FF]"
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.2)] mb-6">
                <Sparkles size={16} className="text-[#00F0FF]" />
                <span className="text-sm text-[#00F0FF]">Enterprise AI Solutions</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            >
              Intelligent AI Agents{" "}
              <span className="text-gradient">That Never Forget</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            >
              Build AI systems with specialized memory architecture. Our agents remember
              context, learn from interactions, and deliver intelligent responses that
              evolve with your business.
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
              className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.08)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-[#64748B] text-sm mb-4">Trusted by innovative teams</p>
              <div className="flex items-center gap-8">
                <div className="text-[#64748B]">
                  <span className="text-2xl font-bold text-white">99.9%</span>
                  <span className="block text-xs">Uptime SLA</span>
                </div>
                <div className="text-[#64748B]">
                  <span className="text-2xl font-bold text-white">50ms</span>
                  <span className="block text-xs">Avg Response</span>
                </div>
                <div className="text-[#64748B]">
                  <span className="text-2xl font-bold text-white">SOC 2</span>
                  <span className="block text-xs">Compliant</span>
                </div>
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
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF] via-[#0080FF] to-[#8000FF] opacity-20 blur-3xl rounded-full" />

              {/* Animated Ring */}
              <motion.div
                className="absolute inset-8 border-2 border-[rgba(0,240,255,0.3)] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Center Node */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00F0FF] to-[#0080FF] flex items-center justify-center shadow-[0_0_60px_rgba(0,240,255,0.5)]">
                  <span className="text-4xl font-bold text-[#050505]">AI</span>
                </div>
              </div>

              {/* Orbiting Nodes */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 rounded-full bg-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: [
                      Math.cos((i * Math.PI) / 2) * 120,
                      Math.cos((i * Math.PI) / 2 + Math.PI * 2) * 120,
                    ],
                    y: [
                      Math.sin((i * Math.PI) / 2) * 120,
                      Math.sin((i * Math.PI) / 2 + Math.PI * 2) * 120,
                    ],
                  }}
                  transition={{
                    duration: 8,
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
                    stroke="rgba(0, 240, 255, 0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
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
