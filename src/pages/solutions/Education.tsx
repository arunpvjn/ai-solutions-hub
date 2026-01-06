import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { GraduationCap, BookOpen, Users, Monitor } from "lucide-react";

const Education = () => {
  const whoItsFor = [
    "Organizations launching AI initiatives and needing team readiness",
    "Technical teams looking to build hands-on AI development skills",
    "Executives wanting to understand AI's strategic implications",
    "Non-technical teams needing AI literacy for their roles",
    "HR and L&D leaders designing AI training programs",
    "Companies with AI tools but low adoption rates",
  ];

  const deliverables = [
    "Customized curriculum design",
    "Instructor-led workshop sessions",
    "Hands-on lab exercises",
    "Assessment and certification",
    "Reference materials and guides",
    "Train-the-trainer program",
    "Post-workshop support",
    "Progress tracking dashboard",
    "Recorded session access",
  ];

  const timeline = [
    {
      phase: "Needs Assessment",
      duration: "1-2 weeks",
      description:
        "Understand your team's current capabilities, learning goals, and organizational context.",
    },
    {
      phase: "Curriculum Design",
      duration: "2-3 weeks",
      description:
        "Develop customized content, exercises, and assessments tailored to your needs.",
    },
    {
      phase: "Delivery",
      duration: "Varies",
      description:
        "Live workshops, bootcamps, or cohort-based programs based on chosen format.",
    },
    {
      phase: "Reinforcement",
      duration: "4-8 weeks",
      description:
        "Follow-up sessions, office hours, and projects to ensure skills stick.",
    },
  ];

  const faqs = [
    {
      question: "Can training be customized for our specific industry?",
      answer:
        "Absolutely. We tailor examples, case studies, and exercises to your industry context. Healthcare teams get healthcare scenarios, finance teams get finance scenarios, and so on.",
    },
    {
      question: "What formats are available?",
      answer:
        "We offer half-day workshops, multi-day bootcamps, cohort-based programs (6-8 weeks), and ongoing learning subscriptions. We can also do hybrid in-person/virtual delivery.",
    },
    {
      question: "How do you measure learning outcomes?",
      answer:
        "We use pre/post assessments, practical project evaluations, and business impact metrics (where applicable). You'll have visibility into individual and team progress.",
    },
    {
      question: "Can you train our internal trainers?",
      answer:
        "Yes, our train-the-trainer programs equip your L&D team to deliver AI education internally, creating sustainable capability building within your organization.",
    },
    {
      question: "What's the ideal group size?",
      answer:
        "For hands-on workshops, we recommend 12-20 participants. Executive sessions work well with 8-15. Larger cohorts can be accommodated with additional support.",
    },
  ];

  const formats = [
    {
      icon: BookOpen,
      title: "Executive Sessions",
      duration: "Half-day",
      audience: "C-suite and senior leaders",
      description:
        "Strategic understanding of AI capabilities, risks, and organizational implications.",
    },
    {
      icon: Users,
      title: "Team Workshops",
      duration: "1-2 days",
      audience: "Functional teams",
      description:
        "Practical skills for using AI tools effectively in day-to-day work.",
    },
    {
      icon: Monitor,
      title: "Technical Bootcamps",
      duration: "3-5 days",
      audience: "Developers and data scientists",
      description:
        "Hands-on building with modern AI frameworks and architectures.",
    },
    {
      icon: GraduationCap,
      title: "Cohort Programs",
      duration: "6-8 weeks",
      audience: "Cross-functional teams",
      description:
        "Deep learning journey with projects, mentorship, and peer learning.",
    },
  ];

  const pricingTiers = [
    {
      tier: "Essentials",
      description: "Standard curriculum for common use cases",
      features: ["Pre-built content", "Up to 20 participants", "Basic customization", "Digital materials"],
    },
    {
      tier: "Professional",
      description: "Customized programs for specific needs",
      features: ["Tailored curriculum", "Up to 50 participants", "Industry customization", "Train-the-trainer option"],
    },
    {
      tier: "Enterprise",
      description: "Comprehensive organizational programs",
      features: ["Full custom design", "Unlimited participants", "Multi-track programs", "Ongoing support"],
    },
  ];

  return (
    <SolutionPageTemplate
      badge="Education & Workshops"
      title="Empower Your Team with"
      titleHighlight="AI Skills"
      description="Customized training programs that build real capability—from executive awareness to hands-on technical skills."
      icon={GraduationCap}
      whatItIs="Our education programs go beyond traditional training to create lasting capability change. We design learning experiences that meet people where they are—whether that's executives needing strategic understanding, practitioners wanting hands-on skills, or teams requiring AI literacy for their roles. Every program combines clear concepts, practical exercises, and real-world application to ensure skills transfer to daily work."
      whoItsFor={whoItsFor}
      deliverables={deliverables}
      timeline={timeline}
      faqs={faqs}
    >
      {/* Formats */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Formats
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Learning Formats
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose the format that fits your team's needs and schedule.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {formats.map((format, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 card-shadow"
              >
                <format.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-1 text-lg font-semibold text-card-foreground">
                  {format.title}
                </h3>
                <p className="mb-3 text-sm text-primary">{format.duration}</p>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {format.audience}
                </p>
                <p className="text-sm text-muted-foreground">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Investment
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pricing Tiers
            </h2>
            <p className="mt-4 text-muted-foreground">
              Flexible options to match your scope and budget.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-8 card-shadow"
              >
                <h3 className="text-xl font-semibold text-card-foreground">
                  {tier.tier}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
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

export default Education;
