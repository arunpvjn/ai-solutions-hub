export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

export const articles: Article[] = [
  // Agentic AI Development
  {
    id: "1",
    title: "Building Production-Ready AI Agents: A Complete Guide",
    excerpt: "Learn the essential patterns and architectures for deploying reliable AI agents in enterprise environments.",
    content: "Full article content here...",
    category: "Agentic AI Development",
    tags: ["AI Agents", "Architecture", "Production"],
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "building-production-ready-ai-agents"
  },
  {
    id: "2",
    title: "Multi-Agent Systems: When and How to Implement",
    excerpt: "Explore the decision framework for choosing between single and multi-agent architectures.",
    content: "Full article content here...",
    category: "Agentic AI Development",
    tags: ["Multi-Agent", "Architecture", "Design Patterns"],
    author: "Marcus Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    slug: "multi-agent-systems-implementation"
  },
  {
    id: "3",
    title: "Evaluating AI Agent Performance: Metrics That Matter",
    excerpt: "Move beyond accuracy—discover the comprehensive metrics suite for agent evaluation.",
    content: "Full article content here...",
    category: "Agentic AI Development",
    tags: ["Metrics", "Evaluation", "Performance"],
    author: "Dr. Sarah Chen",
    date: "2024-01-05",
    readTime: "7 min read",
    slug: "evaluating-ai-agent-performance"
  },
  // Education & Workshops
  {
    id: "4",
    title: "Designing AI Literacy Programs for Non-Technical Teams",
    excerpt: "Bridge the knowledge gap with curricula that empower every department to leverage AI.",
    content: "Full article content here...",
    category: "Education & Workshops",
    tags: ["AI Literacy", "Training", "Non-Technical"],
    author: "Emily Roberts",
    date: "2024-01-12",
    readTime: "5 min read",
    slug: "ai-literacy-non-technical-teams"
  },
  {
    id: "5",
    title: "Workshop Formats That Drive Real Skill Transfer",
    excerpt: "From bootcamps to cohort-based learning—find the right format for your team.",
    content: "Full article content here...",
    category: "Education & Workshops",
    tags: ["Workshops", "Learning", "Training"],
    author: "Emily Roberts",
    date: "2024-01-08",
    readTime: "4 min read",
    slug: "workshop-formats-skill-transfer"
  },
  {
    id: "6",
    title: "Measuring ROI on AI Education Investments",
    excerpt: "Quantify the impact of your learning programs with our proven measurement framework.",
    content: "Full article content here...",
    category: "Education & Workshops",
    tags: ["ROI", "Metrics", "Education"],
    author: "Marcus Johnson",
    date: "2024-01-03",
    readTime: "6 min read",
    slug: "measuring-roi-ai-education"
  },
  // Consulting
  {
    id: "7",
    title: "AI Strategy Roadmaps: From Vision to Execution",
    excerpt: "Transform ambitious AI goals into actionable quarterly milestones.",
    content: "Full article content here...",
    category: "Consulting",
    tags: ["Strategy", "Roadmap", "Planning"],
    author: "Dr. Sarah Chen",
    date: "2024-01-14",
    readTime: "9 min read",
    slug: "ai-strategy-roadmaps"
  },
  {
    id: "8",
    title: "Change Management for AI Adoption",
    excerpt: "Navigate the human side of AI transformation with proven change frameworks.",
    content: "Full article content here...",
    category: "Consulting",
    tags: ["Change Management", "Adoption", "Culture"],
    author: "Emily Roberts",
    date: "2024-01-09",
    readTime: "7 min read",
    slug: "change-management-ai-adoption"
  },
  {
    id: "9",
    title: "Building Your Internal AI Center of Excellence",
    excerpt: "Establish governance, best practices, and shared resources for AI at scale.",
    content: "Full article content here...",
    category: "Consulting",
    tags: ["CoE", "Governance", "Scale"],
    author: "Marcus Johnson",
    date: "2024-01-04",
    readTime: "8 min read",
    slug: "building-ai-center-excellence"
  },
  // Threat Modeling
  {
    id: "10",
    title: "AI-Specific Threat Modeling: STRIDE Adapted",
    excerpt: "Apply classic security frameworks to the unique challenges of AI systems.",
    content: "Full article content here...",
    category: "Threat Modeling",
    tags: ["STRIDE", "Security", "AI"],
    author: "James Wilson",
    date: "2024-01-13",
    readTime: "10 min read",
    slug: "ai-specific-threat-modeling-stride"
  },
  {
    id: "11",
    title: "Adversarial Attack Patterns in Production ML",
    excerpt: "Understand the threat landscape and defend against prompt injection, data poisoning, and more.",
    content: "Full article content here...",
    category: "Threat Modeling",
    tags: ["Adversarial", "ML Security", "Defense"],
    author: "James Wilson",
    date: "2024-01-07",
    readTime: "8 min read",
    slug: "adversarial-attack-patterns-ml"
  },
  {
    id: "12",
    title: "Red Teaming AI Systems: A Practical Guide",
    excerpt: "Structure effective red team exercises to uncover vulnerabilities before attackers do.",
    content: "Full article content here...",
    category: "Threat Modeling",
    tags: ["Red Team", "Security Testing", "Vulnerability"],
    author: "James Wilson",
    date: "2024-01-02",
    readTime: "9 min read",
    slug: "red-teaming-ai-systems"
  },
  // Web Security Policy
  {
    id: "13",
    title: "Modern WAF Configuration for AI-Powered Applications",
    excerpt: "Protect AI endpoints with firewall rules that understand ML traffic patterns.",
    content: "Full article content here...",
    category: "Web Security Policy",
    tags: ["WAF", "Firewall", "Protection"],
    author: "James Wilson",
    date: "2024-01-11",
    readTime: "7 min read",
    slug: "modern-waf-ai-applications"
  },
  {
    id: "14",
    title: "API Security Best Practices for ML Endpoints",
    excerpt: "Secure your model APIs with authentication, rate limiting, and input validation.",
    content: "Full article content here...",
    category: "Web Security Policy",
    tags: ["API Security", "ML", "Best Practices"],
    author: "James Wilson",
    date: "2024-01-06",
    readTime: "6 min read",
    slug: "api-security-ml-endpoints"
  },
  {
    id: "15",
    title: "Bot Management in the Age of AI",
    excerpt: "Distinguish between beneficial AI crawlers and malicious automation.",
    content: "Full article content here...",
    category: "Web Security Policy",
    tags: ["Bot Management", "Automation", "Detection"],
    author: "James Wilson",
    date: "2024-01-01",
    readTime: "5 min read",
    slug: "bot-management-ai-age"
  },
  // Leadership Development
  {
    id: "16",
    title: "Leading AI Transformation: Executive Playbook",
    excerpt: "Equip senior leaders with the mindset and toolkit for AI-driven change.",
    content: "Full article content here...",
    category: "Leadership Development",
    tags: ["Leadership", "Transformation", "Executive"],
    author: "Emily Roberts",
    date: "2024-01-14",
    readTime: "8 min read",
    slug: "leading-ai-transformation-playbook"
  },
  {
    id: "17",
    title: "Building AI-Fluent Leadership Teams",
    excerpt: "Develop the collective capabilities your leadership needs for the AI era.",
    content: "Full article content here...",
    category: "Leadership Development",
    tags: ["Leadership", "Team Development", "AI Fluency"],
    author: "Emily Roberts",
    date: "2024-01-08",
    readTime: "6 min read",
    slug: "building-ai-fluent-leadership"
  },
  {
    id: "18",
    title: "Ethical AI Leadership: Principles in Practice",
    excerpt: "Lead with integrity—embed ethics into every AI decision and deployment.",
    content: "Full article content here...",
    category: "Leadership Development",
    tags: ["Ethics", "Leadership", "Principles"],
    author: "Dr. Sarah Chen",
    date: "2024-01-03",
    readTime: "7 min read",
    slug: "ethical-ai-leadership"
  },
  // Career Coaching
  {
    id: "19",
    title: "Transitioning to AI Roles: A Career Roadmap",
    excerpt: "Map your path from current role to AI-focused positions with actionable steps.",
    content: "Full article content here...",
    category: "Career Coaching",
    tags: ["Career", "Transition", "AI Roles"],
    author: "Marcus Johnson",
    date: "2024-01-12",
    readTime: "6 min read",
    slug: "transitioning-ai-roles-roadmap"
  },
  {
    id: "20",
    title: "Building Your AI Portfolio: Projects That Get Noticed",
    excerpt: "Curate and present your AI work to stand out in a competitive market.",
    content: "Full article content here...",
    category: "Career Coaching",
    tags: ["Portfolio", "Career", "Projects"],
    author: "Marcus Johnson",
    date: "2024-01-07",
    readTime: "5 min read",
    slug: "building-ai-portfolio"
  },
  {
    id: "21",
    title: "Negotiating AI Roles: Compensation & Growth",
    excerpt: "Understand market rates and negotiate packages that reflect your value.",
    content: "Full article content here...",
    category: "Career Coaching",
    tags: ["Negotiation", "Compensation", "Career Growth"],
    author: "Marcus Johnson",
    date: "2024-01-02",
    readTime: "4 min read",
    slug: "negotiating-ai-roles-compensation"
  }
];

export const categories = [
  "Agentic AI Development",
  "Education & Workshops",
  "Consulting",
  "Threat Modeling",
  "Web Security Policy",
  "Leadership Development",
  "Career Coaching"
];

export const allTags = Array.from(
  new Set(articles.flatMap(article => article.tags))
).sort();
