import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  solutions: [
    { href: "/solutions#chatbots", label: "Long-Memory Chatbots" },
    { href: "/solutions#workflows", label: "Agentic Workflows" },
    { href: "/solutions#pipelines", label: "Data Pipelines" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/media/Logo.png"
                alt="MakeItAI"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[#64748B] max-w-md mb-4">
              Creating the perfect AI solution tailored for every industry.
              Engineered for enterprise scale, deployed globally.
            </p>
            <p className="text-[#64748B] text-sm">
              MakeItAI LLC - Wyoming, USA
            </p>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#64748B] hover:text-[#00F0FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#64748B] hover:text-[#00F0FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748B] text-sm">
            &copy; {new Date().getFullYear()} MakeItAI LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[#64748B] text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#64748B] text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
