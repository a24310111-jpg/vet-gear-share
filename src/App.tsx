import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Index from "./pages/Index";
import Explorar from "./pages/Explorar";
import EquipmentDetail from "./pages/EquipmentDetail";
import Publicar from "./pages/Publicar";
import Mensajes from "./pages/Mensajes";
import Perfil from "./pages/Perfil";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explorar" element={<Explorar />} />
            <Route path="/equipo/:id" element={<EquipmentDetail />} />
            <Route path="/publicar" element={<Publicar />} />
            <Route path="/mensajes" element={<Mensajes />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
