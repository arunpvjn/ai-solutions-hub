import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import CTASection from "@/components/shared/CTASection";
import {
  ArrowRight,
  Bot,
  GraduationCap,
  Lightbulb,
  Shield,
  Lock,
  Users,
  Target,
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Bot,
      title: "Agentic AI Development",
      description:
        "Build autonomous AI agents that handle complex workflows, make decisions, and scale your operations intelligently.",
      href: "/solutions/agentic-ai",
      features: ["Custom agent architectures", "Multi-agent systems", "Production deployment"],
    },
    {
      icon: GraduationCap,
      title: "Education & Workshops",
      description:
        "Empower your teams with practical AI skills through customized training programs and hands-on workshops.",
      href: "/solutions/education",
      features: ["Executive education", "Technical bootcamps", "Team enablement"],
    },
    {
      icon: Lightbulb,
      title: "Consulting",
      description:
        "Strategic guidance for AI adoption—from initial assessment through implementation and optimization.",
      href: "/solutions/consulting",
      features: ["Strategy development", "Implementation support", "Advisory services"],
    },
    {
      icon: Shield,
      title: "Threat Modeling",
      description:
        "Identify and mitigate AI-specific security risks with comprehensive threat analysis and mitigation strategies.",
      href: "/solutions/threat-modeling",
      features: ["Risk assessment", "Attack surface analysis", "Security roadmaps"],
    },
    {
      icon: Lock,
      title: "Web Security Policy",
      description:
        "Protect your AI-powered applications with enterprise-grade security policies, WAF configuration, and API protection.",
      href: "/solutions/web-security",
      features: ["WAF/API security", "Bot management", "Governance frameworks"],
    },
    {
      icon: Users,
      title: "Leadership Development",
      description:
        "Prepare your executive team to lead effectively in the AI era with targeted development programs.",
      href: "/solutions/leadership",
      features: ["Executive coaching", "Team workshops", "Change leadership"],
    },
    {
      icon: Target,
      title: "Career Coaching",
      description:
        "Navigate your professional journey in AI with personalized coaching and career development support.",
      href: "/solutions/career-coaching",
      features: ["Career planning", "Skills development", "Job search strategy"],
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
              Our Solutions
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-up">
              Comprehensive <span className="text-gradient">AI Services</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up">
              From strategy to implementation, security to leadership—we provide
              end-to-end solutions for your AI journey.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Link key={index} to={solution.href} className="group">
                <div className="h-full rounded-xl border border-border bg-card p-8 transition-all duration-300 card-shadow hover:card-shadow-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Why Apex AI"
            title="What Sets Us Apart"
            description="We combine technical excellence with a genuine commitment to your success."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Deep Expertise</h3>
              <p className="text-muted-foreground">
                Our team includes PhDs, industry veterans, and practitioners who've
                built AI systems at scale.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Proven Results</h3>
              <p className="text-muted-foreground">
                We've delivered transformative outcomes for 50+ enterprise clients
                across 15+ industries.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">True Partnership</h3>
              <p className="text-muted-foreground">
                We're invested in your long-term success, not just project
                completion. Knowledge transfer is built into everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Not Sure Where to Start?"
        description="Book a free consultation call to discuss your challenges and explore which solutions might be right for you."
        buttonText="Schedule a Call"
      />
    </>
  );
};

export default Solutions;
