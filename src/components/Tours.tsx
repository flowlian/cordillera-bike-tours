import TourCard from "./TourCard";
import tourCocora from "@/assets/tour-cocora.jpg";
import tourSierra from "@/assets/tour-sierra.jpg";
import tourAltiplano from "@/assets/tour-altiplano.jpg";

const Tours = () => {
  const tours = [
    {
      title: "Cocora Valley Explorer",
      image: tourCocora,
      duration: "5 Tage",
      difficulty: "Mittel",
      elevation: "1.800-2.800m",
      distance: "180 km",
      description:
        "Erkunde das weltberühmte Cocora-Tal mit seinen majestätischen Wachspalmen. Diese Tour kombiniert technische Trails mit atemberaubenden Landschaften.",
      highlights: [
        "Fahrt durch das Valle de Cocora",
        "Besuch traditioneller Kaffeefincas",
        "Spektakuläre Bergpanoramen",
        "Kolibri-Beobachtung in den Nebelwäldern",
      ],
    },
    {
      title: "Sierra Nevada Challenge",
      image: tourSierra,
      duration: "7 Tage",
      difficulty: "Schwer",
      elevation: "2.500-4.200m",
      distance: "240 km",
      description:
        "Die ultimative Herausforderung für erfahrene Mountainbiker. Erlebe die höchsten Gipfel der Sierra Nevada mit technischen Trails und extremen Höhen.",
      highlights: [
        "Hochalpine Trails bis 4.200m",
        "Schneebedeckte Gipfel im Blick",
        "Indigene Kulturen kennenlernen",
        "Extreme Höhenunterschiede meistern",
      ],
    },
    {
      title: "Altiplano Panorama",
      image: tourAltiplano,
      duration: "4 Tage",
      difficulty: "Leicht-Mittel",
      elevation: "2.400-3.000m",
      distance: "140 km",
      description:
        "Genieße die sanften Hügel des Altiplano Cundiboyacense. Perfekt für Einsteiger mit guter Kondition, die authentisches Kolumbien erleben möchten.",
      highlights: [
        "Rollende grüne Hügel",
        "Traditionelle Dörfer besuchen",
        "Entspanntes Tempo mit Kultur",
        "Kolumbianische Gastronomie genießen",
      ],
    },
  ];

  return (
    <section id="tours" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unsere <span className="text-primary">Touren</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Drei einzigartige Routen durch die spektakulärsten Bergregionen Kolumbiens.
            Für jeden Schwierigkeitsgrad die perfekte Tour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
