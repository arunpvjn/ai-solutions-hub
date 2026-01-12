import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import {
  ArrowRight,
  Briefcase,
  Users,
  Bot,
  Shield,
} from "lucide-react";

const Index = () => {
  const offerings = [
    {
      icon: Briefcase,
      title: "Implementation Consulting",
      description:
        "Strategic guidance and hands-on delivery for enterprise AI, security, and customer success initiatives.",
      href: "/solutions",
    },
    {
      icon: Users,
      title: "Leadership Coaching & Mentoring",
      description:
        "Executive coaching and mentorship for leaders navigating technology-driven transformation.",
      href: "/solutions",
    },
    {
      icon: Bot,
      title: "Agent-Augmented Customer Success",
      description:
        "Design and deploy AI-powered systems that enhance customer outcomes while preserving human judgment.",
      href: "/solutions",
    },
    {
      icon: Shield,
      title: "Agent-Augmented Security",
      description:
        "Integrate intelligent security workflows that protect your organization without slowing your teams.",
      href: "/solutions",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We understand your challenges, goals, and current capabilities through deep conversations.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Together, we design a roadmap that aligns AI initiatives with your business objectives.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "Our team develops and deploys solutions with your stakeholders involved at every stage.",
    },
    {
      step: "04",
      title: "Evolve",
      description:
        "We measure impact, iterate on learnings, and prepare your team for long-term success.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent via-background to-background" />
        <div className="container-custom relative py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground animate-fade-in">
              AI-First, Human-Centric
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
              Enterprise Advisory for the{" "}
              <span className="text-gradient">AI Era</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up">
              We help organizations succeed through implementation consulting, leadership coaching, and agent-augmented systems for customer success and security.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Schedule a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="heroOutline" size="lg">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="What We Do"
            title="Focused Expertise for Enterprise Success"
            description="Four core offerings designed to deliver measurable outcomes for your organization."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offering, index) => (
              <Link key={index} to={offering.href} className="group">
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 card-shadow hover:card-shadow-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <offering.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{offering.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            description="A collaborative approach that ensures your initiatives succeed."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-xl bg-card p-6 card-shadow"
              >
                <span className="mb-4 inline-block text-4xl font-bold text-primary/20">
                  {step.step}
                </span>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Index;