import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export const Hero = () => {
  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">Jóvenes Unidos en Acción</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transforma{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vidas
            </span>
            {" "}con{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Tu Fe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Únete a JUCAS y sé parte de una comunidad de jóvenes cristianos 
            comprometidos con el cambio social y la ayuda a quienes más lo necesitan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToJoin}
              className="group text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Únete Ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2"
            >
              Conoce Nuestro Trabajo
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};
