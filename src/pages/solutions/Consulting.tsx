import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Lightbulb, Target, Compass, Rocket } from "lucide-react";

const Consulting = () => {
  const whoItsFor = [
    "Organizations developing their AI strategy from scratch",
    "Companies with AI initiatives that aren't delivering expected value",
    "Leaders uncertain about AI priorities and investments",
    "Teams struggling with AI implementation challenges",
    "Executives seeking trusted advisors on AI decisions",
    "Organizations preparing for AI governance and compliance",
  ];

  const deliverables = [
    "AI strategy roadmap",
    "Opportunity assessment report",
    "Implementation playbooks",
    "Vendor evaluation framework",
    "Governance and ethics guidelines",
    "Change management plan",
    "Business case development",
    "Technology architecture review",
    "Organizational design recommendations",
  ];

  const timeline = [
    {
      phase: "Strategy Development",
      duration: "4-6 weeks",
      description:
        "Assess current state, identify opportunities, and develop a prioritized AI roadmap.",
    },
    {
      phase: "Implementation Planning",
      duration: "2-4 weeks",
      description:
        "Create detailed plans for priority initiatives including resourcing and risk mitigation.",
    },
    {
      phase: "Execution Support",
      duration: "Ongoing",
      description:
        "Hands-on guidance during implementation with regular checkpoints and course corrections.",
    },
    {
      phase: "Advisory Retainer",
      duration: "As needed",
      description:
        "Ongoing access to our team for strategic decisions, troubleshooting, and optimization.",
    },
  ];

  const faqs = [
    {
      question: "How is consulting different from your other services?",
      answer:
        "Consulting focuses on strategy, planning, and guidance rather than hands-on building. We help you make the right decisions and set up for success—you or your teams (or we) can handle implementation.",
    },
    {
      question: "Do you recommend specific vendors or technologies?",
      answer:
        "We provide objective recommendations based on your needs, not vendor relationships. Our goal is to help you make the best decisions, not push specific products.",
    },
    {
      question: "Can you help with organizational change, not just technology?",
      answer:
        "Absolutely. AI transformation is as much about people and process as technology. Our consulting includes change management, organizational design, and capability building recommendations.",
    },
    {
      question: "What if we already have an AI strategy that isn't working?",
      answer:
        "We can help diagnose what's not working and course-correct. Sometimes it's the strategy, sometimes it's execution. We'll help you figure out which and fix it.",
    },
    {
      question: "How do you structure advisory retainers?",
      answer:
        "Retainers typically include a set number of hours per month for on-demand advisory, plus regular strategy sessions. We tailor the structure to your needs.",
    },
  ];

  const engagementModels = [
    {
      icon: Compass,
      title: "Strategy Development",
      description:
        "Comprehensive AI strategy from assessment through roadmap with implementation planning.",
      duration: "6-10 weeks",
    },
    {
      icon: Target,
      title: "Implementation Advisory",
      description:
        "Hands-on guidance for teams executing AI initiatives, with expert oversight and troubleshooting.",
      duration: "3-6 months",
    },
    {
      icon: Rocket,
      title: "Executive Advisory",
      description:
        "On-demand access to senior advisors for strategic decisions and board-level guidance.",
      duration: "Ongoing retainer",
    },
  ];

  return (
    <SolutionPageTemplate
      badge="Consulting"
      title="Strategic AI"
      titleHighlight="Advisory"
      description="Expert guidance to navigate AI adoption—from strategy development through implementation and optimization."
      icon={Lightbulb}
      whatItIs="Our consulting practice helps organizations make smart AI decisions and execute effectively. We bring together strategic thinking, deep technical knowledge, and practical implementation experience to guide you from initial assessment through successful deployment. Whether you're just starting your AI journey or need to course-correct an existing program, we provide the expertise and objectivity to help you succeed."
      whoItsFor={whoItsFor}
      deliverables={deliverables}
      timeline={timeline}
      faqs={faqs}
    >
      {/* Engagement Models */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Engagement Models
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How We Work Together
            </h2>
            <p className="mt-4 text-muted-foreground">
              Flexible engagement models to match your needs and stage.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-8 card-shadow"
              >
                <model.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {model.title}
                </h3>
                <p className="mb-4 text-muted-foreground">{model.description}</p>
                <p className="text-sm font-medium text-primary">{model.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SolutionPageTemplate>
  );
};

export default Consulting;
