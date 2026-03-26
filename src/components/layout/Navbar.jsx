"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glassmorphic shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/media/Logo.png"
            alt="MakeItAI"
            width={180}
            height={40}
            className="h-15 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[var(--text-secondary)] hover:text-white transition-colors duration-300 relative group rounded-lg text-sm font-medium"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] transition-all duration-300 group-hover:w-6 rounded-full" />
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#0098CC] text-[var(--base)] font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.35)] transition-all duration-300"
        >
          Get Started
          <ArrowRight size={14} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glassmorphic border-t border-[var(--border)]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-white transition-colors py-3 px-3 rounded-lg hover:bg-[rgba(255,255,255,0.03)] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#0098CC] text-[var(--base)] font-semibold mt-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
