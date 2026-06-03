import CTASection from "@/components/shared/CTASection";

const WhoWeAre = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-custom pt-20 pb-10 lg:pt-28 lg:pb-14">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              About Aevum Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Independent advisory for AI-augmented post-sales. Founder-led, Austin, TX.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-[680px] space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Aevum Solutions is an independent advisory practice led by Arun Vijayan and based in Austin, Texas. The
              focus is narrow on purpose: AI-augmented post-sales operating models for B2B technology companies —
              implementation through renewal.
            </p>
            <p>
              Most of the last two decades has been spent inside enterprise post-sales. Thirteen years at Akamai, the
              final five-plus as Senior Director leading Americas Professional Services. The team was responsible for
              the technical post-sales motion end-to-end: integrating customer applications and domains onto the Akamai
              platform, fulfilling attached services entitlements across performance and security products including
              zero-trust and SASE, coordinating break-fix with technical support, and — when it mattered — investing
              free services to keep a customer from churning. Customers ranged from a single-team startup to
              multi-divisional Fortune 100 strategic accounts. Projects ran from a week to several months. Earlier years
              included roles at Fidelity Investments and Infosys.
            </p>
            <p>
              The thesis behind Aevum Solutions is that engineering-led founders increasingly want to protect revenue
              without proportional CS and PS headcount, and the path runs through agent-augmented operating models. The
              hard part is rarely the orchestration code. The hard part is knowing what the agent should do — what to
              escalate, what signal actually predicts churn, what the human still has to own, what the agent does better
              than a person already. That's the work.
            </p>
            <p>
              We focus on augmentation, not replacement. Measurable outcomes, not endless experimentation. Long-term
              sustainability, not short-term fixes. Our work protects customers, data, trust, and the business results
              that depend on all three.
            </p>
            <p>
              Outside the practice, I write occasionally on operating leadership and talent — linked under Writing. To
              talk about an engagement, the fastest path is the 30-min Calendly on the Contact page, or
              contact@aevumsolutions.xyz.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to talk about your post-sales motion?"
        description="A 30-minute call is the fastest way to find out if there's a fit."
        buttonText="Book a 30-min intro"
      />
    </>
  );
};

export default WhoWeAre;
