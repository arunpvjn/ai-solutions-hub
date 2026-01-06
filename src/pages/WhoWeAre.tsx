import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Shield,
  Users,
  Lightbulb,
} from "lucide-react";

const WhoWeAre = () => {
  const principles = [
    {
      icon: Heart,
      title: "Human-Centric",
      description:
        "Every solution we build amplifies human capability. We design AI that empowers people, not replaces them.",
    },
    {
      icon: Shield,
      title: "Ethical by Design",
      description:
        "Responsible AI isn't an afterthought—it's embedded in our process from day one. Privacy, fairness, and transparency guide every decision.",
    },
    {
      icon: Users,
      title: "Service-Minded",
      description:
        "Your mission becomes our mission. We're not just vendors—we're partners invested in your long-term success.",
    },
    {
      icon: Lightbulb,
      title: "Practical Innovation",
      description:
        "We balance cutting-edge capabilities with pragmatic implementation. Innovation should solve real problems, not create new ones.",
    },
  ];


  const operatingModel = [
    {
      title: "Embedded Partnerships",
      description:
        "We integrate with your teams, not just your systems. Our consultants work alongside your people, ensuring knowledge transfer and sustainable capability building.",
    },
    {
      title: "Outcome-Focused Engagement",
      description:
        "We structure our work around measurable outcomes, not billable hours. Your success metrics define our success.",
    },
    {
      title: "Scalable Delivery",
      description:
        "From proof-of-concept to enterprise rollout, our delivery model adapts to your pace and scale requirements.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent via-background to-background" />
        <div className="container-custom relative py-20 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground animate-fade-in">
              Who We Are
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-up">
              AI-First. <span className="text-gradient">Human-Centric.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up">
              We're a boutique consultancy founded on the belief that artificial 
              intelligence should serve humanity's highest aspirations—delivered with 
              personalized attention and deep expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              To democratize access to transformative AI capabilities while ensuring
              these technologies are developed and deployed responsibly—creating a
              future where artificial intelligence amplifies human potential across
              every organization and community.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="Principles That Guide Us"
            description="These aren't just words on a wall. They're the decision-making framework we apply to every project, every day."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-8 card-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <principle.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                Leadership
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Founded on Experience, Driven by Purpose
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Aevum Solutions was founded by Arun, a technologist with deep experience 
                in AI systems, security, and organizational transformation. After years 
                of helping large organizations navigate digital change, he started this 
                practice to bring enterprise-grade expertise to organizations of all sizes.
              </p>
              <p className="mt-4 text-muted-foreground">
                The boutique model means you work directly with an expert—not junior 
                consultants. Every engagement gets hands-on attention and solutions 
                tailored to your specific context and goals.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "15+ years in AI and software development",
                  "Security and threat modeling specialist",
                  "Leadership coach and educator",
                  "Track record across multiple industries",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-card-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-primary p-1">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-card">
                  <div className="text-center p-8">
                    <div className="mx-auto h-32 w-32 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-4xl font-bold text-accent-foreground">A</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                      Arun
                    </h3>
                    <p className="text-muted-foreground">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="How We Work"
            title="Our Operating Model"
            description="We've designed our delivery approach around what actually creates lasting value for our clients."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {operatingModel.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-8 card-shadow"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <CTASection
        title="Ready to Partner With Us?"
        description="Let's explore how we can help your organization achieve its AI ambitions."
      />
    </>
  );
};

export default WhoWeAre;
