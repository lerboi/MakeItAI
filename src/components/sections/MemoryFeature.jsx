"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Terminal, { CodeBlock } from "@/components/ui/Terminal";
import { Database, Brain, Layers } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/animations/MotionWrapper";

const features = [
  {
    icon: Database,
    title: "Vector Embeddings",
    description:
      "Transform unstructured data into high-dimensional vectors for semantic search and similarity matching at scale.",
    color: "#00D4FF",
  },
  {
    icon: Brain,
    title: "Long-Term Memory",
    description:
      "Agents that remember past conversations, user preferences, and learned patterns across sessions.",
    color: "#7B61FF",
  },
  {
    icon: Layers,
    title: "Dynamic Knowledge Bases",
    description:
      "Real-time knowledge graphs that evolve and adapt as your business data grows and changes.",
    color: "#10B981",
  },
];

const embeddingCode = `// Store conversation context as embeddings
const embedding = await ai.embed({
  model: "text-embedding-3-large",
  input: userMessage,
  dimensions: 1536
});

// Query semantic memory
const memories = await vectorDB.query({
  vector: embedding,
  topK: 5,
  filter: { userId: user.id }
});

// Agent responds with full context
const response = await agent.chat({
  message: userMessage,
  context: memories,
  memory: "persistent"
});`;

export default function MemoryFeature() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <div className="badge mx-auto mb-6">
            <Brain size={14} />
            <span>Memory Architecture</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Beyond the Prompt:{" "}
            <span className="text-gradient">Specialized Memory</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            Our AI agents don&apos;t just respond — they remember, learn, and evolve.
            Built with enterprise-grade memory systems for truly intelligent automation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Feature Cards */}
          <StaggerChildren className="space-y-5">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card className="flex gap-5 items-start">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${feature.color}15` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          >
            <Terminal title="memory-system.js" className="h-full">
              <CodeBlock code={embeddingCode} language="javascript" />
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
