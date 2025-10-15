import { Shield, Users, Heart, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Sicherheit",
      description: "Professionelle Guides und top Equipment für deine Sicherheit auf jeder Tour.",
    },
    {
      icon: Users,
      title: "Kleine Gruppen",
      description: "Maximal 8 Teilnehmer pro Tour für ein persönliches Erlebnis.",
    },
    {
      icon: Heart,
      title: "Leidenschaft",
      description: "Wir lieben die Berge Kolumbiens und teilen diese Begeisterung mit dir.",
    },
    {
      icon: Award,
      title: "Erfahrung",
      description: "Über 10 Jahre Expertise in den kolumbianischen Anden.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Über <span className="text-primary">uns</span>
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Wir sind ein deutschsprachiges Team von Mountainbike-Enthusiasten,
                die Kolumbien zu ihrer zweiten Heimat gemacht haben. Unsere Leidenschaft
                ist es, dir die spektakulärsten Trails der Anden zu zeigen.
              </p>
              <p>
                Mit lokalen Guides, die jeden Trail wie ihre Westentasche kennen,
                garantieren wir dir ein authentisches und sicheres Abenteuer.
                Egal ob Einsteiger oder Profi – wir finden die perfekte Tour für dich.
              </p>
              <p>
                Unsere Touren verbinden sportliche Herausforderungen mit kulturellen
                Erlebnissen. Du lernst nicht nur die Landschaft, sondern auch die
                herzlichen Menschen Kolumbiens kennen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
