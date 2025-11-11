import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Mountain, MapPin } from "lucide-react";

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
  highlights,
  onViewDetails,
}: TourCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {title}
        </h3>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{difficulty}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mountain className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{elevation}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{distance}</span>
          </div>
        </div>

        <p className="text-foreground/80">{description}</p>

        <div>
          <h4 className="font-semibold mb-2">Highlights:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <Button
          variant="default"
          className="w-full"
          onClick={scrollToBooking}
        >
          Tour anfragen
        </Button>
      </div>
    </Card>
  );
};

export default TourCard;
