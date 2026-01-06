import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/shared/CTASection";
import FAQSection from "@/components/shared/FAQSection";
import { ArrowRight, CheckCircle, Clock, LucideIcon } from "lucide-react";

interface SolutionPageTemplateProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  icon: LucideIcon;
  whatItIs: string;
  whoItsFor: string[];
  deliverables: string[];
  timeline: { phase: string; duration: string; description: string }[];
  faqs: { question: string; answer: string }[];
  children?: ReactNode;
}

const SolutionPageTemplate = ({
  badge,
  title,
  titleHighlight,
  description,
  icon: Icon,
  whatItIs,
  whoItsFor,
  deliverables,
  timeline,
  faqs,
  children,
}: SolutionPageTemplateProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-background to-background" />
        <div className="container-custom relative py-20 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground animate-fade-in">
              {badge}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-up">
              {title} <span className="text-gradient">{titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up">
              {description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="heroOutline" size="lg">
                  View All Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                Overview
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What It Is
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {whatItIs}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-2xl bg-gradient-primary p-1">
                <div className="flex h-64 w-64 items-center justify-center rounded-xl bg-card">
                  <Icon className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Ideal For
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Who It's For
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {whoItsFor.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg bg-card p-4 card-shadow"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Content */}
      {children}

      {/* Deliverables */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              What You Get
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Typical Deliverables
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 card-shadow"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-lg font-bold text-accent-foreground">
                  {index + 1}
                </div>
                <p className="font-medium text-card-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Timeline
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sample Engagement Timeline
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement is unique, but here's a typical structure.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 rounded-xl border border-border bg-card p-6 card-shadow"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {item.phase}
                      </h3>
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                        {item.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how we can help you achieve your goals."
      />
    </>
  );
};

export default SolutionPageTemplate;
