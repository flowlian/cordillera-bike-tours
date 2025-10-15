import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Welche Fitness-Level sind erforderlich?",
      answer:
        "Unsere Touren sind in drei Schwierigkeitsgrade unterteilt. Die Altiplano-Tour eignet sich für fitte Anfänger, während die Sierra Nevada Challenge sehr gute Kondition und Erfahrung im Mountainbiken erfordert. Die Cocora-Tour liegt im mittleren Bereich.",
    },
    {
      question: "Ist das Equipment inklusive?",
      answer:
        "Ja, wir stellen hochwertige Mountainbikes, Helme, und Schutzausrüstung zur Verfügung. Bei Bedarf können auch weitere Ausrüstungsgegenstände wie Protektoren geliehen werden.",
    },
    {
      question: "Wie groß sind die Gruppen?",
      answer:
        "Wir limitieren unsere Gruppen auf maximal 8 Teilnehmer, um ein persönliches Erlebnis und optimale Betreuung zu gewährleisten. Jede Gruppe wird von mindestens zwei erfahrenen Guides begleitet.",
    },
    {
      question: "Benötige ich spezielle Impfungen?",
      answer:
        "Für die Einreise nach Kolumbien sind keine Pflichtimpfungen vorgeschrieben. Wir empfehlen jedoch die Standardimpfungen sowie eine Beratung beim Tropeninstitut. Höhenkrankheit kann in den Bergen ein Thema sein – wir akklimatisieren schrittweise.",
    },
    {
      question: "Was ist im Preis enthalten?",
      answer:
        "Der Preis beinhaltet Unterkunft, alle Mahlzeiten während der Tour, Bike und Equipment, deutschsprachige Guides, Begleitfahrzeug, und alle Transfers vor Ort. Flüge nach Kolumbien sind nicht enthalten.",
    },
    {
      question: "Wann ist die beste Reisezeit?",
      answer:
        "Die besten Monate sind Dezember bis März und Juni bis September. In diesen Zeiten ist das Wetter am stabilsten. Die Trails sind jedoch das ganze Jahr über befahrbar.",
    },
    {
      question: "Sprechen die Guides Deutsch?",
      answer:
        "Ja, mindestens ein Guide pro Tour spricht fließend Deutsch. Zusätzlich werden wir von lokalen kolumbianischen Guides unterstützt, die die Trails perfekt kennen.",
    },
    {
      question: "Wie funktioniert die Buchung?",
      answer:
        "Buche zunächst ein kostenloses Beratungsgespräch über unsere Website. Wir besprechen deine Wünsche und Voraussetzungen und finden die perfekte Tour für dich. Danach senden wir dir ein detailliertes Angebot.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Häufig gestellte <span className="text-primary">Fragen</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Hier findest du Antworten auf die wichtigsten Fragen zu unseren Touren
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
