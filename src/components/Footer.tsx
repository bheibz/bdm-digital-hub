import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t neon-border pt-16 pb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center relative group">
                <span className="text-foreground font-bold text-xl neon-text">B</span>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>
              <span className="font-bold text-xl neon-text">Bheibz Digital Media</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Platform digital terpadu untuk produk berkualitas, layanan profesional, dan konten edukatif.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 neon-border rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors relative group">
                <Facebook className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#" className="w-9 h-9 neon-border rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors relative group">
                <Instagram className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-secondary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#" className="w-9 h-9 neon-border rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors relative group">
                <Twitter className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-accent/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#" className="w-9 h-9 neon-border rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors relative group">
                <Youtube className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold neon-text mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Toko Digital</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Layanan</a></li>
              <li><a href="#content" className="text-muted-foreground hover:text-primary transition-colors">Konten</a></li>
              <li><a href="#academy" className="text-muted-foreground hover:text-primary transition-colors">Academy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold neon-text mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Jasa Notaris</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Content Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">SEO & Analytics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Virtual Assistant</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold neon-text mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <a href="mailto:info@bheibzdigitalmedia.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@bheibzdigitalmedia.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <a href="tel:+6281234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t neon-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Bheibz Digital Media. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:neon-text">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:neon-text">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:neon-text">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
