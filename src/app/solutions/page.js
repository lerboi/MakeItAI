"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Terminal, { CodeBlock } from "@/components/ui/Terminal";
import Button from "@/components/ui/Button";
import { MessageSquare, Workflow, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

const solutions = [
  {
    id: "chatbots",
    icon: MessageSquare,
    title: "Long-Memory Chatbots",
    subtitle: "Customer service agents that remember every interaction",
    description:
      "Build AI chatbots that maintain context across sessions, remember user preferences, and provide personalized responses based on conversation history. Perfect for customer support, sales, and internal knowledge bases.",
    features: [
      "Persistent memory across sessions",
      "User preference learning",
      "Context-aware responses",
      "Multi-turn conversation handling",
      "Sentiment analysis integration",
      "Handoff to human agents",
    ],
    code: `// Initialize memory-enabled chatbot
const chatbot = new MakeItAI.Agent({
  model: "gpt-4-turbo",
  memory: {
    type: "persistent",
    storage: "vector-db",
    retention: "unlimited"
  }
});

// User message with automatic context
const response = await chatbot.chat({
  userId: "user_123",
  message: "What did we discuss last week?",
  // Memory automatically retrieved
});

// Response includes historical context
console.log(response.message);
// "Last week we discussed your API integration..."`,
  },
  {
    id: "workflows",
    icon: Workflow,
    title: "Autonomous Agentic Workflows",
    subtitle: "AI agents that execute complex multi-step processes",
    description:
      "Deploy autonomous agents capable of planning, reasoning, and executing complex workflows with minimal human intervention. From research tasks to business process automation.",
    features: [
      "Multi-step task planning",
      "Tool and API integration",
      "Error recovery and retry logic",
      "Human-in-the-loop checkpoints",
      "Parallel task execution",
      "Real-time progress monitoring",
    ],
    code: `// Define autonomous workflow
const workflow = new MakeItAI.Workflow({
  name: "research-report",
  agents: ["researcher", "analyst", "writer"],
  steps: [
    {
      agent: "researcher",
      task: "Gather data from sources",
      tools: ["web-search", "api-fetch"]
    },
    {
      agent: "analyst",
      task: "Analyze and synthesize findings",
      depends: ["researcher"]
    },
    {
      agent: "writer",
      task: "Generate comprehensive report",
      depends: ["analyst"]
    }
  ]
});

// Execute with monitoring
const result = await workflow.run({
  topic: "AI market trends 2025",
  onProgress: (step) => console.log(step)
});`,
  },
  {
    id: "pipelines",
    icon: BarChart3,
    title: "Data-to-Intelligence Pipelines",
    subtitle: "Transform raw data into actionable insights",
    description:
      "Build end-to-end data pipelines that ingest, process, and analyze data using AI. From ETL operations to real-time analytics dashboards powered by natural language queries.",
    features: [
      "Automated data ingestion",
      "AI-powered data cleaning",
      "Natural language querying",
      "Real-time stream processing",
      "Custom ML model integration",
      "Automated report generation",
    ],
    code: `// Create intelligent data pipeline
const pipeline = new MakeItAI.Pipeline({
  source: {
    type: "multi-source",
    connectors: ["postgres", "s3", "api"]
  },
  transforms: [
    { type: "clean", rules: "auto-detect" },
    { type: "enrich", model: "entity-extraction" },
    { type: "embed", dimensions: 1536 }
  ],
  sink: {
    type: "vector-db",
    index: "knowledge-base"
  }
});

// Natural language query
const insights = await pipeline.query(
  "What are the top customer complaints this month?"
);

// AI-generated analysis
console.log(insights.summary);
console.log(insights.recommendations);`,
  },
];

export default function SolutionsPage() {
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
              AI Solutions{" "}
              <span className="text-gradient">Built for Enterprise</span>
            </h1>
            <p className="text-[#94A3B8] text-xl">
              From intelligent chatbots to autonomous workflows, our solutions
              are engineered for scale, security, and measurable business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-24 ${index % 2 === 1 ? "bg-[#0A0A0A]" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                className={index % 2 === 1 ? "lg:order-2" : ""}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00F0FF] to-[#0080FF] flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-[#050505]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {solution.title}
                </h2>
                <p className="text-[#00F0FF] text-lg mb-4">{solution.subtitle}</p>
                <p className="text-[#94A3B8] text-lg mb-8">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00F0FF] flex-shrink-0" />
                      <span className="text-[#94A3B8]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant="primary">
                  Build This Solution
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </motion.div>

              {/* Code Terminal */}
              <motion.div
                className={index % 2 === 1 ? "lg:order-1" : ""}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                <Terminal title={`${solution.id}.js`}>
                  <CodeBlock code={solution.code} language="javascript" />
                </Terminal>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a <span className="text-gradient">Custom Solution?</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
              Every business is unique. Let&apos;s discuss your specific requirements
              and design an AI solution tailored to your needs.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Consultation
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
