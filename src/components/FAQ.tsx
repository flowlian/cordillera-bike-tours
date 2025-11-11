import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { language, t } = useLanguage();

  const faqsData = {
    de: [
      {
        question: "Welche Fitness-Level sind erforderlich?",
        answer:
          "Unsere Touren sind in verschiedene Schwierigkeitsgrade unterteilt. Die leichten Touren eignen sich für fitte Anfänger, während die schweren Touren sehr gute Kondition und Erfahrung im Mountainbiken erfordern.",
      },
      {
        question: "Ist das Equipment inklusive?",
        answer:
          "Ja, wir stellen hochwertige Mountainbikes verschiedener Typen, Helme, und Schutzausrüstung zur Verfügung. Bei Bedarf können auch weitere Ausrüstungsgegenstände wie Protektoren geliehen werden. Alle Bikes werden professionell gewartet.",
      },
      {
        question: "Wie groß sind die Gruppen?",
        answer:
          "Wir limitieren unsere Gruppen auf maximal 8 Teilnehmer, um ein persönliches, familienfreundliches Erlebnis und optimale Betreuung zu gewährleisten. Jede Gruppe wird von mindestens zwei erfahrenen Guides begleitet.",
      },
      {
        question: "Ist private Unterkunft verfügbar?",
        answer:
          "Ja, wir bieten private Unterkünfte für alle unsere Touren an. Die Unterkünfte sind sauber, sicher und komfortabel. Bei mehrtägigen Touren sind alle Übernachtungen im Preis enthalten.",
      },
      {
        question: "Bietet ihr Flughafenabholung an?",
        answer:
          "Ja, wir bieten Flughafenabholung in Pereira (Matecaña International Airport) an. Der Transfer zu deiner Unterkunft und zurück ist im Paketpreis enthalten. Wir können auch Transfers von anderen Flughäfen arrangieren.",
      },
      {
        question: "Was ist im Preis enthalten?",
        answer:
          "Der Preis beinhaltet private Unterkunft, alle Mahlzeiten während der Tour (lokale, nachhaltige, organische Küche), Bike und Equipment, deutschsprachige Guides, Begleitfahrzeug, Flughafenabholung, Stadtrundfahrt in Pereira und alle Transfers vor Ort. Flüge nach Kolumbien sind nicht enthalten.",
      },
      {
        question: "Wann ist die beste Reisezeit?",
        answer:
          "Die besten Monate sind Dezember bis März und Juni bis September. In diesen Zeiten ist das Wetter am stabilsten. Die Trails sind jedoch das ganze Jahr über befahrbar.",
      },
      {
        question: "Sprechen die Guides Deutsch?",
        answer:
          "Ja, mindestens ein Guide pro Tour spricht fließend Deutsch. Zusätzlich werden wir von lokalen kolumbianischen Guides unterstützt, die die Trails perfekt kennen und authentische kulturelle Einblicke bieten.",
      },
      {
        question: "Sind die Touren nachhaltig?",
        answer:
          "Ja, Nachhaltigkeit ist uns sehr wichtig. Wir arbeiten mit lokalen Gemeinschaften zusammen, verwenden organische und lokale Produkte, und unsere Touren sind so gestaltet, dass sie die Umwelt minimal belasten. Wir unterstützen auch lokale Naturschutzprojekte.",
      },
      {
        question: "Kann ich eine individuelle Tour buchen?",
        answer:
          "Absolut! Alle unsere Pakete sind vollständig anpassbar. Buche zunächst ein kostenloses Beratungsgespräch, und wir stellen gemeinsam deine perfekte, maßgeschneiderte Tour zusammen - ob 1 Tag oder mehrere Wochen.",
      },
    ],
    en: [
      {
        question: "What fitness levels are required?",
        answer:
          "Our tours are divided into different difficulty levels. Easy tours are suitable for fit beginners, while difficult tours require very good fitness and mountain biking experience.",
      },
      {
        question: "Is equipment included?",
        answer:
          "Yes, we provide high-quality mountain bikes of various types, helmets, and protective gear. Additional equipment such as protectors can also be rented if needed. All bikes are professionally maintained.",
      },
      {
        question: "How large are the groups?",
        answer:
          "We limit our groups to a maximum of 8 participants to ensure a personal, family-friendly experience and optimal support. Each group is accompanied by at least two experienced guides.",
      },
      {
        question: "Is private accommodation available?",
        answer:
          "Yes, we offer private accommodation for all our tours. The accommodations are clean, safe, and comfortable. For multi-day tours, all overnight stays are included in the price.",
      },
      {
        question: "Do you offer airport pickup?",
        answer:
          "Yes, we offer airport pickup at Pereira (Matecaña International Airport). Transfer to your accommodation and back is included in the package price. We can also arrange transfers from other airports.",
      },
      {
        question: "What is included in the price?",
        answer:
          "The price includes private accommodation, all meals during the tour (local, sustainable, organic cuisine), bike and equipment, German-speaking guides, support vehicle, airport pickup, Pereira city tour, and all local transfers. Flights to Colombia are not included.",
      },
      {
        question: "When is the best time to travel?",
        answer:
          "The best months are December to March and June to September. The weather is most stable during these times. However, the trails are rideable all year round.",
      },
      {
        question: "Do the guides speak German?",
        answer:
          "Yes, at least one guide per tour speaks fluent German. Additionally, we are supported by local Colombian guides who know the trails perfectly and offer authentic cultural insights.",
      },
      {
        question: "Are the tours sustainable?",
        answer:
          "Yes, sustainability is very important to us. We work with local communities, use organic and local products, and our tours are designed to minimize environmental impact. We also support local conservation projects.",
      },
      {
        question: "Can I book a custom tour?",
        answer:
          "Absolutely! All our packages are fully customizable. First book a free consultation, and we'll put together your perfect, tailor-made tour - whether for 1 day or several weeks.",
      },
    ],
    es: [
      {
        question: "¿Qué niveles de condición física se requieren?",
        answer:
          "Nuestros tours están divididos en diferentes niveles de dificultad. Los tours fáciles son adecuados para principiantes en forma, mientras que los tours difíciles requieren muy buena condición física y experiencia en ciclismo de montaña.",
      },
      {
        question: "¿El equipo está incluido?",
        answer:
          "Sí, proporcionamos bicicletas de montaña de alta calidad de varios tipos, cascos y equipo de protección. También se puede alquilar equipo adicional como protectores si es necesario. Todas las bicicletas reciben mantenimiento profesional.",
      },
      {
        question: "¿Qué tan grandes son los grupos?",
        answer:
          "Limitamos nuestros grupos a un máximo de 8 participantes para garantizar una experiencia personal, familiar y un apoyo óptimo. Cada grupo está acompañado por al menos dos guías experimentados.",
      },
      {
        question: "¿Hay alojamiento privado disponible?",
        answer:
          "Sí, ofrecemos alojamiento privado para todos nuestros tours. Los alojamientos son limpios, seguros y cómodos. Para tours de varios días, todas las pernoctaciones están incluidas en el precio.",
      },
      {
        question: "¿Ofrecen recogida en el aeropuerto?",
        answer:
          "Sí, ofrecemos recogida en el aeropuerto de Pereira (Aeropuerto Internacional Matecaña). El traslado a tu alojamiento y de regreso está incluido en el precio del paquete. También podemos organizar traslados desde otros aeropuertos.",
      },
      {
        question: "¿Qué está incluido en el precio?",
        answer:
          "El precio incluye alojamiento privado, todas las comidas durante el tour (cocina local, sostenible y orgánica), bicicleta y equipo, guías de habla alemana, vehículo de apoyo, recogida en el aeropuerto, tour por la ciudad de Pereira y todos los traslados locales. Los vuelos a Colombia no están incluidos.",
      },
      {
        question: "¿Cuál es la mejor época para viajar?",
        answer:
          "Los mejores meses son de diciembre a marzo y de junio a septiembre. El clima es más estable durante estos períodos. Sin embargo, los senderos se pueden recorrer durante todo el año.",
      },
      {
        question: "¿Los guías hablan alemán?",
        answer:
          "Sí, al menos un guía por tour habla alemán con fluidez. Además, contamos con el apoyo de guías colombianos locales que conocen perfectamente los senderos y ofrecen perspectivas culturales auténticas.",
      },
      {
        question: "¿Los tours son sostenibles?",
        answer:
          "Sí, la sostenibilidad es muy importante para nosotros. Trabajamos con comunidades locales, usamos productos orgánicos y locales, y nuestros tours están diseñados para minimizar el impacto ambiental. También apoyamos proyectos locales de conservación.",
      },
      {
        question: "¿Puedo reservar un tour personalizado?",
        answer:
          "¡Por supuesto! Todos nuestros paquetes son completamente personalizables. Primero reserva una consulta gratuita y juntos crearemos tu tour perfecto y personalizado, ya sea de 1 día o varias semanas.",
      },
    ],
  };

  const faqs = faqsData[language];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 border shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;