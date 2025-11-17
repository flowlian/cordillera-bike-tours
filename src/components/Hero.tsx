import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-cocora.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToTours = () => {
    const element = document.querySelector("#tours");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Colombian Andes mountains with wax palms"
          className="w-full h-full object-cover object-center sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/25 to-primary/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in px-4">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-4">
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToTours}
            className="group w-full sm:w-auto"
          >
            {t("hero.exploreTours")}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
