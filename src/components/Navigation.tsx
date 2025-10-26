import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Book Appointment", href: "/book" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 transition-smooth hover:opacity-80">
          <img src={logo} alt="Reliable Homeo Centre" className="h-12 w-12 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-wide" style={{ color: '#DC2626' }}>RELIABLE</span>
            <span className="text-sm font-medium tracking-wider" style={{ color: '#6B7280' }}>HOMOEO CENTRE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-smooth",
                isActive(item.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-3 space-x-3">
          <div className="">
            <a
              href="tel:+918686904404"
              className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Phone className="h-4 w-4" />
              <span>+91 86869 04404</span>
            </a>
            <a
              href="tel:+917780396837"
              className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Phone className="h-4 w-4" />
              <span>+91 77803 96837</span>
            </a>
          </div>
          
          <Button 
            variant="appointment" 
            size="sm" 
            className="hidden md:inline-flex"
            asChild
          >
            <Link to="/book">Book Appointment</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium transition-smooth",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <a
                href="tel:+918686904404"
                className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>Call: +91 86869 04404</span>
              </a>
              <a
                href="tel:+917780396837"
                className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>Call: +91 77803 96837</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;