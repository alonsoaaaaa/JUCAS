import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  description: string;
  image: string;
}

export const TeamMemberCard = ({ name, description, image }: TeamMemberCardProps) => {
  return (
    <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
