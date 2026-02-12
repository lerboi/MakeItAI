"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Brain,
  Database,
  Cloud,
  Shield,
  Code,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";

const techStack = [
  { icon: Brain, name: "LLM Integration", description: "OpenAI, Anthropic, custom models" },
  { icon: Database, name: "Vector Databases", description: "Pinecone, Weaviate, Qdrant" },
  { icon: Cloud, name: "Cloud Infrastructure", description: "AWS, GCP, Azure" },
  { icon: Shield, name: "Security", description: "SOC 2, end-to-end encryption" },
  { icon: Code, name: "Modern Stack", description: "TypeScript, Python, Next.js" },
  { icon: Zap, name: "Edge Computing", description: "Global low-latency deployment" },
];

const values = [
  {
    title: "Engineering Excellence",
    description:
      "We build AI systems with the same rigor as mission-critical infrastructure. Clean architecture, comprehensive testing, and documentation are non-negotiable.",
  },
  {
    title: "Memory-First Design",
    description:
      "Unlike typical AI implementations, we design systems where context and memory are core architectural components, not afterthoughts.",
  },
  {
    title: "Enterprise Ready",
    description:
      "Security, scalability, and reliability are built in from day one. Our solutions are designed to handle enterprise-scale workloads.",
  },
  {
    title: "Transparent Partnership",
    description:
      "We believe in clear communication, honest timelines, and collaborative development. Your success is our success.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building the Future of{" "}
                <span className="text-gradient">Intelligent AI</span>
              </h1>
              <p className="text-[#94A3B8] text-xl mb-6">
                MakeItAI is an AI engineering firm specializing in memory-enabled
                agents and autonomous systems. We help enterprises deploy AI that
                remembers, learns, and evolves.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00F0FF] to-[#0080FF] flex items-center justify-center">
                  <span className="text-[#050505] font-bold text-xs">WY</span>
                </div>
                <span className="text-[#94A3B8]">
                  MakeItAI LLC — Wyoming, USA
                </span>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF] via-[#0080FF] to-[#8000FF] opacity-20 blur-3xl rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-3xl bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)] flex items-center justify-center shadow-2xl">
                    <Globe className="w-24 h-24 text-[#00F0FF]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl">
              We combine deep technical expertise with a pragmatic approach to
              delivering AI solutions that create real business value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                <Card>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#94A3B8]">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable AI
              systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="p-6 rounded-2xl bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)] text-center group hover:border-[rgba(0,240,255,0.3)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.05,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,240,255,0.1)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[rgba(0,240,255,0.2)] transition-colors">
                  <tech.icon className="w-6 h-6 text-[#00F0FF]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {tech.name}
                </h3>
                <p className="text-[#64748B] text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Operations Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Engineered for{" "}
                <span className="text-gradient">Global Scale</span>
              </h2>
              <p className="text-[#94A3B8] text-lg mb-6">
                Based in Wyoming with infrastructure spanning five continents.
                Our edge-optimized architecture ensures low-latency AI responses
                for users worldwide.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                  <span className="text-[#94A3B8]">
                    Multi-region deployment for redundancy
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                  <span className="text-[#94A3B8]">
                    99.9% uptime SLA guaranteed
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                  <span className="text-[#94A3B8]">
                    GDPR and SOC 2 compliant infrastructure
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                  <span className="text-[#94A3B8]">
                    24/7 monitoring and incident response
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            >
              {[
                { label: "Regions", value: "5" },
                { label: "Uptime SLA", value: "99.9%" },
                { label: "Avg Latency", value: "50ms" },
                { label: "Data Centers", value: "12+" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)] text-center"
                >
                  <div className="text-3xl font-bold text-[#00F0FF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#64748B] text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Partner With Us?</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how MakeItAI can help you build intelligent AI
              systems that drive real business outcomes.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
