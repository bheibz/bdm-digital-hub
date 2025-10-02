import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { contents } from "@/data/content";

const ContentSection = () => {
  return (
    <section id="content" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold neon-text">
            Konten & Artikel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Informasi, tips, dan strategi untuk mengembangkan bisnis digital Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contents.map((content) => (
            <Card key={content.id} className="glow-card group transition-all duration-500 overflow-hidden">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={content.image} 
                  alt={content.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary/20 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-sm font-semibold neon-border neon-text">
                    {content.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors neon-text">
                  {content.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {content.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(content.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                </div>
                <Button variant="outline" className="w-full neon-border hover:bg-primary/10 relative group/btn">
                  <span className="relative z-10">Baca Selengkapnya</span>
                  <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
