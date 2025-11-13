import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const {
    t
  } = useLanguage();
  const navLinks = [{
    name: t("nav.home"),
    path: "/"
  }, {
    name: t("nav.tours"),
    path: "#tours"
  }, {
    name: t("nav.about"),
    path: "#about"
  }, {
    name: t("nav.faq"),
    path: "#faq"
  }];
  const isActive = (path: string) => {
    if (path.startsWith("#")) return false;
    return location.pathname === path;
  };
  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      element?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">Cordillera Bike Tours<Mountain className="h-6 w-6" fill="currentColor" />
            Andes Bike Tours
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => <button key={link.path} onClick={() => handleNavClick(link.path)} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-foreground/70"}`}>
                {link.name}
              </button>)}
            <LanguageSelector />
            <Button variant="hero" size="default" onClick={() => handleNavClick("#booking")}>
              {t("nav.booking")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <button key={link.path} onClick={() => handleNavClick(link.path)} className={`text-left text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-foreground/70"}`}>
                  {link.name}
                </button>)}
              <LanguageSelector />
              <Button variant="hero" size="default" onClick={() => handleNavClick("#booking")} className="w-full">
                {t("nav.booking")}
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;