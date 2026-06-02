import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/contact-aevumsolutions/30min";

const Contact = () => {
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setCalendlyReady(true);
      document.head.appendChild(script);
    } else {
      setCalendlyReady(true);
    }
  }, []);

  const handleCalendlyClick = () => {
    if (calendlyReady && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact — Aevum Solutions</title>
        <meta name="description" content="Book a 30-minute intro call or reach out via email or LinkedIn to discuss your post-sales operating model." />
        <link rel="canonical" href="https://www.aevumsolutions.xyz/contact" />
        <meta property="og:title" content="Contact — Aevum Solutions" />
        <meta property="og:description" content="Book a 30-minute intro call or reach out via email or LinkedIn to discuss your post-sales operating model." />
        <meta property="og:url" content="https://www.aevumsolutions.xyz/contact" />
      </Helmet>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-custom py-20 lg:py-28">
          <div className="mx-auto max-w-[600px] text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Let's talk.
            </h1>
            <p className="mx-auto mt-6 text-lg text-muted-foreground sm:text-xl">
              A 30-minute call is the fastest way to find out if there's a fit. No discovery slides, no qualifying form — just a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="mx-auto max-w-[600px]">
            <div className="rounded-xl border border-border bg-card p-10 text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-card-foreground">Book a 30-min intro</h2>
              <p className="mt-3 text-muted-foreground">
                Pick a time that works. Calendly opens in a popup.
              </p>
              <Button variant="hero" className="mt-6" onClick={handleCalendlyClick}>
                Book a time
              </Button>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Other ways to reach me
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:contact@aevumsolutions.xyz"
                    className="text-base text-foreground hover:text-primary"
                  >
                    contact@aevumsolutions.xyz
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/company/aevumsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground hover:text-primary"
                  >
                    Aevum Solutions on LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default Contact;
