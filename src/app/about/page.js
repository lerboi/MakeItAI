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
  { icon: Brain, name: "LLM Integration", description: "OpenAI, Anthropic, custom models", color: "#7B61FF" },
  { icon: Database, name: "Vector Databases", description: "Pinecone, Weaviate, Qdrant", color: "#00D4FF" },
  { icon: Cloud, name: "Cloud Infrastructure", description: "AWS, GCP, Azure", color: "#3B82F6" },
  { icon: Shield, name: "Security", description: "SOC 2, end-to-end encryption", color: "#F43F5E" },
  { icon: Code, name: "Modern Stack", description: "TypeScript, Python, Next.js", color: "#10B981" },
  { icon: Zap, name: "Edge Computing", description: "Global low-latency deployment", color: "#F59E0B" },
];

const values = [
  {
    title: "Engineering Excellence",
    description:
      "We build AI systems with the same rigor as mission-critical infrastructure. Clean architecture, comprehensive testing, and documentation are non-negotiable.",
    icon: Code,
  },
  {
    title: "Memory-First Design",
    description:
      "Unlike typical AI implementations, we design systems where context and memory are core architectural components, not afterthoughts.",
    icon: Brain,
  },
  {
    title: "Enterprise Ready",
    description:
      "Security, scalability, and reliability are built in from day one. Our solutions are designed to handle enterprise-scale workloads.",
    icon: Shield,
  },
  {
    title: "Transparent Partnership",
    description:
      "We believe in clear communication, honest timelines, and collaborative development. Your success is our success.",
    icon: Globe,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="badge mb-8">
                <span>About MakeItAI</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 tracking-tight leading-[1.1]">
                Building the Future of{" "}
                <span className="text-gradient">Intelligent AI</span>
              </h1>
              <p className="text-[var(--text-secondary)] text-xl mb-8 leading-relaxed">
                MakeItAI is an AI engineering firm specializing in memory-enabled
                agents and autonomous systems. We help enterprises deploy AI that
                remembers, learns, and evolves.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[rgba(255,255,255,0.02)] border border-[var(--border)]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center">
                  <span className="text-[var(--base)] font-bold text-xs">WY</span>
                </div>
                <span className="text-[var(--text-secondary)] text-sm">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] via-[#0080FF] to-[var(--accent-secondary)] opacity-15 blur-[80px] rounded-full" />
                <motion.div
                  className="absolute inset-8 border border-[rgba(0,212,255,0.1)] rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-[var(--surface)] to-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    <Globe className="w-24 h-24 text-[var(--accent)] opacity-80" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[var(--surface-elevated)] to-[rgba(0,212,255,0.03)] border border-[var(--border)] overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />

              <div className="flex items-start gap-6">
                <div className="hidden sm:block w-1 h-full min-h-[80px] rounded-full bg-gradient-to-b from-[var(--accent)] to-[var(--accent-secondary)] flex-shrink-0" />
                <div>
                  <p className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest mb-2">Founder</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Leroy Ng
                  </h3>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                    Educated in Singapore with a passion for AI since its early days,
                    Leroy founded MakeItAI to bridge the gap between cutting-edge AI
                    research and real-world business applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
              Our <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
              We combine deep technical expertise with a pragmatic approach to
              delivering AI solutions that create real business value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
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
                  delay: index * 0.08,
                }}
              >
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-subtle)] flex items-center justify-center mb-5">
                    <value.icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-28 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies to build robust, scalable AI
              systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="p-7 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] text-center group hover:border-[var(--border-accent)] transition-all duration-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300"
                  style={{ background: `${tech.color}12` }}
                >
                  <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-[var(--text-muted)] text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Operations Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Engineered for{" "}
                <span className="text-gradient">Global Scale</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                Based in Wyoming with infrastructure spanning five continents.
                Our edge-optimized architecture ensures low-latency AI responses
                for users worldwide.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Multi-region deployment for redundancy",
                  "99.9% uptime SLA guaranteed",
                  "GDPR and SOC 2 compliant infrastructure",
                  "24/7 monitoring and incident response",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="glow-dot flex-shrink-0" />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
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
              ].map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="text-3xl font-bold text-[var(--accent)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[var(--text-muted)] text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 mesh-gradient opacity-25" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
              Ready to <span className="text-gradient">Partner With Us?</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
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
