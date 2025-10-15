import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone } from "lucide-react";

const Booking = () => {
  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für dein <span className="text-primary">Abenteuer?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Buche jetzt ein kostenloses Beratungsgespräch und lass uns gemeinsam
            deine perfekte Tour planen. Wir beantworten alle deine Fragen und
            erstellen ein individuelles Angebot.
          </p>

          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">30 Min. Gespräch</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Video oder Telefon</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Persönliche Beratung</p>
              </div>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="w-full md:w-auto px-12"
              onClick={() => window.open("mailto:info@andes-bike-tours.com?subject=Beratungsgespräch anfragen", "_blank")}
            >
              Jetzt Beratungsgespräch buchen
            </Button>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Oder kontaktiere uns direkt:{" "}
                <a href="mailto:info@andes-bike-tours.com" className="text-primary hover:underline">
                  info@andes-bike-tours.com
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
