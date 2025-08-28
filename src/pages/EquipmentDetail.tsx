import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, Shield, Clock, Calendar, Heart, Share } from "lucide-react";
import { useParams } from "react-router-dom";
import ultrasoundImage from "@/assets/ultrasound-hero.jpg";

const EquipmentDetail = () => {
  const { id } = useParams();

  // Mock data - en una app real vendría de la API
  const equipment = {
    id: "1",
    title: "Ultrasonido Veterinario GE LOGIQ P9",
    category: "Diagnóstico por Imagen",
    location: "Ciudad de México, CDMX",
    pricePerHour: 450,
    pricePerDay: 2800,
    rating: 4.9,
    reviewCount: 24,
    imageUrl: ultrasoundImage,
    availability: "available",
    isVerified: true,
    description: "Ultrasonido de alta gama con tecnología avanzada para diagnóstico veterinario. Incluye sondas específicas para pequeños y grandes animales.",
    specifications: {
      "Marca": "GE Healthcare",
      "Modelo": "LOGIQ P9",
      "Frecuencia": "2-15 MHz",
      "Pantalla": "21.5 pulgadas LCD",
      "Sondas incluidas": "Linear, Convexa, Sectorial",
      "Peso": "85 kg",
      "Certificaciones": "FDA, CE, COFEPRIS"
    },
    policies: [
      "Equipo debe ser operado solo por veterinarios certificados",
      "Limpieza y desinfección incluida en el precio",
      "Seguro de responsabilidad civil incluido",
      "Entrega y recolección en ubicación acordada",
      "Capacitación básica incluida si es necesario"
    ],
    owner: {
      name: "Dr. María González",
      rating: 4.8,
      reviewCount: 45,
      verified: true,
      memberSince: "2022"
    },
    reviews: [
      {
        user: "Dr. Carlos López",
        rating: 5,
        comment: "Excelente equipo, muy bien mantenido. La Dra. González fue muy profesional.",
        date: "Hace 2 semanas"
      },
      {
        user: "Clínica San Juan",
        rating: 5,
        comment: "Equipo de alta calidad, funcionó perfectamente. Definitivamente lo rentaré de nuevo.",
        date: "Hace 1 mes"
      }
    ]
  };

  const timeSlots = [
    { date: "Hoy", slots: ["14:00", "16:00", "18:00"] },
    { date: "Mañana", slots: ["09:00", "11:00", "14:00", "16:00", "18:00"] },
    { date: "Viernes", slots: ["09:00", "11:00", "14:00"] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Gallery */}
          <div className="aspect-[16/10] rounded-xl overflow-hidden animate-fade-in">
            <img
              src={equipment.imageUrl}
              alt={equipment.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Basic Info */}
          <div className="animate-slide-up">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="mb-2">{equipment.category}</Badge>
                <h1 className="text-3xl font-bold text-text-primary mb-2">
                  {equipment.title}
                </h1>
                <div className="flex items-center space-x-4 text-text-secondary">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{equipment.rating}</span>
                    <span className="ml-1">({equipment.reviewCount} reseñas)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{equipment.location}</span>
                  </div>
                  {equipment.isVerified && (
                    <div className="flex items-center text-medical-success">
                      <Shield className="h-4 w-4 mr-1" />
                      <span>Verificado</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Description */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Descripción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary leading-relaxed">
                {equipment.description}
              </p>
            </CardContent>
          </Card>

          {/* Specifications */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Especificaciones Técnicas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(equipment.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="font-medium text-text-primary">{key}</span>
                    <span className="text-text-secondary">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Policies */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Políticas de Uso</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {equipment.policies.map((policy, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-text-secondary">{policy}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Reseñas ({equipment.reviewCount})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {equipment.reviews.map((review, index) => (
                <div key={index}>
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-text-primary">{review.user}</span>
                        <div className="flex items-center">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-text-muted">{review.date}</span>
                      </div>
                      <p className="text-text-secondary">{review.comment}</p>
                    </div>
                  </div>
                  {index < equipment.reviews.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Pricing Card */}
            <Card className="animate-scale-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-text-primary">
                      ${equipment.pricePerHour}/hora
                    </div>
                    <div className="text-text-secondary">
                      ${equipment.pricePerDay}/día
                    </div>
                  </div>
                  <Badge className="bg-medical-success text-white">
                    <Clock className="h-3 w-3 mr-1" />
                    Disponible
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-medical-primary hover:bg-medical-primary/90" size="lg">
                  Reservar Ahora
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Enviar Mensaje
                </Button>
                <p className="text-sm text-text-muted text-center">
                  No se cobrará hasta confirmar la reserva
                </p>
              </CardContent>
            </Card>

            {/* Available Time Slots */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Horarios Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {timeSlots.map((day, index) => (
                  <div key={index}>
                    <div className="font-medium text-text-primary mb-2">{day.date}</div>
                    <div className="grid grid-cols-3 gap-2">
                      {day.slots.map((slot) => (
                        <Button
                          key={slot}
                          variant="outline"
                          size="sm"
                          className="text-xs hover:bg-medical-primary hover:text-white"
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Owner Info */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Propietario</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-medical-primary text-white">
                      {equipment.owner.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-text-primary">{equipment.owner.name}</div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {equipment.owner.rating} · {equipment.owner.reviewCount} reseñas
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary mb-4">
                  {equipment.owner.verified && (
                    <Badge variant="secondary" className="text-xs">
                      <Shield className="h-3 w-3 mr-1" />
                      Verificado
                    </Badge>
                  )}
                  <span>Miembro desde {equipment.owner.memberSince}</span>
                </div>
                <Button variant="outline" className="w-full">
                  Ver Perfil
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetail;