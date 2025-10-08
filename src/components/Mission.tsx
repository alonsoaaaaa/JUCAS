import { Heart, Users, Lightbulb, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Amor al Prójimo",
    description: "Vivimos el mensaje de Cristo sirviendo con amor y compasión a los más necesitados"
  },
  {
    icon: Users,
    title: "Comunidad Unida",
    description: "Juntos somos más fuertes. Construimos lazos de hermandad que transforman vidas"
  },
  {
    icon: Lightbulb,
    title: "Acción Consciente",
    description: "No solo hablamos, actuamos. Cada proyecto es una oportunidad de hacer el bien"
  },
  {
    icon: HandHeart,
    title: "Servicio Social",
    description: "Nuestras manos son instrumentos de cambio en la comunidad"
  }
];

export const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Qué es{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              JUCAS
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos <strong>Jóvenes Unidos Cristianos en la Acción Social</strong>, 
            un movimiento de fe en acción que transforma comunidades a través del servicio, 
            el amor y el compromiso con los más vulnerables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
