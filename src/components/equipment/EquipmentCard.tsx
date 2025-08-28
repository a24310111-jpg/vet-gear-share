import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface EquipmentCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  pricePerHour: number;
  pricePerDay: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  availability: "available" | "busy" | "unavailable";
  isVerified?: boolean;
}

const EquipmentCard = ({
  id,
  title,
  category,
  location,
  pricePerHour,
  pricePerDay,
  rating,
  reviewCount,
  imageUrl,
  availability,
  isVerified = false,
}: EquipmentCardProps) => {
  const availabilityColors = {
    available: "bg-medical-success text-white",
    busy: "bg-orange-500 text-white",
    unavailable: "bg-muted text-muted-foreground",
  };

  const availabilityLabels = {
    available: "Disponible",
    busy: "Ocupado",
    unavailable: "No disponible",
  };

  return (
    <Card className="group overflow-hidden bg-surface border-border shadow-card hover:shadow-premium transition-all duration-300 animate-fade-in">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className={cn("text-xs font-medium", availabilityColors[availability])}>
            <Clock className="h-3 w-3 mr-1" />
            {availabilityLabels[availability]}
          </Badge>
        </div>
        {isVerified && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-text-primary">
              ✓ Verificado
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <h3 className="font-semibold text-text-primary line-clamp-2 leading-tight">
            {title}
          </h3>
        </div>

        <div className="flex items-center text-sm text-text-secondary">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-text-primary">
            {rating.toFixed(1)}
          </span>
          <span className="text-sm text-text-muted">
            ({reviewCount} reseñas)
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="text-sm text-text-secondary">Desde</div>
            <div className="font-bold text-text-primary">
              ${pricePerHour}/hora
            </div>
            <div className="text-sm text-text-muted">
              ${pricePerDay}/día
            </div>
          </div>
          
          <Button asChild size="sm" disabled={availability === "unavailable"}>
            <Link to={`/equipo/${id}`}>
              Ver Detalles
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EquipmentCard;