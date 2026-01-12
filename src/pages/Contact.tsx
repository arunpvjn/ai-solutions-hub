import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Calendar, CheckCircle } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/contact-aevumsolutions/30min";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);

  const topics = [
    "Implementation Consulting",
    "Leadership Coaching & Mentoring",
    "Agent-Augmented Customer Success",
    "Agent-Augmented Security",
    "General Inquiry",
  ];

  useEffect(() => {
    // Load Calendly CSS
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Load Calendly JS
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setCalendlyReady(true);
      document.head.appendChild(script);
    } else {
      // Script already loaded
      setCalendlyReady(true);
    }
  }, []);

  const handleCalendlyClick = () => {
    if (calendlyReady && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open in new tab
      window.open(CALENDLY_URL, "_blank");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a backend
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent via-background to-background" />
        <div className="container-custom relative py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground animate-fade-in">
              Contact Us
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-up">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up">
              Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-xl border border-border bg-card p-8 card-shadow lg:p-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        role: "",
                        topic: "",
                        message: "",
                      });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="mb-6 text-2xl font-semibold text-card-foreground">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-card-foreground">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-card-foreground">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-card-foreground">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="mb-2 block text-sm font-medium text-card-foreground">
                          Role
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          value={formState.role}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Your role"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="topic" className="mb-2 block text-sm font-medium text-card-foreground">
                        Topic *
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        required
                        value={formState.topic}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select a topic</option>
                        {topics.map((topic) => (
                          <option key={topic} value={topic}>
                            {topic}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-card-foreground">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Book a Call */}
              <div className="rounded-xl border border-border bg-card p-8 card-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Schedule a Consultation</h3>
                <p className="mb-6 text-muted-foreground">
                  Prefer to talk? Book a 30-minute discovery call with our team.
                </p>
                <Button variant="hero" className="w-full" onClick={handleCalendlyClick}>
                  Book a Time
                </Button>
              </div>

              {/* Contact Details */}
              <div className="rounded-xl border border-border bg-card p-8 card-shadow">
                <h3 className="mb-6 text-xl font-semibold text-card-foreground">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <a href="mailto:contact@aevumsolutions.xyz" className="text-muted-foreground hover:text-primary">
                        contact@aevumsolutions.xyz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-xl border border-border bg-card p-8 card-shadow">
                <h3 className="mb-6 text-xl font-semibold text-card-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/aevumsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Add type declaration for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default Contact;
