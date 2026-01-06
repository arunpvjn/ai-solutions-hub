import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import CTASection from "@/components/shared/CTASection";
import {
  ArrowRight,
  Bot,
  GraduationCap,
  Lightbulb,
  Shield,
  Users,
  CheckCircle,
  Building2,
  Zap,
  Target,
} from "lucide-react";

const Index = () => {
  const coreOfferings = [
    {
      icon: Bot,
      title: "Agentic AI Development",
      description:
        "Build intelligent, autonomous systems that solve complex problems and scale your operations.",
      href: "/solutions/agentic-ai",
    },
    {
      icon: GraduationCap,
      title: "Education & Workshops",
      description:
        "Empower your teams with practical AI skills through hands-on training programs.",
      href: "/solutions/education",
    },
    {
      icon: Lightbulb,
      title: "Strategic Consulting",
      description:
        "Navigate AI adoption with expert guidance on strategy, implementation, and governance.",
      href: "/solutions/consulting",
    },
  ];

  const proofPoints = [
    { metric: "20+", label: "Projects Delivered" },
    { metric: "50+", label: "AI Systems Built" },
    { metric: "100%", label: "Client Retention" },
    { metric: "8+", label: "Industries Served" },
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

  const caseStudies = [
    {
      company: "E-commerce Startup",
      industry: "Retail",
      result: "40% reduction in support tickets",
      solution: "Deployed intelligent chatbot for customer inquiries",
    },
    {
      company: "Healthcare Clinic",
      industry: "Healthcare",
      result: "60% faster documentation",
      solution: "AI-assisted clinical transcription workflow",
    },
    {
      company: "Fintech Company",
      industry: "Finance",
      result: "3x faster fraud detection",
      solution: "ML-powered anomaly detection system",
    },
  ];

  const testimonials = [
    {
      quote:
        "Aevum Solutions delivered exactly what we needed—a smart, practical AI solution that actually works for our team.",
      author: "Jennifer Morrison",
      role: "CTO",
      company: "TechScale Startup",
    },
    {
      quote:
        "The workshops were a game-changer. Our team went from AI-curious to AI-confident in just two weeks.",
      author: "Michael Chen",
      role: "VP Engineering",
      company: "DataFlow Systems",
    },
    {
      quote:
        "Working with a boutique firm meant personalized attention and solutions tailored to our exact needs.",
      author: "Sarah Williams",
      role: "Founder",
      company: "Horizon Wellness",
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
              Transform Your Business with{" "}
              <span className="text-gradient">Intelligent AI</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up">
              We help organizations harness artificial intelligence responsibly and
              effectively—building systems that augment human capability, not replace
              it.
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

      {/* Proof Points */}
      <section className="border-y border-border bg-secondary py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {proofPoints.map((point, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-primary sm:text-4xl">
                  {point.metric}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="What We Do"
            title="AI Solutions That Drive Real Results"
            description="From strategy to implementation, we provide comprehensive AI services tailored to your unique challenges."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {coreOfferings.map((offering, index) => (
              <FeatureCard key={index} {...offering} />
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
            description="A collaborative approach that ensures your AI initiatives succeed."
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

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Success Stories"
            title="Featured Projects"
            description="See how we've helped organizations across industries achieve transformative results."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 card-shadow hover:card-shadow-hover"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {study.industry}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {study.company}
                </h3>
                <p className="mb-4 text-2xl font-bold text-primary">
                  {study.result}
                </p>
                <p className="text-sm text-muted-foreground">{study.solution}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/resources">
              <Button variant="outline" size="lg">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            badge="Specialized Services"
            title="Comprehensive AI & Security Expertise"
            description="Beyond development and consulting, we offer specialized services to protect and grow your organization."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Shield}
              title="Threat Modeling"
              description="Identify and mitigate AI-specific security risks before they become problems."
              href="/solutions/threat-modeling"
            />
            <FeatureCard
              icon={Zap}
              title="Web Security Policy"
              description="Protect your AI endpoints with enterprise-grade WAF, API security, and bot management."
              href="/solutions/web-security"
            />
            <FeatureCard
              icon={Users}
              title="Leadership Development"
              description="Prepare your executives to lead effectively in the AI era."
              href="/solutions/leadership"
            />
            <FeatureCard
              icon={Target}
              title="Career Coaching"
              description="Navigate your professional journey in the rapidly evolving AI landscape."
              href="/solutions/career-coaching"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Client Voices"
            title="What Our Clients Say"
            description="Don't just take our word for it—hear from the organizations we've partnered with."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                Our Principles
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                AI-First, But Always Human-Centric
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We believe the best AI solutions enhance human potential rather than
                diminish it. Every system we build, every strategy we develop, and
                every workshop we deliver is designed with people at the center.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Ethical by design—we build responsible AI",
                  "Service-minded—your success is our mission",
                  "Transparent—no black boxes, no hidden agendas",
                  "Collaborative—we work with you, not just for you",
                ].map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-card-foreground">{value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/who-we-are">
                  <Button variant="outline">
                    Learn About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-primary p-1">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-card">
                  <div className="p-8 text-center">
                    <Bot className="mx-auto h-24 w-24 text-primary" />
                    <p className="mt-6 text-xl font-semibold text-card-foreground">
                      Technology serves people,
                      <br />
                      never the other way around.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Index;
