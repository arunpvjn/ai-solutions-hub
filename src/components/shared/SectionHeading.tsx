import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg text-muted-foreground",
            align === "center" && "mx-auto max-w-3xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
