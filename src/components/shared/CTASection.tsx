import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

const CTASection = ({
  title = "Ready to talk?",
  description = "Let's see if there's a fit.",
  buttonText = "Book a 30-min intro",
  buttonHref = "/contact",
}: CTASectionProps) => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
          {description}
        </p>
        <div className="mt-8">
          <Link to={buttonHref}>
            <Button
              variant="heroOutline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
