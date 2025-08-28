import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  onSearch?: (query: string, location: string, dates: string) => void;
  size?: "default" | "large";
}

const SearchBar = ({ className, onSearch, size = "default" }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState("");

  const handleSearch = () => {
    onSearch?.(query, location, dates);
  };

  const isLarge = size === "large";

  return (
    <div
      className={cn(
        "bg-surface border border-border shadow-card rounded-2xl overflow-hidden",
        isLarge ? "p-2" : "p-1",
        className
      )}
    >
      <div className={cn(
        "grid gap-1",
        isLarge ? "grid-cols-1 md:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"
      )}>
        {/* Equipment Search */}
        <div className={cn(
          "relative",
          isLarge ? "col-span-1 md:col-span-1" : ""
        )}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-text-muted" />
          </div>
          <Input
            type="text"
            placeholder="Buscar equipo médico..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={cn(
              "pl-10 border-0 bg-transparent focus:ring-0 focus:border-0",
              isLarge ? "h-14 text-base" : "h-10"
            )}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Location Search */}
        <div className={cn(
          "relative border-l border-border",
          isLarge ? "col-span-1 md:col-span-1" : ""
        )}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-4 w-4 text-text-muted" />
          </div>
          <Input
            type="text"
            placeholder="Ciudad o ubicación..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={cn(
              "pl-10 border-0 bg-transparent focus:ring-0 focus:border-0",
              isLarge ? "h-14 text-base" : "h-10"
            )}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Date Range */}
        <div className={cn(
          "relative border-l border-border",
          isLarge ? "col-span-1 md:col-span-1" : ""
        )}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-4 w-4 text-text-muted" />
          </div>
          <Input
            type="text"
            placeholder="¿Cuándo?"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className={cn(
              "pl-10 border-0 bg-transparent focus:ring-0 focus:border-0",
              isLarge ? "h-14 text-base" : "h-10"
            )}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Search Button */}
        <div className={cn(
          "flex items-center",
          isLarge ? "col-span-1 md:col-span-1 pl-2" : "pl-1"
        )}>
          <Button
            onClick={handleSearch}
            className={cn(
              "w-full bg-medical-primary hover:bg-medical-primary/90",
              isLarge ? "h-12 px-8 text-base" : "h-9"
            )}
          >
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;