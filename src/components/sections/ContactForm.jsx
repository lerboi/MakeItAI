"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const inputStyles = `
    w-full px-5 py-3.5 rounded-xl
    bg-[rgba(255,255,255,0.03)] border
    text-white placeholder-[var(--text-muted)]
    transition-all duration-300
    hover:border-[rgba(255,255,255,0.12)]
  `;

  return (
    <motion.div
      className="relative rounded-2xl p-8 md:p-10 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-elevated)] border border-[var(--border)] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />

      {isSubmitted ? (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-20 h-20 rounded-full bg-[var(--accent-subtle)] flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[var(--accent)]" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Message Sent!
          </h3>
          <p className="text-[var(--text-secondary)]">
            We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--text-secondary)] mb-2.5"
              >
                Name <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputStyles} ${
                  errors.name
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-[var(--border)] focus:border-[var(--accent)]"
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--text-secondary)] mb-2.5"
              >
                Email <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputStyles} ${
                  errors.email
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-[var(--border)] focus:border-[var(--accent)]"
                }`}
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Company Field */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-[var(--text-secondary)] mb-2.5"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`${inputStyles} border-[var(--border)] focus:border-[var(--accent)]`}
              placeholder="Acme Inc."
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--text-secondary)] mb-2.5"
            >
              Project Description <span className="text-[var(--accent)]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`${inputStyles} resize-none ${
                errors.message
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-[var(--border)] focus:border-[var(--accent)]"
              }`}
              placeholder="Tell us about your project and what you're looking to achieve..."
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-400">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">&#10227;</span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={18} className="ml-2" />
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
