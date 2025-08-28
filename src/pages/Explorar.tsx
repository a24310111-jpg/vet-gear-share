import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import SearchBar from "@/components/search/SearchBar";
import EquipmentCard from "@/components/equipment/EquipmentCard";
import { Filter, Map, Grid3X3, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ultrasoundImage from "@/assets/ultrasound-hero.jpg";
import xrayImage from "@/assets/xray-equipment.jpg";
import surgicalImage from "@/assets/surgical-equipment.jpg";
import anesthesiaImage from "@/assets/anesthesia-machine.jpg";

const Explorar = () => {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const mockEquipment = [
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
    {
      id: "5",
      title: "Monitor de Signos Vitales",
      category: "Monitoreo",
      location: "Tijuana, BC",
      pricePerHour: 180,
      pricePerDay: 1200,
      rating: 4.6,
      reviewCount: 12,
      imageUrl: anesthesiaImage,
      availability: "available" as const,
      isVerified: true,
    },
    {
      id: "6",
      title: "Microscopio Quirúrgico",
      category: "Instrumental Quirúrgico",
      location: "Mérida, YUC",
      pricePerHour: 680,
      pricePerDay: 4200,
      rating: 4.8,
      reviewCount: 8,
      imageUrl: surgicalImage,
      availability: "available" as const,
      isVerified: true,
    },
  ];

  const categories = [
    "Diagnóstico por Imagen",
    "Instrumental Quirúrgico", 
    "Anestesiología",
    "Monitoreo",
    "Laboratorio",
    "Rehabilitación"
  ];

  const cities = [
    "Ciudad de México, CDMX",
    "Guadalajara, JAL",
    "Monterrey, NL",
    "Puebla, PUE",
    "Tijuana, BC",
    "Mérida, YUC"
  ];

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Categoría</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar categoría" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Ubicación</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar ciudad" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">
          Precio por hora: ${priceRange[0]} - ${priceRange[1]}
        </Label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={1000}
          min={0}
          step={50}
          className="w-full"
        />
      </div>

      {/* Availability */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Disponibilidad</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Cualquier momento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="now">Disponible ahora</SelectItem>
            <SelectItem value="today">Hoy</SelectItem>
            <SelectItem value="tomorrow">Mañana</SelectItem>
            <SelectItem value="week">Esta semana</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Rango de fechas</Label>
        <div className="grid grid-cols-2 gap-2">
          <Input type="date" />
          <Input type="date" />
        </div>
      </div>

      {/* Verification */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="verified" className="rounded" />
          <Label htmlFor="verified" className="text-sm">Solo equipos verificados</Label>
        </div>
      </div>

      <Button className="w-full">Aplicar Filtros</Button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          Explorar Equipos Veterinarios
        </h1>
        <SearchBar className="max-w-4xl" />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6 animate-slide-up">
        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="px-3 py-1">
            {mockEquipment.length} equipos encontrados
          </Badge>
          
          {/* Mobile Filter */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "map" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("map")}
          >
            <Map className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filters Sidebar */}
        <div className="hidden md:block w-80 flex-shrink-0">
          <div className="bg-surface border border-border rounded-xl p-6 sticky top-24 animate-scale-in">
            <div className="flex items-center space-x-2 mb-6">
              <Filter className="h-5 w-5 text-text-secondary" />
              <h2 className="font-semibold text-text-primary">Filtros</h2>
            </div>
            <FilterContent />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {mockEquipment.map((equipment, index) => (
                <div 
                  key={equipment.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <EquipmentCard {...equipment} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-border rounded-xl h-96 flex items-center justify-center animate-scale-in">
              <div className="text-center">
                <Map className="h-12 w-12 text-text-muted mx-auto mb-4" />
                <p className="text-text-secondary">Vista de mapa próximamente</p>
                <p className="text-sm text-text-muted">Conecta Supabase para habilitar mapas</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explorar;