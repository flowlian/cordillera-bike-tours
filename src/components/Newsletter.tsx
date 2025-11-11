import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Rocket, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Ungültige E-Mail",
        description: "Bitte gib eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send to a backend
    setIsSubmitted(true);
    toast({
      title: "Erfolgreich angemeldet!",
      description: "Wir halten dich auf dem Laufenden.",
    });
    
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/20">
          <div className="text-center mb-8">
            <Rocket className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("newsletter.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("newsletter.subtitle")}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder={t("newsletter.placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base"
              />
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="whitespace-nowrap"
              >
                {t("newsletter.button")}
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-primary">
              <CheckCircle2 className="h-8 w-8" />
              <span className="text-lg font-semibold">Danke für dein Interesse!</span>
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground mt-6">
            {t("newsletter.features")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;