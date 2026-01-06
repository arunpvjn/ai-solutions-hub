import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Bot, Code, Layers, Workflow } from "lucide-react";

const AgenticAI = () => {
  const whoItsFor = [
    "Organizations looking to automate complex, multi-step workflows",
    "Tech teams ready to build production-grade AI systems",
    "Companies seeking to scale operations without proportional headcount growth",
    "Enterprises wanting to modernize legacy processes with intelligent automation",
    "Startups building AI-native products from the ground up",
    "Leaders exploring autonomous AI but unsure where to start",
  ];

  const deliverables = [
    "Custom agent architecture design",
    "Production-ready agent implementation",
    "Multi-agent orchestration system",
    "Tool and API integrations",
    "Monitoring and observability setup",
    "Documentation and runbooks",
    "Team training and handoff",
    "Post-launch support period",
    "Performance optimization review",
  ];

  const timeline = [
    {
      phase: "Discovery & Design",
      duration: "2-3 weeks",
      description:
        "Deep dive into your workflows, identify automation opportunities, and design the agent architecture.",
    },
    {
      phase: "Proof of Concept",
      duration: "3-4 weeks",
      description:
        "Build a working prototype demonstrating core functionality with real data.",
    },
    {
      phase: "Production Build",
      duration: "6-12 weeks",
      description:
        "Full development, testing, and integration of the production system.",
    },
    {
      phase: "Deployment & Optimization",
      duration: "2-4 weeks",
      description:
        "Rollout, monitoring setup, and iterative improvements based on real-world performance.",
    },
  ];

  const faqs = [
    {
      question: "What makes an 'agentic' AI different from regular automation?",
      answer:
        "Agentic AI systems can reason, plan, and take autonomous action to achieve goals—rather than just following pre-defined rules. They can handle ambiguity, make decisions, and adapt to changing conditions without constant human oversight.",
    },
    {
      question: "Do I need a large dataset to get started?",
      answer:
        "Not necessarily. Modern agent architectures can leverage foundation models and tools effectively with modest amounts of domain-specific data. We'll assess your data landscape during discovery.",
    },
    {
      question: "How do you ensure AI agents behave safely and predictably?",
      answer:
        "We implement guardrails, human-in-the-loop checkpoints, extensive testing, and monitoring. Every agent we build includes safety constraints appropriate to its level of autonomy.",
    },
    {
      question: "Can agents integrate with our existing systems?",
      answer:
        "Absolutely. Tool use and API integration are core capabilities of agentic systems. We design agents that work with your existing tech stack, not around it.",
    },
    {
      question: "What ongoing support do you provide?",
      answer:
        "Our standard engagements include a post-launch support period. We also offer ongoing advisory and maintenance retainers for organizations that want continued partnership.",
    },
  ];

  return (
    <SolutionPageTemplate
      badge="Agentic AI Development"
      title="Build Intelligent"
      titleHighlight="AI Agents"
      description="Design and deploy autonomous AI agents that handle complex workflows, make decisions, and scale your operations intelligently."
      icon={Bot}
      whatItIs="Agentic AI development is the practice of building AI systems that can autonomously plan, reason, and take action to achieve complex goals. Unlike traditional automation or simple chatbots, agentic systems can handle multi-step tasks, use tools, make decisions under uncertainty, and learn from outcomes. We help organizations design, build, and deploy these systems responsibly—creating AI that works alongside humans to dramatically expand what's possible."
      whoItsFor={whoItsFor}
      deliverables={deliverables}
      timeline={timeline}
      faqs={faqs}
    >
      {/* Sample Architectures */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Approaches
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sample Architectures
            </h2>
            <p className="mt-4 text-muted-foreground">
              We tailor our approach to your specific needs. Here are common patterns we implement.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 card-shadow">
              <Code className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                Single Agent + Tools
              </h3>
              <p className="text-sm text-muted-foreground">
                A focused agent with access to specialized tools for specific workflows.
                Ideal for well-defined tasks with clear boundaries.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 card-shadow">
              <Layers className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                Multi-Agent Orchestration
              </h3>
              <p className="text-sm text-muted-foreground">
                Specialized agents working together on complex tasks. Perfect for
                processes requiring multiple domains of expertise.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 card-shadow">
              <Workflow className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                Human-in-the-Loop
              </h3>
              <p className="text-sm text-muted-foreground">
                Agents that handle routine work autonomously but escalate edge cases
                to humans. Balances efficiency with oversight.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SolutionPageTemplate>
  );
};

export default AgenticAI;
