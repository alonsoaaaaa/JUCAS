import { TeamMemberCard } from "@/components/ui/team-member-card";

export const Conocenos = () => {
  const teamMembers = [
    {
      name: "Sarai",
      description: "Coordinadora General de JUCAS. Apasionada por el servicio comunitario y el desarrollo juvenil.",
      image: "/sara.png"
    },
    {
      name: "Jairo",
        description: "Segundo al mando en JUCAS. Audaz y valiente, muy versatil.",
        image: "/jairo.jpeg"
    },
    {
      name: "Diana Cano",
      description: "Taciturna, pero con una gran capacidad de escucha.",
      image: "/diana.png"
    },
    {
      name: "Alonso Alarcón",
      description: "Coordinador de Voluntariado. Conecta a jóvenes con oportunidades de servicio significativo.",
      image: "/alonso1.webp"
    },
    {
      name: "Chico del coro",
      description: "Se encarga de la música y animación en los eventos.",
      image: "/chico-del-coro.png"
    }
  ];

  return (
    <section id="conocenos" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Conócenos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce al equipo que hace posible la misión de JUCAS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
