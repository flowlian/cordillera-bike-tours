import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { toursData } from "@/data/tours";
import TourCard from "./TourCard";
import tourPina1 from "@/assets/tour-pina-1.jpg";
import tourCafe1 from "@/assets/tour-cafe-1.jpg";
import tourPalmas1 from "@/assets/tour-palmas-1.jpg";
import tourBosque1 from "@/assets/tour-bosque-1.jpg";
import tourFlores1 from "@/assets/tour-flores-1.jpg";
import tourRio1 from "@/assets/tour-rio-1.jpg";
import tourCacao1 from "@/assets/tour-cacao-1.jpg";
import tourMango1 from "@/assets/tour-mango-1.jpg";
import tourAguacate1 from "@/assets/tour-aguacate-1.jpg";

const Tours = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const tourImages: Record<string, string> = {
    pina: tourPina1,
    cafe: tourCafe1,
    palmas: tourPalmas1,
    bosque: tourBosque1,
    flores: tourFlores1,
    rio: tourRio1,
    cacao: tourCacao1,
    mango: tourMango1,
    aguacate: tourAguacate1,
  };

  const tours = toursData[language].map(tour => ({
    ...tour,
    image: tourImages[tour.id],
  }));

  return (
    <section id="tours" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t("tours.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t("tours.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} onViewDetails={() => navigate(`/tour/${tour.id}`)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;