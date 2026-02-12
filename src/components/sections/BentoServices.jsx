"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Workflow, BarChart3, Zap, Shield, Globe } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Long-Memory Chatbots",
    description:
      "Customer service agents that remember every interaction. Context-aware responses that build on past conversations.",
    span: "lg:col-span-2",
    featured: true,
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    description:
      "Autonomous agents that execute complex multi-step processes with decision-making capabilities.",
    span: "lg:row-span-2",
  },
  {
    icon: BarChart3,
    title: "Data Pipelines",
    description:
      "Transform raw data into actionable intelligence with AI-powered ETL and analysis.",
    span: "",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description:
      "Sub-50ms response times for latency-sensitive applications.",
    span: "",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure with end-to-end encryption and audit logging.",
    span: "",
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description:
      "Edge-optimized infrastructure for worldwide low-latency access.",
    span: "",
  },
];

export default function BentoServices() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions <span className="text-gradient">Engineered for Scale</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl">
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
                relative group p-6 rounded-2xl bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)]
                transition-all duration-300 hover:border-[rgba(0,240,255,0.3)]
                hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]
                ${service.span}
                ${service.featured ? "bg-gradient-to-br from-[#0F0F0F] to-[#0A1520]" : ""}
              `}
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
              {/* Icon */}
              <div
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  ${service.featured
                    ? "bg-gradient-to-br from-[#00F0FF] to-[#0080FF]"
                    : "bg-[rgba(0,240,255,0.1)]"
                  }
                `}
              >
                <service.icon
                  className={`w-6 h-6 ${service.featured ? "text-[#050505]" : "text-[#00F0FF]"}`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#94A3B8]">{service.description}</p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00F0FF] to-transparent opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[#00F0FF] hover:underline"
          >
            View all solutions
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
