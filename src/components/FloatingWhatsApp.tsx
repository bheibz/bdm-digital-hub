import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = "Halo Bheibz Digital Media! Saya ingin bertanya tentang layanan Anda.";
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-accent to-[#25D366] hover:opacity-90 hover:scale-110 transition-all duration-300 p-0 relative group"
        aria-label="Hubungi kami via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 animate-pulse"></div>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
