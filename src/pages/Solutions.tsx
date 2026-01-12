import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/shared/CTASection";
import {
  ArrowRight,
  Briefcase,
  Users,
  Bot,
  Shield,
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Briefcase,
      title: "Implementation Consulting",
      description:
        "Strategic guidance and hands-on delivery for enterprise AI, security, and customer success initiatives.",
    },
    {
      icon: Users,
      title: "Leadership Coaching & Mentoring",
      description:
        "Executive coaching and mentorship for leaders navigating technology-driven transformation.",
    },
    {
      icon: Bot,
      title: "Agent-Augmented Customer Success",
      description:
        "Design and deploy AI-powered systems that enhance customer outcomes while preserving human judgment.",
    },
    {
      icon: Shield,
      title: "Agent-Augmented Security",
      description:
        "Integrate intelligent security workflows that protect your organization without slowing your teams.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent via-background to-background" />
        <div className="container-custom relative py-20 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground animate-fade-in">
              Our Services
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-up">
              Focused <span className="text-gradient">Enterprise Solutions</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up">
              Four core offerings designed to help your organization succeed through 
              implementation consulting, leadership coaching, and agent-augmented systems.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-8 transition-all duration-300 card-shadow hover:card-shadow-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {solution.title}
                </h3>
                <p className="mb-6 text-muted-foreground">{solution.description}</p>
                <Link to="/contact">
                  <Button variant="outline" size="sm">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Not Sure Where to Start?"
        description="Book a consultation to discuss your challenges and explore which solutions are right for you."
        buttonText="Schedule a Call"
      />
    </>
  );
};

export default Solutions;