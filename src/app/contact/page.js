"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "leroy.ng@makeitai.site",
    description: "We respond within 24 hours",
    color: "#00D4FF",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Wyoming, USA",
    description: "Serving clients globally",
    color: "#7B61FF",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Mon - Fri",
    description: "9:00 AM - 6:00 PM MT",
    color: "#10B981",
  },
];

const faqs = [
  {
    q: "What types of AI solutions do you build?",
    a: "We specialize in memory-enabled AI agents, business automation, agentic workflows, and long-memory chatbots. Each solution is custom-built for your specific industry and use case.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity. A standard integration takes 4-8 weeks, while enterprise-scale deployments may take 3-6 months. We provide detailed timelines during consultation.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we provide dedicated support and maintenance packages including 24/7 monitoring, performance optimization, and regular updates to keep your AI systems running at peak efficiency.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve healthcare, finance, retail, manufacturing, legal, and more. Our solutions are adaptable to any industry that can benefit from intelligent AI automation.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="badge mb-8">
              <MessageCircle size={14} />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 tracking-tight leading-[1.1]">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Extraordinary</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-xl leading-relaxed">
              Ready to transform your business with intelligent AI? Tell us about
              your project and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] group hover:border-[var(--border-accent)] transition-all duration-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -3 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ background: `${info.color}12` }}
                >
                  <info.icon className="w-5 h-5" style={{ color: info.color }} />
                </div>
                <h3 className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-1">
                  {info.title}
                </h3>
                <p className="text-white font-semibold text-lg mb-1">{info.value}</p>
                <p className="text-[var(--text-muted)] text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Form + Sidebar */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            <ContactForm />

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Enterprise box */}
              <motion.div
                className="relative p-7 rounded-2xl bg-gradient-to-br from-[var(--surface)] to-[rgba(123,97,255,0.05)] border border-[var(--border)] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-secondary)] to-transparent opacity-30" />
                <h3 className="text-lg font-semibold text-white mb-3">
                  Enterprise Inquiries
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-5 leading-relaxed">
                  For large-scale deployments and enterprise partnerships, reach out
                  directly to our team.
                </p>
                <a
                  href="mailto:leroy.ng@makeitai.site"
                  className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:gap-3 transition-all duration-300"
                >
                  leroy.ng@makeitai.site
                  <ArrowRight size={14} />
                </a>
              </motion.div>

              {/* Response time */}
              <motion.div
                className="p-7 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="text-sm font-medium text-[#10B981]">
                    Typically respond within 24 hours
                  </span>
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  We review every inquiry personally and provide detailed responses
                  tailored to your project needs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--border-accent)] transition-all duration-300"
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
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
