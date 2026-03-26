"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Workflow, Bot, Zap, Shield, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Business Automation",
    description:
      "Replace manual processes with intelligent AI automation. From document processing to approval workflows — reduce overhead and scale operations.",
    span: "lg:col-span-2",
    featured: true,
    accentColor: "#A855F7",
    gradientFrom: "#A855F7",
    gradientTo: "#7C3AED",
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    description:
      "Autonomous agents that execute complex multi-step processes with decision-making capabilities.",
    span: "lg:row-span-2",
    featured: false,
    accentColor: "#00D4FF",
  },
  {
    icon: MessageSquare,
    title: "Long-Memory Chatbots",
    description:
      "Customer service agents that remember every interaction. Context-aware responses that build on past conversations.",
    span: "",
    featured: false,
    accentColor: "#10B981",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description:
      "Sub-50ms response times for latency-sensitive applications.",
    span: "",
    featured: false,
    accentColor: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure with end-to-end encryption and audit logging.",
    span: "",
    featured: false,
    accentColor: "#F43F5E",
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description:
      "Edge-optimized infrastructure for worldwide low-latency access.",
    span: "",
    featured: false,
    accentColor: "#3B82F6",
  },
];

export default function BentoServices() {
  return (
    <section className="py-28 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Solutions <span className="text-gradient">Engineered for Scale</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
            From intelligent chatbots to autonomous workflows, we build AI systems
            that deliver measurable business impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`
                relative group p-7 rounded-2xl
                border border-[var(--border)]
                transition-all duration-400
                ${service.span}
                ${service.featured
                  ? "bg-gradient-to-br from-[var(--surface-elevated)] to-[rgba(168,85,247,0.06)]"
                  : "bg-[var(--surface-elevated)]"
                }
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.08,
              }}
              whileHover={{
                borderColor: `rgba(${hexToRgb(service.accentColor)}, 0.3)`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 30px rgba(${hexToRgb(service.accentColor)}, 0.08)`,
                y: -4,
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-60 transition-opacity duration-400"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={
                  service.featured
                    ? { background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})` }
                    : { backgroundColor: `rgba(${hexToRgb(service.accentColor)}, 0.1)` }
                }
              >
                <service.icon
                  className="w-6 h-6"
                  style={{ color: service.featured ? "var(--base)" : service.accentColor }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-3 transition-all duration-300 font-medium"
          >
            View all solutions
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "0, 212, 255";
}
