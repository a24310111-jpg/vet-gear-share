import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, MessageCircle, User, Plus } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { href: "/", label: "Inicio", icon: null },
    { href: "/explorar", label: "Explorar", icon: Search },
    { href: "/mensajes", label: "Mensajes", icon: MessageCircle },
    { href: "/perfil", label: "Perfil", icon: User },
  ];

  return (
    <nav className="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-lg flex items-center justify-center">
              <Plus className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-text-primary">VetRent</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-medical-primary bg-medical-primary/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/auth">Ingresar</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/publicar">Publicar Equipo</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;