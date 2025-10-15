import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Mountain className="h-6 w-6" />
              Andes Bike Tours
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Dein deutschsprachiger Partner für unvergessliche Mountainbike-Abenteuer in den kolumbianischen Anden.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#tours")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Touren
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#faq")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@andes-bike-tours.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@andes-bike-tours.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+57 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">Bogotá, Kolumbien</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Andes Bike Tours. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
