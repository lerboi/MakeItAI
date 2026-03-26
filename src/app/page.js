import Hero from "@/components/sections/Hero";
import MemoryFeature from "@/components/sections/MemoryFeature";
import BentoServices from "@/components/sections/BentoServices";
import TrustSection from "@/components/sections/TrustSection";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <MemoryFeature />
      <BentoServices />
      <div className="section-divider" />
      <TrustSection />

      {/* Final CTA Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 mesh-gradient opacity-25" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Ready to Build{" "}
            <span className="text-gradient">Intelligent AI Systems?</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how our memory-enabled AI agents can transform your
            business operations. Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button href="/solutions" variant="secondary" size="lg">
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
