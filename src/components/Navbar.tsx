import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">B</span>
            </div>
            <span className="font-bold text-xl text-foreground">Bheibz Digital Media</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" onClick={() => scrollToSection("home")}>
              Beranda
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("products")}>
              Toko Digital
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("services")}>
              Layanan
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("content")}>
              Konten
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("academy")}>
              Academy
            </Button>
            <Button 
              className="ml-4 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
              onClick={() => scrollToSection("contact")}
            >
              Hubungi Kami
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" onClick={() => scrollToSection("home")} className="justify-start">
                Beranda
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("products")} className="justify-start">
                Toko Digital
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("services")} className="justify-start">
                Layanan
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("content")} className="justify-start">
                Konten
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("academy")} className="justify-start">
                Academy
              </Button>
              <Button 
                className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 justify-start"
                onClick={() => scrollToSection("contact")}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
