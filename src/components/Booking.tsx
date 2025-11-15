import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-cocora.jpg";

const Booking = () => {
  const { t } = useLanguage();
  return (
    <section id="booking" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t("booking.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
            {t("booking.subtitle")}
          </p>

          <div className="bg-card/65 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="text-xs sm:text-sm font-medium">{t("booking.feature1")}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="text-xs sm:text-sm font-medium">{t("booking.feature2")}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="text-xs sm:text-sm font-medium">{t("booking.feature3")}</p>
              </div>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto px-8 sm:px-12 text-sm sm:text-base"
              onClick={() => window.open("mailto:info@cordillerabiketours.com?subject=Beratungsgespräch%20Anfrage", "_blank")}
            >
              {t("booking.cta")}
            </Button>

            <div className="pt-4 sm:pt-6 border-t border-border">
              <p className="text-xs sm:text-sm text-muted-foreground">
                {t("booking.email")}:{" "}
                <a href="mailto:info@cordillerabiketours.com" className="text-primary hover:underline break-all">
                  info@cordillerabiketours.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
