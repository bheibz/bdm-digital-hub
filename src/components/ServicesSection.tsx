import { FileText, Code, PenTool, TrendingUp, BarChart3, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { services } from "@/data/services";

const iconMap: Record<string, any> = {
  FileText,
  Code,
  PenTool,
  TrendingUp,
  BarChart3,
  Headphones
};

const ServicesSection = () => {
  const handleWhatsApp = (service: typeof services[0]) => {
    const message = `Halo, saya tertarik dengan layanan: ${service.title}. Mohon informasi lebih lanjut.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Layanan Profesional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan bisnis dan personal Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            
            return (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 border-border group">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-lg font-bold text-primary">{service.price}</p>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                    onClick={() => handleWhatsApp(service)}
                  >
                    Konsultasi Gratis
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
