import { Star, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { courses } from "@/data/academy";

const AcademySection = () => {
  const handleEnroll = (course: typeof courses[0]) => {
    const message = `Halo, saya tertarik mendaftar kursus: ${course.title} (${course.price}). Mohon informasi lebih lanjut.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="academy" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold neon-text">
            BDM Academy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kursus berkualitas tinggi untuk meningkatkan skill dan karir Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="glow-card group transition-all duration-500 overflow-hidden flex flex-col">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent/20 backdrop-blur-sm text-accent px-3 py-1 rounded-full text-sm font-semibold neon-border neon-text">
                    {course.level}
                  </span>
                </div>
              </div>
              
              <CardHeader className="flex-grow">
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors neon-text">
                  {course.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
                <div className="text-sm text-muted-foreground pt-2">
                  Instruktur: {course.instructor}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()} siswa
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-secondary text-secondary mr-1" />
                    <span className="font-semibold neon-text">{course.rating}</span>
                  </div>
                  <div className="text-xl font-bold text-primary neon-text">{course.price}</div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button 
                  className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 relative group/btn overflow-hidden"
                  onClick={() => handleEnroll(course)}
                >
                  <span className="relative z-10">Daftar Sekarang</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity"></div>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademySection;
