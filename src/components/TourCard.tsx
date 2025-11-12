import { Clock, TrendingUp, MapPin, Route } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface TourCardProps {
  title: string;
  image: string;
  duration: string;
  difficulty: string;
  elevation: string;
  distance: string;
  description: string;
  highlights: string[];
  onViewDetails: () => void;
}

const TourCard = ({
  title,
  image,
  duration,
  difficulty,
  elevation,
  distance,
  description,
  onViewDetails,
}: TourCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{elevation}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Route className="h-4 w-4 text-primary" />
            <span>{distance}</span>
          </div>
        </div>

        <p className="text-foreground/70 mb-6 line-clamp-3 flex-grow">{description}</p>

        <Button variant="hero" className="w-full mt-auto" onClick={onViewDetails}>
          {t("tours.viewDetails")}
        </Button>
      </div>
    </Card>
  );
};

export default TourCard;