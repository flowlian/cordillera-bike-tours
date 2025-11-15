import { useLanguage } from "@/contexts/LanguageContext";
import { Star, User } from "lucide-react";

const Testimonials = () => {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      name: language === "de" ? "Laura Hermann" : language === "en" ? "Laura Hermann" : "Laura Hermann",
      rating: 5,
      text: {
        de: "Eine unvergessliche Erfahrung! Die Guides waren super professionell und die Landschaften atemberaubend. Kann es nur weiterempfehlen!",
        en: "An unforgettable experience! The guides were super professional and the landscapes breathtaking. Can only recommend it!",
        es: "¡Una experiencia inolvidable! Los guías fueron súper profesionales y los paisajes impresionantes. ¡Solo puedo recomendarlo!",
      },
    },
    {
      name: language === "de" ? "Thomas Müller" : language === "en" ? "Thomas Mueller" : "Thomas Müller",
      rating: 5,
      text: {
        de: "Die perfekte Mischung aus Sport und Kultur. Kleine Gruppen, tolle Organisation und authentische Erlebnisse.",
        en: "The perfect mix of sport and culture. Small groups, great organization and authentic experiences.",
        es: "La mezcla perfecta de deporte y cultura. Grupos pequeños, gran organización y experiencias auténticas.",
      },
    },
    {
      name: language === "de" ? "Sarah Weber" : language === "en" ? "Sarah Weber" : "Sarah Weber",
      rating: 5,
      text: {
        de: "Als Anfängerin hatte ich etwas Bedenken, aber die Tour war perfekt auf mein Level abgestimmt. Wunderschöne Natur und herzliche Menschen!",
        en: "As a beginner I had some concerns, but the tour was perfectly tailored to my level. Beautiful nature and warm people!",
        es: "Como principiante tenía algunas preocupaciones, pero el tour estuvo perfectamente adaptado a mi nivel. ¡Hermosa naturaleza y gente cálida!",
      },
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-foreground/80 italic">"{testimonial.text[language]}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;