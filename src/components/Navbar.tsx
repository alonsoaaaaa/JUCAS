import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-bold">JUCAS</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('works')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Nuestro Trabajo
            </button>
            <button 
              onClick={() => scrollToSection('join')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contacto
            </button>
            <Button onClick={() => scrollToSection('join')}>
              Únete
            </Button>
          </div>

          <Button 
            className="md:hidden"
            onClick={() => scrollToSection('join')}
          >
            Únete
          </Button>
        </div>
      </div>
    </nav>
  );
};
