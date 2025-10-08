import { Card, CardContent } from "@/components/ui/card";
import communityWork from "@/assets/community-work.jpeg";
import procession from "@/assets/procession.jpeg";
import foodService from "@/assets/food-service.jpg";
import childrenEducation from "@/assets/children-education.jpeg";

const works = [
  {
    image: communityWork,
    title: "Construcción Comunitaria",
    description: "Trabajamos junto a las comunidades en proyectos de construcción y mejora de espacios, poniendo la fe en acción con nuestras propias manos."
  },
  {
    image: procession,
    title: "Celebración de Fe",
    description: "Organizamos y participamos en eventos religiosos que fortalecen la comunidad y mantienen vivas nuestras tradiciones cristianas."
  },
  {
    image: foodService,
    title: "Alimentación Solidaria",
    description: "Servimos comida caliente a personas en situación de calle, brindando no solo alimento sino también dignidad y esperanza."
  },
  {
    image: childrenEducation,
    title: "Educación y Niñez",
    description: "Acompañamos a niños en situación vulnerable a través de programas educativos, recreativos y de formación en valores."
  }
];

export const Works = () => {
  return (
    <section id="works" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nuestras{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Obras de Amor
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada acción cuenta. Conoce los proyectos donde hemos llevado esperanza, 
            ayuda y el amor de Cristo a quienes más lo necesitan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <Card 
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
