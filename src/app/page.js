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
      <MemoryFeature />
      <BentoServices />
      <TrustSection />

      {/* Final CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build{" "}
            <span className="text-gradient">Intelligent AI Systems?</span>
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
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
