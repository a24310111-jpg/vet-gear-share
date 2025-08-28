import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Plus } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Mensajes = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-text-primary mb-4">Mensajes</h1>
        <p className="text-lg text-text-secondary">
          Comunicación directa con propietarios y arrendatarios
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Conversaciones
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <MessageCircle className="h-12 w-12 text-text-muted mx-auto mb-4" />
                <p className="text-text-secondary">No tienes conversaciones activas</p>
                <p className="text-sm text-text-muted mt-2">
                  Los mensajes aparecerán aquí cuando tengas reservas activas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2">
          <Card className="h-96 animate-scale-in">
            <CardContent className="h-full flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="h-16 w-16 text-text-muted mx-auto mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  Selecciona una conversación
                </h3>
                <p className="text-text-secondary">
                  Elige una conversación para comenzar a chatear
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Alert className="mt-6">
        <MessageCircle className="h-4 w-4" />
        <AlertDescription>
          Para activar la funcionalidad de mensajes en tiempo real, conecta tu proyecto a Supabase. 
          Los mensajes se asociarán automáticamente con las reservas de equipo.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Mensajes;