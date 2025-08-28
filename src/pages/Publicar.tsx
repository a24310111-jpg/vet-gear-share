import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, X, MapPin, DollarSign, FileText, Camera } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Publicar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    pricePerHour: "",
    pricePerDay: "",
    deposit: "",
    policies: "",
    images: [] as File[],
  });

  const steps = [
    { number: 1, title: "Información Básica", icon: FileText },
    { number: 2, title: "Ubicación y Precio", icon: MapPin },
    { number: 3, title: "Fotos y Políticas", icon: Camera },
  ];

  const categories = [
    "Diagnóstico por Imagen",
    "Instrumental Quirúrgico", 
    "Anestesiología",
    "Monitoreo",
    "Laboratorio",
    "Rehabilitación",
    "Emergencia",
    "Dental"
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages].slice(0, 5) // Max 5 images
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          Publicar Equipo Veterinario
        </h1>
        <p className="text-lg text-text-secondary">
          Comienza a generar ingresos rentando tu equipo a otros profesionales
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8 animate-slide-up">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              currentStep >= step.number
                ? "bg-medical-primary border-medical-primary text-white"
                : "border-border text-text-muted"
            }`}>
              <step.icon className="h-5 w-5" />
            </div>
            <div className={`ml-3 ${
              currentStep >= step.number ? "text-text-primary" : "text-text-muted"
            }`}>
              <div className="text-sm font-medium">{step.title}</div>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-12 h-0.5 mx-4 ${
                currentStep > step.number ? "bg-medical-primary" : "bg-border"
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <Card className="animate-scale-in">
        <CardHeader>
          <CardTitle>Paso {currentStep} de 3</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="title">Título del equipo *</Label>
                <Input
                  id="title"
                  placeholder="Ej: Ultrasonido Veterinario GE LOGIQ P9"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoría *</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
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

              <div className="space-y-2">
                <Label htmlFor="description">Descripción *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe tu equipo, sus características principales, estado de conservación, accesorios incluidos..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* Step 2: Location and Pricing */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <Alert>
                <MapPin className="h-4 w-4" />
                <AlertDescription>
                  Para activar la funcionalidad de ubicación y pagos, necesitas conectar tu proyecto a Supabase.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <Label htmlFor="location">Ubicación *</Label>
                <Input
                  id="location"
                  placeholder="Ciudad, Estado"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pricePerHour">Precio por hora *</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
                    <Input
                      id="pricePerHour"
                      type="number"
                      placeholder="0"
                      className="pl-10"
                      value={formData.pricePerHour}
                      onChange={(e) => setFormData(prev => ({ ...prev, pricePerHour: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pricePerDay">Precio por día *</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
                    <Input
                      id="pricePerDay"
                      type="number"
                      placeholder="0"
                      className="pl-10"
                      value={formData.pricePerDay}
                      onChange={(e) => setFormData(prev => ({ ...prev, pricePerDay: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deposit">Depósito de garantía (opcional)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
                  <Input
                    id="deposit"
                    type="number"
                    placeholder="0"
                    className="pl-10"
                    value={formData.deposit}
                    onChange={(e) => setFormData(prev => ({ ...prev, deposit: e.target.value }))}
                  />
                </div>
                <p className="text-sm text-text-muted">
                  Depósito reembolsable para cubrir posibles daños
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Photos and Policies */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <Label>Fotos del equipo *</Label>
                
                {/* Image Upload */}
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-text-muted mx-auto mb-4" />
                    <div className="text-text-primary font-medium mb-2">
                      Arrastra fotos aquí o haz clic para seleccionar
                    </div>
                    <div className="text-sm text-text-muted">
                      Máximo 5 fotos. Formato JPG, PNG. Tamaño máximo 5MB por foto.
                    </div>
                  </label>
                </div>

                {/* Image Preview */}
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 h-6 w-6 p-0"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="policies">Políticas de uso *</Label>
                <Textarea
                  id="policies"
                  placeholder="Especifica las condiciones de uso, restricciones, requisitos del usuario, procedimientos de limpieza, etc."
                  value={formData.policies}
                  onChange={(e) => setFormData(prev => ({ ...prev, policies: e.target.value }))}
                  rows={4}
                />
              </div>

              <Alert>
                <AlertDescription>
                  Al publicar tu equipo, aceptas nuestros términos de servicio y políticas de seguridad.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Anterior
            </Button>
            
            {currentStep < 3 ? (
              <Button onClick={nextStep}>
                Siguiente
              </Button>
            ) : (
              <Button className="bg-medical-primary hover:bg-medical-primary/90">
                Publicar Equipo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Need Supabase Alert */}
      <Alert className="mt-6">
        <AlertDescription>
          Para completar la funcionalidad de pagos, mensajes y reservas, necesitas conectar tu proyecto a Supabase. 
          Haz clic en el botón verde "Supabase" en la parte superior derecha para comenzar.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Publicar;