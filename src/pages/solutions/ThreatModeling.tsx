import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Shield, AlertTriangle, Eye, FileCheck } from "lucide-react";

const ThreatModeling = () => {
  const whoItsFor = [
    "Organizations deploying AI systems with security considerations",
    "Security teams responsible for protecting AI infrastructure",
    "Product teams building AI-powered applications",
    "Compliance officers navigating AI security requirements",
    "CISOs and security leaders developing AI security strategies",
    "Teams preparing for security audits or certifications",
  ];

  const deliverables = [
    "Comprehensive threat model documentation",
    "Attack surface analysis report",
    "Risk prioritization matrix",
    "Mitigation strategy roadmap",
    "Security control recommendations",
    "Red team exercise findings",
    "Incident response playbooks",
    "Security monitoring requirements",
    "Compliance gap analysis",
  ];

  const timeline = [
    {
      phase: "Scoping & Discovery",
      duration: "1-2 weeks",
      description:
        "Understand your AI systems, architecture, and security context.",
    },
    {
      phase: "Threat Modeling",
      duration: "2-3 weeks",
      description:
        "Systematic analysis of threats, vulnerabilities, and attack vectors.",
    },
    {
      phase: "Red Team Exercise",
      duration: "1-2 weeks",
      description:
        "Hands-on testing of identified vulnerabilities (optional).",
    },
    {
      phase: "Remediation Planning",
      duration: "1-2 weeks",
      description:
        "Prioritized recommendations and implementation guidance.",
    },
  ];

  const faqs = [
    {
      question: "What makes AI threat modeling different from traditional security?",
      answer:
        "AI systems have unique attack vectors—prompt injection, data poisoning, model extraction, adversarial inputs—that traditional threat models don't cover. We apply security frameworks adapted for AI-specific risks.",
    },
    {
      question: "Do you do penetration testing of AI systems?",
      answer:
        "Yes, our red team exercises include AI-specific attack simulations. We test for prompt injection, jailbreaking, data extraction, and other AI-relevant vulnerabilities.",
    },
    {
      question: "How do you prioritize risks?",
      answer:
        "We use a combination of likelihood, impact, and exploitability factors specific to AI systems. Not all vulnerabilities are equal—we help you focus resources on what matters most.",
    },
    {
      question: "Can you help with compliance requirements?",
      answer:
        "Yes, we map our findings to relevant frameworks and regulations (SOC 2, ISO 27001, NIST AI RMF, EU AI Act, etc.) to support your compliance efforts.",
    },
    {
      question: "What if we're still building our AI system?",
      answer:
        "Even better. Threat modeling during design is more effective and less expensive than retrofitting security. We can integrate with your development process.",
    },
  ];

  const threatCategories = [
    {
      icon: AlertTriangle,
      title: "Input Attacks",
      examples: ["Prompt injection", "Adversarial examples", "Data poisoning"],
    },
    {
      icon: Eye,
      title: "Model Attacks",
      examples: ["Model extraction", "Membership inference", "Model inversion"],
    },
    {
      icon: Shield,
      title: "System Attacks",
      examples: ["API abuse", "Supply chain compromise", "Infrastructure attacks"],
    },
    {
      icon: FileCheck,
      title: "Output Attacks",
      examples: ["Information leakage", "Harmful generation", "Manipulation"],
    },
  ];

  return (
    <SolutionPageTemplate
      badge="Threat Modeling"
      title="Secure Your"
      titleHighlight="AI Systems"
      description="Comprehensive threat analysis and mitigation strategies for AI-specific security risks."
      icon={Shield}
      whatItIs="AI systems face unique security challenges that traditional threat models don't address. Our threat modeling service applies proven security frameworks—adapted for AI—to identify vulnerabilities, assess risks, and develop mitigation strategies. We help you understand your AI attack surface, prioritize security investments, and build defenses that keep pace with evolving threats."
      whoItsFor={whoItsFor}
      deliverables={deliverables}
      timeline={timeline}
      faqs={faqs}
    >
      {/* Threat Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Coverage
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              AI Threat Categories
            </h2>
            <p className="mt-4 text-muted-foreground">
              We analyze threats across the full AI attack surface.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {threatCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 card-shadow"
              >
                <category.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
                    <li
                      key={exampleIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SolutionPageTemplate>
  );
};

export default ThreatModeling;
