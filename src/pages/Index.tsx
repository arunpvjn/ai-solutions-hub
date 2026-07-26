import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { Target, GitBranch, Layers, Activity, Compass } from "lucide-react";

const SUBSTACK_URL = "https://arunvijayan.substack.com/";

const offerings = [
  {
    title: "Post-Sales AI Readiness Diagnostic",
    tagline: "A decision-ready map of where AI agents will and won't move the needle in your post-sales function.",
    bestFor: "Founders or post-sales leaders considering agent investment but not yet committed to a build path.",
    scope:
      "2–4 week fixed-scope engagement. Stakeholder interviews, workflow audit, opportunity sizing against the headcount alternative, build-vs-buy framing, and a sequenced roadmap.",
    deliverables: [
      "Current-state post-sales workflow map",
      "AI augmentation opportunity matrix (PS implementation, CS health, renewals, escalations)",
      "ROI model vs. continued headcount scaling",
      "Sequenced 6–12 month roadmap",
    ],
    engagement: "Fixed-scope engagement, 2–4 weeks.",
  },
  {
    title: "Post-Sales Operating Model Blueprint",
    tagline: "The spec your engineering team builds against.",
    bestFor:
      "Teams that have decided to build agent-augmented post-sales and need the operating model designed before code gets written.",
    scope:
      "4–8 week engagement. Workflow design, signal logic, escalation paths, human-agent handoff protocols, and the success metrics agents should optimize for. Scope can be CS-focused, PS-focused, or full post-sales.",
    deliverables: [
      "Detailed workflow maps per persona (CSM, PS engineer, implementation lead, escalation manager)",
      "Signal and health-score definitions",
      "Escalation logic and review cadences",
      "Agent specification document handed to your engineering team",
    ],
    engagement: "Project engagement, 4–8 weeks.",
  },
  {
    title: "Embedded Post-Sales Advisor",
    tagline: "Fractional senior operator for growth-stage post-sales leadership.",
    bestFor: "Founders or CROs scaling a CS/PS function and protecting ARR without proportional headcount.",
    scope:
      "1–3 days per week, embedded. Operating cadence design, leader coaching, hiring frameworks, escalation triage, and ongoing redesign of the human-agent operating model as the function grows. The goal is to ready the team for the arrival of an FTE leader, not to create ongoing dependency.",
    deliverables: [
      "Weekly leadership cadence and monthly review",
      "Operating model iteration as the team scales",
      "Hiring scorecards and onboarding frameworks",
      "Ongoing advisory across CS, PS, and revenue protection",
    ],
    engagement: "3 month minimum, 1–3 days per week.",
  },
];

const fitItems = [
  {
    icon: Target,
    text: "You're an engineering-led founder (Series A–C, B2B SaaS) and post-sales is the next scaling bottleneck.",
  },
  {
    icon: GitBranch,
    text: "You're a VP of CS or PS at a growth-stage company under margin pressure to scale without proportional headcount.",
  },
  {
    icon: Layers,
    text: "Your technical post-sales motion (implementation, integration, escalation) is the long pole in time-to-value.",
  },
  { icon: Activity, text: "You want an operator's perspective on agent design, not a vendor's." },
  { icon: Compass, text: "You'd rather pay for sharp thinking and a clear spec than a retainer that produces decks." },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aevum Solutions — AI-augmented post-sales operating models</title>
        <meta
          name="description"
          content="Independent advisory for B2B post-sales leaders. AI-augmented operating models, agent workflows, and escalation logic, implementation through renewal. Designed by an operator who's run them at enterprise scale."
        />
        <link rel="canonical" href="https://www.aevumsolutions.xyz/" />
        <meta property="og:title" content="Aevum Solutions — AI-augmented post-sales operating models" />
        <meta
          property="og:description"
          content="Independent advisory for B2B post-sales leaders. AI-augmented operating models, agent workflows, and escalation logic, implementation through renewal. Designed by an operator who's run them at enterprise scale."
        />
        <meta property="og:url" content="https://www.aevumsolutions.xyz/" />
      </Helmet>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-custom py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              AI-augmented post-sales, designed by someone who's run it.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Operating models, agent workflows, and escalation logic for B2B post-sales teams — implementation through
              renewal — without scaling headcount linearly.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Book a 30-min intro
                </Button>
              </Link>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Read recent writing →
              </a>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-sm italic text-muted-foreground">
              Independent advisory based in Austin, TX. Working with engineering-led B2B SaaS founders and growth-stage
              post-sales leaders.
            </p>
          </div>
        </div>
      </section>

      {/* The wedge */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            badge="THE WEDGE"
            title="Engineering teams can build the agents. Knowing what the agents should do is the harder problem."
          />
          <div className="mx-auto max-w-[680px] space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Most AI-for-CS and AI-for-PS efforts get the orchestration right and the operating model wrong. Workflows
              reflect how the team works today, not how it should work when half the toil is automated. Escalation logic
              gets built without the lived knowledge of which escalations actually save a renewal. Signal definitions
              get borrowed from a vendor template instead of designed against the specific business.
            </p>
            <p>
              What's usually missing isn't engineering — it's an operator who's run technical post-sales at scale and
              can tell you, with conviction, where agents create real leverage, where they fail, and how to structure
              the human-agent division of labor so revenue is protected, not theatrically defended.
            </p>
          </div>
        </div>
      </section>

      {/* Three offerings */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="WHAT WE DO"
            title="Three ways to work together"
            description="From a fixed-scope diagnostic to an embedded advisory engagement."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {offerings.map((o) => (
              <div key={o.title} className="flex flex-col rounded-xl border border-border bg-card p-9">
                <h3 className="text-xl font-semibold text-card-foreground">{o.title}</h3>
                <p className="mt-3 text-sm italic text-muted-foreground">{o.tagline}</p>
                <p className="mt-5 text-sm text-muted-foreground">
                  <span className="font-medium text-card-foreground">Best for: </span>
                  {o.bestFor}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{o.scope}</p>
                <div className="mt-5">
                  <p className="text-sm font-medium text-card-foreground">Deliverables:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {o.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 text-sm font-semibold text-foreground">{o.engagement}</p>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Discuss this engagement →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="FIT" title="Best fit when…" />
          <div className="mx-auto max-w-4xl">
            <ul className="grid gap-6 md:grid-cols-2">
              {fitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-base text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-10 max-w-3xl text-sm italic text-muted-foreground">
              Less of a fit: organizations looking for a generalist AI consultant, agent implementation services, or
              off-the-shelf CS playbooks. The work here is on the operating model and the spec; your team or your
              platform partner builds.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="A 30-minute call is the cheapest way to find out if this fits."
        description="Or email contact@aevumsolutions.xyz."
        buttonText="Book a 30-min intro"
      />
    </>
  );
};

export default Index;
