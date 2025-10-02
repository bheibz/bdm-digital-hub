import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Scene3D from "./Scene3D";
import { Service } from "@/data/services";

interface ServiceCard3DProps {
  service: Service;
  onContact: (service: Service) => void;
  iconType: "box" | "sphere" | "torus" | "cone" | "octahedron";
  color: string;
}

const ServiceCard3D = ({ service, onContact, iconType, color }: ServiceCard3DProps) => {
  return (
    <Card className="glow-card group transition-all duration-500 overflow-hidden">
      <div className="h-48 relative">
        <Scene3D type={iconType} color={color} className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none"></div>
      </div>
      
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors neon-text">
          {service.title}
        </CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2 neon-text">✓</span>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t neon-border">
          <p className="text-lg font-bold text-primary neon-text">{service.price}</p>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 relative group/btn overflow-hidden"
          onClick={() => onContact(service)}
        >
          <span className="relative z-10">Konsultasi Gratis</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity"></div>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard3D;
