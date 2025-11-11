import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Booking = () => {
  const { t } = useLanguage();
  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("booking.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t("booking.subtitle")}
          </p>

          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">{t("booking.feature1")}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">{t("booking.feature2")}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">{t("booking.feature3")}</p>
              </div>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="w-full md:w-auto px-12"
              onClick={() => window.open("mailto:info@andesbiketours.com?subject=Beratungsgespräch%20Anfrage", "_blank")}
            >
              {t("booking.cta")}
            </Button>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {t("booking.email")}:{" "}
                <a href="mailto:info@andesbiketours.com" className="text-primary hover:underline">
                  info@andesbiketours.com
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
