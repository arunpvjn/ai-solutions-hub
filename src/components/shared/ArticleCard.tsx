import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import type { Article } from "@/data/resources";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link to={`/resources/${article.slug}`}>
      <article className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 card-shadow hover:card-shadow-hover">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {article.readTime}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
          {article.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center text-sm font-medium text-primary">
          Read article
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
