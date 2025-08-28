import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Shield, 
  Star, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone,
  Edit,
  Settings
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import EquipmentCard from "@/components/equipment/EquipmentCard";
import ultrasoundImage from "@/assets/ultrasound-hero.jpg";

const Perfil = () => {
  const user = {
    name: "Dr. María González",
    email: "maria.gonzalez@veterinaria.com",
    phone: "+52 55 1234 5678",
    location: "Ciudad de México, CDMX",
    memberSince: "Marzo 2022",
    verified: true,
    rating: 4.8,
    reviewCount: 45,
    bio: "Veterinaria con 15 años de experiencia en cirugía y diagnóstico por imagen. Especialista en animales pequeños y exóticos."
  };

  const myEquipment = [
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
  ];

  const bookingHistory = [
    {
      id: "1",
      equipment: "Microscopio Quirúrgico",
      date: "15-25 Dic 2024",
      total: "$4,200",
      status: "completado",
      rating: 5
    },
    {
      id: "2", 
      equipment: "Monitor de Signos Vitales",
      date: "8-10 Dic 2024",
      total: "$1,080",
      status: "completado",
      rating: 4
    },
  ];

  const reviews = [
    {
      from: "Dr. Carlos López",
      equipment: "Ultrasonido GE",
      rating: 5,
      comment: "Excelente equipo, muy bien mantenido. La Dra. González fue muy profesional.",
      date: "Hace 2 semanas"
    },
    {
      from: "Clínica San Juan",
      equipment: "Ultrasonido GE",
      rating: 5,
      comment: "Equipo de alta calidad, funcionó perfectamente. Definitivamente lo rentaré de nuevo.",
      date: "Hace 1 mes"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <Card className="mb-8 animate-fade-in">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-medical-primary text-white text-2xl">
                MG
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold text-text-primary">{user.name}</h1>
                {user.verified && (
                  <Badge className="bg-medical-success text-white">
                    <Shield className="h-3 w-3 mr-1" />
                    Verificado
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center space-x-4 text-text-secondary mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{user.rating}</span>
                  <span className="ml-1">({user.reviewCount} reseñas)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Miembro desde {user.memberSince}</span>
                </div>
              </div>
              
              <p className="text-text-secondary mb-4">{user.bio}</p>
              
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Editar Perfil
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Configuración
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="equipment" className="animate-slide-up">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="equipment">Mis Equipos</TabsTrigger>
          <TabsTrigger value="bookings">Reservas</TabsTrigger>
          <TabsTrigger value="reviews">Reseñas</TabsTrigger>
          <TabsTrigger value="info">Información</TabsTrigger>
        </TabsList>

        <TabsContent value="equipment" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Equipos Publicados</CardTitle>
                <Button>Agregar Equipo</Button>
              </div>
            </CardHeader>
            <CardContent>
              {myEquipment.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myEquipment.map((equipment) => (
                    <EquipmentCard key={equipment.id} {...equipment} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <User className="h-12 w-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-secondary">No tienes equipos publicados</p>
                  <Button className="mt-4">Publicar tu primer equipo</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Reservas</CardTitle>
            </CardHeader>
            <CardContent>
              {bookingHistory.length > 0 ? (
                <div className="space-y-4">
                  {bookingHistory.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h3 className="font-medium text-text-primary">{booking.equipment}</h3>
                        <p className="text-sm text-text-secondary">{booking.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-text-primary">{booking.total}</div>
                        <div className="flex items-center text-sm">
                          <Badge variant={booking.status === "completado" ? "default" : "secondary"}>
                            {booking.status}
                          </Badge>
                          {booking.rating && (
                            <div className="flex items-center ml-2">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                              <span>{booking.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-secondary">No tienes reservas aún</p>
                  <Button className="mt-4">Explorar Equipos</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Reseñas Recibidas</CardTitle>
            </CardHeader>
            <CardContent>
              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-border last:border-0 pb-6 last:pb-0">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarFallback>{review.from.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-text-primary">{review.from}</span>
                            <div className="flex items-center">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-sm text-text-muted">{review.date}</span>
                          </div>
                          <p className="text-text-secondary mb-1">{review.comment}</p>
                          <p className="text-sm text-text-muted">Equipo: {review.equipment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Star className="h-12 w-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-secondary">No tienes reseñas aún</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="info" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-text-secondary" />
                    <div>
                      <div className="text-sm text-text-muted">Email</div>
                      <div className="text-text-primary">{user.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-text-secondary" />
                    <div>
                      <div className="text-sm text-text-muted">Teléfono</div>
                      <div className="text-text-primary">{user.phone}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-text-secondary" />
                    <div>
                      <div className="text-sm text-text-muted">Ubicación</div>
                      <div className="text-text-primary">{user.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-text-secondary" />
                    <div>
                      <div className="text-sm text-text-muted">Verificación</div>
                      <div className="text-medical-success">Cuenta verificada</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Alert className="mt-6">
        <User className="h-4 w-4" />
        <AlertDescription>
          Para activar funcionalidades avanzadas de perfil, autenticación y gestión de usuarios, conecta tu proyecto a Supabase.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Perfil;