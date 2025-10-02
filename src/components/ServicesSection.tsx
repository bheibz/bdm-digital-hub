import ServiceCard3D from "./ServiceCard3D";
import { services } from "@/data/services";

const icon3DMap: Record<string, { type: "box" | "sphere" | "torus" | "cone" | "octahedron"; color: string }> = {
  FileText: { type: "box", color: "#00d9ff" },
  Code: { type: "octahedron", color: "#ff00ff" },
  PenTool: { type: "sphere", color: "#00ff88" },
  TrendingUp: { type: "cone", color: "#ff0088" },
  BarChart3: { type: "torus", color: "#8800ff" },
  Headphones: { type: "sphere", color: "#00d9ff" }
};

const ServicesSection = () => {
  const handleWhatsApp = (service: typeof services[0]) => {
    const message = `Halo, saya tertarik dengan layanan: ${service.title}. Mohon informasi lebih lanjut.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold neon-text">
            Layanan Profesional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan bisnis dan personal Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const icon3D = icon3DMap[service.icon];
            
            return (
              <ServiceCard3D
                key={service.id}
                service={service}
                onContact={handleWhatsApp}
                iconType={icon3D.type}
                color={icon3D.color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
