import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Lock, Shield, Bot as BotIcon, FileText } from "lucide-react";

const WebSecurity = () => {
  const whoItsFor = [
    "Organizations exposing AI capabilities via web APIs",
    "Security teams managing AI application infrastructure",
    "Platform teams responsible for API security",
    "Compliance teams navigating web security requirements",
    "DevOps teams implementing security at scale",
    "Product teams building customer-facing AI applications",
  ];

  const deliverables = [
    "WAF policy configuration",
    "API security implementation",
    "Bot management strategy",
    "Security policy documentation",
    "Rate limiting and abuse prevention",
    "Monitoring and alerting setup",
    "Incident response procedures",
    "Compliance mapping documentation",
    "Security governance framework",
  ];

  const timeline = [
    {
      phase: "Assessment",
      duration: "1-2 weeks",
      description:
        "Review current security posture, architecture, and requirements.",
    },
    {
      phase: "Policy Design",
      duration: "2-3 weeks",
      description:
        "Develop security policies, rules, and governance frameworks.",
    },
    {
      phase: "Implementation",
      duration: "2-4 weeks",
      description:
        "Deploy WAF, API security, and bot management configurations.",
    },
    {
      phase: "Optimization",
      duration: "Ongoing",
      description:
        "Tune policies based on real traffic patterns and emerging threats.",
    },
  ];

  const faqs = [
    {
      question: "Why do AI applications need specialized web security?",
      answer:
        "AI endpoints face unique threats—prompt injection via web requests, model extraction attempts, abuse of generative capabilities. Standard WAF rules don't catch AI-specific attacks.",
    },
    {
      question: "Which WAF platforms do you support?",
      answer:
        "We work with major cloud WAF offerings (AWS WAF, Cloudflare, Azure WAF) as well as dedicated solutions. We can also advise on platform selection.",
    },
    {
      question: "How do you balance security with user experience?",
      answer:
        "Overly aggressive security creates friction. We help you find the right balance—protecting against real threats while maintaining usability for legitimate users.",
    },
    {
      question: "Can you help with compliance requirements?",
      answer:
        "Yes, we map security controls to relevant compliance frameworks (PCI DSS, SOC 2, HIPAA, etc.) and can support audit preparations.",
    },
    {
      question: "Do you provide ongoing management?",
      answer:
        "We offer both one-time implementations and ongoing managed security services depending on your team's capacity and preferences.",
    },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "WAF Configuration",
      description:
        "Custom rulesets optimized for AI traffic patterns and threat vectors.",
    },
    {
      icon: Lock,
      title: "API Security",
      description:
        "Authentication, authorization, rate limiting, and input validation for AI APIs.",
    },
    {
      icon: BotIcon,
      title: "Bot Management",
      description:
        "Distinguish beneficial AI interactions from malicious automation and abuse.",
    },
    {
      icon: FileText,
      title: "Governance Frameworks",
      description:
        "Policies, procedures, and documentation for ongoing security management.",
    },
  ];

  return (
    <SolutionPageTemplate
      badge="Web Security Policy"
      title="Protect Your"
      titleHighlight="AI Infrastructure"
      description="Enterprise-grade web security for AI applications—WAF configuration, API protection, and bot management."
      icon={Lock}
      whatItIs="As AI capabilities move to the web, they become targets for new classes of attacks. Our web security practice helps you protect AI endpoints with properly configured WAFs, robust API security, and intelligent bot management. We go beyond generic security to address the unique challenges of AI applications—protecting both your systems and the data that powers them."
      whoItsFor={whoItsFor}
      deliverables={deliverables}
      timeline={timeline}
      faqs={faqs}
    >
      {/* Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Capabilities
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What We Deliver
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 card-shadow"
              >
                <cap.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                Best Practices
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Security Governance Principles
              </h2>
            </div>
            <div className="mt-12 space-y-6">
              {[
                {
                  title: "Defense in Depth",
                  description:
                    "Layer multiple security controls so no single point of failure can compromise the system.",
                },
                {
                  title: "Least Privilege",
                  description:
                    "Grant minimum necessary access. AI systems should only have the permissions they need.",
                },
                {
                  title: "Continuous Monitoring",
                  description:
                    "Security is not a one-time event. Implement ongoing monitoring and response capabilities.",
                },
                {
                  title: "Secure by Default",
                  description:
                    "Configure systems to be secure out of the box. Security shouldn't require extra steps.",
                },
              ].map((principle, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6 card-shadow"
                >
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SolutionPageTemplate>
  );
};

export default WebSecurity;
