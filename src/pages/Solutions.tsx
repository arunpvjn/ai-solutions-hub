import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/shared/CTASection";

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
    engagement: "2–4 weeks, fixed fee from $20K.",
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
    engagement: "4–8 weeks, project fee from $35K.",
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
    engagement: "3–6 month minimum. Retainer from $15K/month.",
  },
];

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Advisory Services — Aevum Solutions</title>
        <meta name="description" content="Three engagement models: Post-Sales AI Readiness Diagnostic, Operating Model Blueprint, and Embedded Post-Sales Advisor." />
        <link rel="canonical" href="https://www.aevumsolutions.xyz/solutions" />
        <meta property="og:title" content="Advisory Services — Aevum Solutions" />
        <meta property="og:description" content="Three engagement models: Post-Sales AI Readiness Diagnostic, Operating Model Blueprint, and Embedded Post-Sales Advisor." />
        <meta property="og:url" content="https://www.aevumsolutions.xyz/solutions" />
      </Helmet>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-custom py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Three ways to work together.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              From a fixed-scope diagnostic to an embedded advisory engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings stacked */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl space-y-10">
            {offerings.map((o) => (
              <div key={o.title} className="rounded-xl border border-border bg-card p-10">
                <h2 className="text-2xl font-semibold text-card-foreground sm:text-3xl">{o.title}</h2>
                <p className="mt-3 text-base italic text-muted-foreground">{o.tagline}</p>
                <p className="mt-6 text-base text-muted-foreground">
                  <span className="font-medium text-card-foreground">Best for: </span>
                  {o.bestFor}
                </p>
                <p className="mt-4 text-base text-muted-foreground">{o.scope}</p>
                <div className="mt-6">
                  <p className="text-base font-medium text-card-foreground">Deliverables:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-base text-muted-foreground">
                    {o.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-8 text-base font-semibold text-foreground">{o.engagement}</p>
                <div className="mt-6">
                  <Link to="/contact">
                    <Button variant="outline" size="sm">
                      Discuss this engagement
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which fits?"
        description="A 30-minute call is the fastest way to find out."
        buttonText="Book a 30-min intro"
      />
    </>
  );
};

export default Solutions;
