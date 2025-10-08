import { Users, Heart, Calendar, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Voluntarios Activos"
  },
  {
    icon: Heart,
    value: "2000+",
    label: "Personas Ayudadas"
  },
  {
    icon: Calendar,
    value: "50+",
    label: "Proyectos Realizados"
  },
  {
    icon: MapPin,
    value: "15+",
    label: "Comunidades Alcanzadas"
  }
];

export const Impact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nuestro{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Impacto
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Juntos hemos logrado cambios reales en nuestra comunidad. 
            Estos números representan vidas transformadas por el amor de Cristo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
