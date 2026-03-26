"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "leroy.ng@makeitai.site",
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Wyoming, USA",
    description: "Serving clients globally",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Mon - Fri",
    description: "9:00 AM - 6:00 PM MT",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Intelligent</span>
            </h1>
            <p className="text-[#94A3B8] text-xl">
              Ready to transform your business with AI? Tell us about your
              project and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="p-6 rounded-2xl bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)]"
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
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,240,255,0.1)] flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {info.title}
                  </h3>
                  <p className="text-[#00F0FF] mb-1">{info.value}</p>
                  <p className="text-[#64748B] text-sm">{info.description}</p>
                </motion.div>
              ))}

              {/* Additional Info */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F0F0F] to-[#0A1520] border border-[rgba(0,240,255,0.2)]">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Enterprise Inquiries
                </h3>
                <p className="text-[#94A3B8] text-sm mb-4">
                  For large-scale deployments, custom SLAs, or partnership
                  opportunities, please mention it in your message.
                </p>
                <div className="flex items-center gap-2 text-[#00F0FF] text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                  Priority response for enterprise
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What industries do you work with?",
                a: "We work across industries including fintech, healthcare, e-commerce, and SaaS. Our solutions are adaptable to any sector that can benefit from intelligent AI systems.",
              },
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope. A proof-of-concept can be ready in 2-4 weeks, while full enterprise deployments typically take 2-4 months.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, and dedicated account management for enterprise clients.",
              },
              {
                q: "Can you integrate with our existing systems?",
                a: "Absolutely. Our solutions are designed to integrate seamlessly with existing infrastructure through APIs, webhooks, and custom connectors.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                className="p-6 rounded-2xl bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)]"
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
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-[#94A3B8]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
