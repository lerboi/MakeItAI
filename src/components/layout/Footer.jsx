import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  solutions: [
    { href: "/solutions#chatbots", label: "Long-Memory Chatbots" },
    { href: "/solutions#workflows", label: "Agentic Workflows" },
    { href: "/solutions#automation", label: "AI Automation" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--base)]">
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.2)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/media/Logo.png"
                alt="MakeItAI"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[var(--text-muted)] max-w-md mb-6 leading-relaxed">
              Creating the perfect AI solution tailored for every industry.
              Engineered for enterprise scale, deployed globally.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[var(--text-muted)] text-sm">
                <MapPin size={14} className="text-[var(--accent)] flex-shrink-0" />
                <span>MakeItAI LLC - Wyoming, USA</span>
              </div>
              <a
                href="mailto:leroy.ng@makeitai.site"
                className="flex items-center gap-3 text-[var(--text-muted)] text-sm hover:text-[var(--accent)] transition-colors duration-300"
              >
                <Mail size={14} className="text-[var(--accent)] flex-shrink-0" />
                <span>leroy.ng@makeitai.site</span>
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            &copy; {new Date().getFullYear()} MakeItAI LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-[var(--text-muted)] text-sm hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[var(--text-muted)] text-sm hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
