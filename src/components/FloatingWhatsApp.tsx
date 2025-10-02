import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = "Halo Bheibz Digital Media! Saya ingin bertanya tentang layanan Anda.";
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-accent to-[#25D366] hover:opacity-90 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none p-0"
      aria-label="Hubungi kami via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  );
};

export default FloatingWhatsApp;
