import CTASection from "@/components/shared/CTASection";
import {
  Target,
  Users,
  Shield,
  Lightbulb,
  Scale,
  GraduationCap,
  Award,
} from "lucide-react";

const WhoWeAre = () => {
  const differentiators = [
    {
      title: "Operator-led, not slide-led",
      description:
        "Our guidance comes from direct experience building, running, and scaling enterprise platforms—not just advising on them.",
    },
    {
      title: "Enterprise rigor with founder pragmatism",
      description:
        "We bring the discipline of large-scale operations with the speed and flexibility that growth-stage companies need.",
    },
    {
      title: "Human-in-the-loop by design",
      description:
        "Every system we design keeps human judgment at the center—augmenting decisions, never replacing accountability.",
    },
  ];

  const principles = [
    {
      icon: Users,
      title: "Augmentation Over Automation",
      description:
        "We build systems that make people more capable, not redundant. Technology should amplify human expertise, not substitute for it.",
    },
    {
      icon: Target,
      title: "Outcomes Before Technology",
      description:
        "The goal is never the tool—it's the result. We start with what you need to achieve and work backward to the right solution.",
    },
    {
      icon: Shield,
      title: "Security, Trust, and Safety by Design",
      description:
        "Protection isn't a feature we add later. It's built into every layer of architecture, process, and decision-making.",
    },
    {
      icon: Lightbulb,
      title: "Clarity Beats Complexity",
      description:
        "Simple, well-understood systems outperform clever ones. We favor transparency and maintainability over sophistication.",
    },
    {
      icon: Scale,
      title: "Human Judgment Is Non-Negotiable",
      description:
        "AI informs decisions; humans make them. We design for accountability, not abdication.",
    },
    {
      icon: GraduationCap,
      title: "Teach, Don't Create Dependency",
      description:
        "Our goal is to make your team more capable, not more reliant on us. Knowledge transfer is built into every engagement.",
    },
    {
      icon: Award,
      title: "Earn Trust Through Substance",
      description:
        "No hype, no buzzwords. We demonstrate value through consistent delivery, honest communication, and measurable results.",
    },
  ];

  return (
    <>
      {/* Hero / Intro Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/30 via-background to-background" />
        <div className="container-custom relative py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Human-centered AI. Practical security.{" "}
              <span className="text-primary">Leaders who last.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground sm:text-2xl font-medium">
              A founder-led advisory and implementation practice focused on
              agent-augmented customer success, security, and leadership systems.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Led by a former Senior Director of Professional Services and Director
              of Solutions Architecture at Akamai, with decades of experience
              delivering and scaling enterprise security, performance, and
              customer-facing platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are (Main Body) */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Who We Are
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Aevum Solutions is a boutique, founder-led advisory and
                implementation practice. We work with enterprise buyers, security
                leaders, customer success executives, and experienced founders who
                need more than frameworks—they need partners who've built and run
                what they're trying to build.
              </p>
              <p>
                Our founder brings direct leadership experience from Akamai, where
                he served as Senior Director of Professional Services and Director
                of Solutions Architecture. That background spans application
                security, API protection, performance platforms, and large-scale
                customer success organizations—all delivered at enterprise scale,
                in production, with real accountability.
              </p>
              <p>
                Today, we operate at the intersection of human judgment and agentic
                AI. We help organizations design systems that augment their teams,
                protect their customers, and deliver measurable outcomes—without
                sacrificing the human expertise that makes those outcomes possible.
              </p>
              <p>
                This isn't a solo consulting practice. It's a scalable, trusted
                partner built to embed with your teams and deliver results that
                last beyond any single engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Our Mission
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-foreground font-medium">
              "To help teams deliver better outcomes by combining human judgment,
              ethical leadership, and practical AI—so work becomes more effective,
              resilient, and humane."
            </p>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              We focus on augmentation, not replacement. Measurable outcomes, not
              endless experimentation. Long-term sustainability, not short-term
              fixes. Our work protects customers, data, trust, and the business
              results that depend on all three.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground text-center">
              What Makes Us Different
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles That Guide Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground text-center">
              Principles That Guide Us
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <principle.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Work Together?"
        description="Let's discuss how we can help your organization achieve its goals."
      />
    </>
  );
};

export default WhoWeAre;
