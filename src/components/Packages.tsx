import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

const Packages = () => {
  const { t } = useLanguage();

  const packages = [
    {
      days: 1,
      titleKey: "packages.1day",
      descKey: "packages.1dayDesc",
      price: "180",
    },
    {
      days: 3,
      titleKey: "packages.3day",
      descKey: "packages.3dayDesc",
      price: "480",
      popular: true,
    },
    {
      days: 7,
      titleKey: "packages.7day",
      descKey: "packages.7dayDesc",
      price: "980",
    },
  ];

  const features = [
    "packages.feature1",
    "packages.feature2",
    "packages.feature3",
    "packages.feature4",
    "packages.feature5",
    "packages.feature6",
  ];

  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("packages.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("packages.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                pkg.popular ? "border-2 border-primary shadow-xl scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{t(pkg.titleKey)}</h3>
                <p className="text-muted-foreground mb-4">{t(pkg.descKey)}</p>
                <div className="text-4xl font-bold text-primary mb-2">
                  {t("packages.from")} €{pkg.price}
                </div>
                <p className="text-sm text-muted-foreground">{t("packages.perPerson")}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-3">{t("packages.includes")}:</p>
                <ul className="space-y-2">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={pkg.popular ? "hero" : "outline"}
                size="lg"
                onClick={scrollToBooking}
                className="w-full"
              >
                {t("tours.requestTour")}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            {t("packages.customizable")}
          </p>
          <Button variant="secondary" size="lg" onClick={scrollToBooking}>
            {t("nav.booking")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;