import { TeamMemberCard } from "@/components/ui/team-member-card";

export const Conocenos = () => {
  const teamMembers = [
    {
      name: "María González",
      description: "Coordinadora General de JUCAS. Apasionada por el servicio comunitario y el desarrollo juvenil.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Juan Pérez",
      description: "Líder de Proyectos Sociales. Especializado en organización de eventos y captación de recursos.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Ana Martínez",
      description: "Responsable de Formación Espiritual. Guía retiros y talleres de crecimiento personal.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Carlos Rodríguez",
      description: "Coordinador de Voluntariado. Conecta a jóvenes con oportunidades de servicio significativo.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Laura Sánchez",
      description: "Encargada de Comunicación. Difunde nuestra misión y mantiene conectada a nuestra comunidad.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    },
    {
      name: "Diego Torres",
      description: "Tesorero y Administrador. Gestiona los recursos para maximizar nuestro impacto social.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
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
