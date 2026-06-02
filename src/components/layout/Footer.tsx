import { Link } from "react-router-dom";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import Logo from "@/components/shared/Logo";

const SUBSTACK_URL = "https://arunvijayan.substack.com/";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Independent advisory for AI-augmented post-sales. Based in Austin, TX.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/aevumsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@aevumsolutions.xyz"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Writing on Substack"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Site */}
          <div className="md:text-right">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Site</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/who-we-are" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Solutions
                </Link>
              </li>
              <li>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Writing
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Aevum Solutions · Austin, TX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
