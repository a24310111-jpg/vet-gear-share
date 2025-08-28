import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchBar from "@/components/search/SearchBar";
import EquipmentCard from "@/components/equipment/EquipmentCard";
import { ArrowRight, Shield, Clock, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/ultrasound-hero.jpg";
import ultrasoundImage from "@/assets/ultrasound-hero.jpg";
import xrayImage from "@/assets/xray-equipment.jpg";
import surgicalImage from "@/assets/surgical-equipment.jpg";
import anesthesiaImage from "@/assets/anesthesia-machine.jpg";

const Index = () => {
  const featuredEquipment = [
    {
      id: "1",
      title: "Ultrasonido Veterinario GE LOGIQ P9",
      category: "Diagnóstico por Imagen",
      location: "Ciudad de México, CDMX",
      pricePerHour: 450,
      pricePerDay: 2800,
      rating: 4.9,
      reviewCount: 24,
      imageUrl: ultrasoundImage,
      availability: "available" as const,
      isVerified: true,
    },
    {
      id: "2", 
      title: "Equipo de Rayos X Digital",
      category: "Diagnóstico por Imagen",
      location: "Guadalajara, JAL",
      pricePerHour: 380,
      pricePerDay: 2200,
      rating: 4.8,
      reviewCount: 18,
      imageUrl: xrayImage,
      availability: "available" as const,
      isVerified: true,
    },
    {
      id: "3",
      title: "Kit Quirúrgico Completo Veterinario",
      category: "Instrumental Quirúrgico",
      location: "Monterrey, NL",
      pricePerHour: 280,
      pricePerDay: 1800,
      rating: 4.7,
      reviewCount: 32,
      imageUrl: surgicalImage,
      availability: "busy" as const,
      isVerified: false,
    },
    {
      id: "4",
      title: "Máquina de Anestesia Veterinaria",
      category: "Anestesiología",
      location: "Puebla, PUE",
      pricePerHour: 520,
      pricePerDay: 3200,
      rating: 4.9,
      reviewCount: 15,
      imageUrl: anesthesiaImage,
      availability: "available" as const,
      isVerified: true,
    },
  ];

  const stats = [
    { icon: Shield, label: "Equipos Verificados", value: "500+" },
    { icon: Clock, label: "Disponibilidad 24/7", value: "98%" },
    { icon: Star, label: "Calificación Promedio", value: "4.8" },
    { icon: TrendingUp, label: "Clínicas Activas", value: "1,200+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Equipo veterinario profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-6 bg-medical-primary/10 text-medical-primary border-medical-primary/20">
              🏥 Red Profesional de Equipos Veterinarios
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Renta equipo veterinario
              <span className="bg-gradient-to-r from-medical-primary to-medical-secondary bg-clip-text text-transparent">
                {" "}cuando lo necesites
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Conectamos clínicas y veterinarios profesionales. Encuentra el equipo médico que necesitas con disponibilidad en tiempo real y precios justos.
            </p>

            <div className="space-y-6">
              <SearchBar size="large" className="animate-slide-up" />
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Button size="lg" asChild className="bg-medical-primary hover:bg-medical-primary/90">
                  <Link to="/explorar">
                    Explorar Equipos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/publicar">Publicar mi Equipo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-medical-primary/10 text-medical-primary rounded-lg mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Equipos Destacados
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Descubre el equipo médico veterinario más solicitado por profesionales como tú
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredEquipment.map((equipment, index) => (
              <div 
                key={equipment.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <EquipmentCard {...equipment} />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Button size="lg" variant="outline" asChild>
              <Link to="/explorar">
                Ver Todos los Equipos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-primary to-medical-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Tienes equipo veterinario sin usar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Genera ingresos adicionales rentando tu equipo a otros profesionales veterinarios de confianza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/publicar">Publicar mi Equipo</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-primary" asChild>
              <Link to="/auth">Crear Cuenta</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
