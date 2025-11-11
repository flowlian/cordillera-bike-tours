import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { toursData } from "@/data/tours";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, TrendingUp, Route } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import tourPina1 from "@/assets/tour-pina-1.jpg";
import tourCafe1 from "@/assets/tour-cafe-1.jpg";
import tourPalmas1 from "@/assets/tour-palmas-1.jpg";
import tourBosque1 from "@/assets/tour-bosque-1.jpg";
import tourFlores1 from "@/assets/tour-flores-1.jpg";
import tourRio1 from "@/assets/tour-rio-1.jpg";
import tourCacao1 from "@/assets/tour-cacao-1.jpg";

const TourDetails = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const tourImages: Record<string, string[]> = {
    pina: [tourPina1],
    cafe: [tourCafe1],
    palmas: [tourPalmas1],
    bosque: [tourBosque1],
    flores: [tourFlores1],
    rio: [tourRio1],
    cacao: [tourCacao1],
  };

  const tour = toursData[language].find((t) => t.id === tourId);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tour nicht gefunden</h1>
          <Button onClick={() => navigate("/")}>Zurück zur Startseite</Button>
        </div>
      </div>
    );
  }

  const images = tourImages[tour.id] || [];

  const scrollToBooking = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector("#booking");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={images[0]}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="mb-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("nav.home")}
              </Button>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
            </div>
          </div>
        </div>

        {/* Tour Info */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("tours.duration")}</p>
                  <p className="font-semibold">{tour.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <TrendingUp className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("tours.difficulty")}</p>
                  <p className="font-semibold">{tour.difficulty}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("tours.elevation")}</p>
                  <p className="font-semibold">{tour.elevation}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <Route className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("tours.distance")}</p>
                  <p className="font-semibold">{tour.distance}</p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-3xl font-bold mb-4">Beschreibung</h2>
              <p className="text-lg text-foreground/80">{tour.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t("tours.highlights")}</h2>
              <ul className="space-y-3">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-foreground/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wikiloc Map */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Route auf Wikiloc</h2>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <a
                  href={tour.wikiloc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <MapPin className="h-5 w-5" />
                  Route auf Wikiloc anzeigen
                </a>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToBooking}
                className="w-full sm:w-auto"
              >
                {t("tours.requestTour")}
              </Button>
              <Button
                variant="secondary-cta"
                size="lg"
                onClick={scrollToBooking}
                className="w-full sm:w-auto"
              >
                {t("nav.bookTour")}
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TourDetails;