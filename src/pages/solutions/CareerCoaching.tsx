import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Target, Compass, Briefcase, TrendingUp } from "lucide-react";

const CareerCoaching = () => {
  const whoItsFor = [
    "Professionals looking to transition into AI roles",
    "Technical practitioners wanting to advance in AI careers",
    "Leaders seeking to understand AI career paths",
    "Career changers exploring AI opportunities",
    "Recent graduates entering the AI job market",
    "Professionals displaced by AI automation",
  ];

  const deliverables = [
    "Career vision and goal setting",
    "Skills gap assessment",
    "Personalized development plan",
    "Resume and portfolio review",
    "Interview preparation",
    "Networking strategy",
    "Salary negotiation coaching",
    "Ongoing career guidance",
    "Industry connections and referrals",
  ];

  const timeline = [
    {
      phase: "Discovery",
      duration: "1-2 sessions",
      description:
        "Understand your background, aspirations, and current situation.",
    },
    {
      phase: "Assessment & Planning",
      duration: "2-3 sessions",
      description:
        "Analyze skills gaps and create a personalized development roadmap.",
    },
    {
      phase: "Skill Building",
      duration: "Ongoing",
      description:
        "Guided skill development with resources and accountability.",
    },
    {
      phase: "Job Search Support",
      duration: "As needed",
      description:
        "Resume review, interview prep, and negotiation coaching.",
    },
  ];

  const faqs = [
    {
      question: "Do I need a technical background to transition to AI?",
      answer:
        "Not necessarily. There are many AI-adjacent roles that value domain expertise, communication skills, and strategic thinking. We help you find the path that fits your background.",
    },
    {
      question: "How long does a typical career transition take?",
      answer:
        "It varies widely based on your starting point and target role. Some transitions can happen in 3-6 months; others may take 1-2 years of skill building. We help you set realistic timelines.",
    },
    {
      question: "Can you guarantee job placement?",
      answer:
        "We don't guarantee placement, but we significantly improve your chances through targeted skill development, strong positioning, and interview preparation. Our clients have strong success rates.",
    },
    {
      question: "What if I'm not sure what AI role is right for me?",
      answer:
        "That's exactly where coaching helps. We explore your interests, strengths, and market opportunities to identify roles that are both achievable and fulfilling.",
    },
    {
      question: "Do you offer group coaching?",
      answer:
        "Yes, we offer cohort-based programs that combine individual coaching with peer learning. These are often more affordable and provide valuable networking opportunities.",
    },
  ];

  const services = [
    {
      icon: Compass,
      title: "Career Exploration",
      description:
        "Discover AI career paths that align with your interests, skills, and goals.",
    },
    {
      icon: Target,
      title: "Skill Development",
      description:
        "Structured learning plans with resources, milestones, and accountability.",
    },
    {
      icon: Briefcase,
      title: "Job Search Strategy",
      description:
        "Positioning, resume optimization, networking, and interview mastery.",
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description:
        "Navigate promotions, transitions, and leadership growth in AI roles.",
    },
  ];

  const outcomes = [
    { metric: "85%", label: "Clients achieve career goals within 12 months" },
    { metric: "40%", label: "Average salary increase for career changers" },
    { metric: "3x", label: "Interview success rate improvement" },
    { metric: "90%", label: "Client satisfaction rating" },
  ];

  return (
    <SolutionPageTemplate
      badge="Career Coaching"
      title="Navigate Your"
      titleHighlight="AI Career"
      description="Personalized coaching to help you build a successful career in the rapidly evolving AI landscape."
      icon={Target}
      whatItIs="The AI field is evolving rapidly, creating both tremendous opportunities and significant uncertainty. Our career coaching helps you navigate this landscape—whether you're transitioning into AI, advancing in an existing AI role, or simply trying to stay relevant as AI transforms your industry. We combine deep knowledge of the AI job market with proven coaching methodologies to help you achieve your career goals."
      whoItsFor={whoItsFor}
      deliverables={deliverables}
      timeline={timeline}
      faqs={faqs}
    >
      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Services
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How We Help
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 card-shadow"
              >
                <service.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Results
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Client Outcomes
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary">{outcome.metric}</p>
                <p className="mt-2 text-muted-foreground">{outcome.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Career Paths */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                Opportunities
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                AI Career Paths We Support
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "AI/ML Engineer",
                "Data Scientist",
                "AI Product Manager",
                "AI Ethics & Governance",
                "AI Solutions Architect",
                "AI Trainer / Educator",
                "AI Business Analyst",
                "AI Research Scientist",
                "Prompt Engineer",
                "AI Operations Specialist",
              ].map((path, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg bg-card p-4 card-shadow"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-card-foreground">{path}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SolutionPageTemplate>
  );
};

export default CareerCoaching;
