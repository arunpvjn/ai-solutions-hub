import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
}: TestimonialCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-8 card-shadow">
      <Quote className="mb-4 h-8 w-8 text-primary/30" />
      <blockquote className="mb-6 text-lg leading-relaxed text-card-foreground">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-semibold text-accent-foreground">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-card-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
