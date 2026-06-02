import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/Logo";

const SUBSTACK_URL = "https://arunvijayan.substack.com/";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsActive = location.pathname.startsWith("/solutions");

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 lg:flex">
            <Link to="/who-we-are">
              <Button variant="nav" className={cn(isActive("/who-we-are") && "text-primary")}>
                Who We Are
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="nav" className={cn(isSolutionsActive && "text-primary")}>
                Solutions
              </Button>
            </Link>
            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="nav">Writing</Button>
            </a>
            <Link to="/contact">
              <Button variant="nav" className={cn(isActive("/contact") && "text-primary")}>
                Contact
              </Button>
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="navCta" size="default">
                Book a 30-min intro
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            mobileMenuOpen ? "max-h-[360px] pb-6" : "max-h-0"
          )}
        >
          <div className="space-y-1 pt-4">
            <Link
              to="/who-we-are"
              className="block rounded-md px-4 py-2.5 text-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link
              to="/solutions"
              className="block rounded-md px-4 py-2.5 text-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-4 py-2.5 text-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Writing
            </a>
            <Link
              to="/contact"
              className="block rounded-md px-4 py-2.5 text-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 pt-4">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="cta" className="w-full">
                  Book a 30-min intro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
