import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

export const Join = () => {
  return (
    <section id="join" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-primary to-secondary p-1">
            <CardContent className="bg-background p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  ¿Listo para{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Marcar la Diferencia
                  </span>
                  ?
                </h2>
                <p className="text-xl text-muted-foreground">
                  No importa tu edad o experiencia. Si tienes un corazón dispuesto a servir, 
                  hay un lugar para ti en JUCAS. ¡Únete hoy y transforma tu fe en acción!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">¿Qué Ofrecemos?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Formación espiritual y crecimiento en comunidad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Proyectos significativos que impactan vidas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Red de apoyo de jóvenes con valores compartidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Oportunidades de liderazgo y desarrollo personal</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Contáctanos</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-3 border-2"
                      asChild
                    >
                      <a href="mailto:contacto@jucas.org">
                        <Mail className="mr-3 h-5 w-5 shrink-0" />
                        <span>kreitos_05@outlook.com</span>
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-3 border-2"
                      asChild
                    >
                      <a href="https://wa.me/525656585620" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-3 h-5 w-5 shrink-0" />
                        <span>+52 1 56 5658 5620</span>
                      </a>
                    </Button>
                    
                    <div className="flex gap-3 pt-2">
                      <Button size="icon" variant="outline" className="border-2" asChild>
                        <a href="https://www.facebook.com/profile.php?id=61554688630735" target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button size="icon" variant="outline" className="border-2" asChild>
                        <a href="https://www.facebook.com/profile.php?id=61554688630735" target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6">
                <a href="https://wa.me/525656585620">
                <Button 
                  size="lg"
                  className="text-lg px-12 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                  Quiero Ser Parte de JUCAS ❤️
                </Button>
                  </a>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};
