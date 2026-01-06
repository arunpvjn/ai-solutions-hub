import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Users, Compass, Star, Brain } from "lucide-react";

const Leadership = () => {
  const whoItsFor = [
    "C-suite executives leading AI transformation",
    "Senior leaders responsible for AI strategy and adoption",
    "Managers leading teams through technological change",
    "Board members seeking AI literacy and governance understanding",
    "Functional leaders integrating AI into their domains",
    "Emerging leaders preparing for future technology roles",
  ];

  const deliverables = [
    "Leadership assessment and development plan",
    "Executive coaching sessions",
    "Team offsite facilitation",
    "Leadership toolkit and frameworks",
    "360-degree feedback analysis",
    "Change leadership playbook",
    "Executive presentation coaching",
    "Board readiness preparation",
    "Leadership team alignment sessions",
  ];

  const timeline = [
    {
      phase: "Assessment",
      duration: "1-2 weeks",
      description:
        "Evaluate current leadership capabilities and development needs.",
    },
    {
      phase: "Development Design",
      duration: "1-2 weeks",
      description:
        "Create personalized development plans aligned with organizational goals.",
    },
    {
      phase: "Coaching & Development",
      duration: "3-6 months",
      description:
        "Ongoing coaching, workshops, and experiential learning.",
    },
    {
      phase: "Integration & Sustainability",
      duration: "Ongoing",
      description:
        "Embed new capabilities and ensure lasting behavior change.",
    },
  ];

  const faqs = [
    {
      question: "How is this different from general leadership development?",
      answer:
        "We focus specifically on leading in the AI era—understanding AI capabilities, managing AI-augmented teams, making AI investment decisions, and navigating AI ethics and governance.",
    },
    {
      question: "Do leaders need technical AI knowledge?",
      answer:
        "They need enough understanding to ask the right questions and make informed decisions, but not deep technical expertise. We help leaders find the right level of AI fluency for their role.",
    },
    {
      question: "Can you work with entire leadership teams?",
      answer:
        "Yes, team development is often more effective than individual coaching alone. We offer team workshops, offsites, and alignment sessions alongside individual development.",
    },
    {
      question: "How do you measure development outcomes?",
      answer:
        "We use 360-degree assessments, behavioral indicators, and business outcome metrics. Development isn't valuable unless it translates to improved performance.",
    },
    {
      question: "What about board-level development?",
      answer:
        "We offer board education sessions on AI governance, risk, and opportunity. Boards increasingly need AI literacy to fulfill their oversight responsibilities.",
    },
  ];

  const programs = [
    {
      icon: Star,
      title: "Executive Coaching",
      description:
        "One-on-one coaching for senior leaders navigating AI transformation.",
      duration: "6-12 month engagements",
    },
    {
      icon: Users,
      title: "Team Development",
      description:
        "Build aligned, AI-fluent leadership teams ready to drive change.",
      duration: "Multi-session programs",
    },
    {
      icon: Compass,
      title: "Board Education",
      description:
        "Equip board members with AI knowledge for effective governance.",
      duration: "Half-day or full-day sessions",
    },
    {
      icon: Brain,
      title: "Emerging Leader Program",
      description:
        "Prepare high-potential leaders for AI-era leadership roles.",
      duration: "3-6 month cohorts",
    },
  ];

  return (
    <SolutionPageTemplate
      badge="Leadership Development"
      title="Lead Effectively in the"
      titleHighlight="AI Era"
      description="Develop the leadership capabilities your organization needs to thrive in an AI-transformed world."
      icon={Users}
      whatItIs="The AI transformation demands new leadership capabilities—the ability to make strategic AI decisions, lead AI-augmented teams, navigate ethical complexities, and drive organizational change. Our leadership development programs help executives and emerging leaders build these capabilities through coaching, experiential learning, and practical application. We focus not just on understanding AI, but on leading with AI."
      whoItsFor={whoItsFor}
      deliverables={deliverables}
      timeline={timeline}
      faqs={faqs}
    >
      {/* Programs */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Programs
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Development Programs
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 card-shadow"
              >
                <program.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {program.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {program.description}
                </p>
                <p className="text-xs font-medium text-primary">{program.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Competencies */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                Competencies
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                AI Leadership Competencies
              </h2>
              <p className="mt-4 text-muted-foreground">
                The capabilities we help leaders develop.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "Strategic AI vision and decision-making",
                "Leading AI-augmented teams",
                "AI ethics and responsible use",
                "Change leadership for AI adoption",
                "AI risk assessment and governance",
                "Stakeholder communication on AI",
                "Building AI-ready culture",
                "Cross-functional AI collaboration",
              ].map((competency, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg bg-card p-4 card-shadow"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-card-foreground">{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SolutionPageTemplate>
  );
};

export default Leadership;
