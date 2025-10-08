import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground fill-current" />
            </div>
            <span className="font-bold">JUCAS</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Jóvenes Unidos en Cristo en la Acción Social. Todos los derechos reservados.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Transformando vidas con fe y acción
          </p>
        </div>
      </div>
    </footer>
  );
};
