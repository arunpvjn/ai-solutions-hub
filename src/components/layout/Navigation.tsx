import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const solutionsDropdown = [
  { name: "Agentic AI Development", href: "/solutions/agentic-ai" },
  { name: "Education & Workshops", href: "/solutions/education" },
  { name: "Consulting", href: "/solutions/consulting" },
  { name: "Threat Modeling", href: "/solutions/threat-modeling" },
  { name: "Web Security Policy", href: "/solutions/web-security" },
  { name: "Leadership Development", href: "/solutions/leadership" },
  { name: "Career Coaching", href: "/solutions/career-coaching" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsActive = location.pathname.startsWith("/solutions");

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Aevum Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 lg:flex">
            <Link to="/who-we-are">
              <Button
                variant="nav"
                className={cn(isActive("/who-we-are") && "text-primary")}
              >
                Who We Are
              </Button>
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <Link to="/solutions">
                <Button
                  variant="nav"
                  className={cn(
                    "flex items-center gap-1",
                    isSolutionsActive && "text-primary"
                  )}
                >
                  Solutions
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      solutionsOpen && "rotate-180"
                    )}
                  />
                </Button>
              </Link>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute left-0 top-full z-50 w-64 rounded-lg border border-border bg-popover p-2 shadow-lg transition-all duration-200",
                  solutionsOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                )}
              >
                {solutionsDropdown.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "block rounded-md px-4 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-popover-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/resources">
              <Button
                variant="nav"
                className={cn(isActive("/resources") && "text-primary")}
              >
                Resources
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="nav"
                className={cn(isActive("/contact") && "text-primary")}
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="navCta" size="default">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            mobileMenuOpen ? "max-h-[500px] pb-6" : "max-h-0"
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

            <div className="space-y-1">
              <Link
                to="/solutions"
                className="block rounded-md px-4 py-2.5 font-medium text-foreground hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              {solutionsDropdown.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block rounded-md px-8 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              to="/resources"
              className="block rounded-md px-4 py-2.5 text-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>

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
                  Get Started
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
