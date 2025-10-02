import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

interface OrderModalProps {
  product: Product | null;
  onClose: () => void;
}

const OrderModal = ({ product, onClose }: OrderModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Pemesanan Produk*\n\nProduk: ${product.title}\nHarga: ${product.price}\n\nData Pemesan:\nNama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\n\nPesan:\n${formData.message}`;
    
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Pesanan Dikirim!",
      description: "Anda akan dihubungkan ke WhatsApp untuk melanjutkan pemesanan.",
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center p-4">
      <div className="glow-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all animate-in fade-in zoom-in-95 duration-300">
        <div className="sticky top-0 bg-gradient-to-r from-primary via-accent to-secondary p-6 flex items-center justify-between relative overflow-hidden">
          <h3 className="text-2xl font-bold text-foreground neon-text relative z-10">Form Pemesanan</h3>
          <button 
            onClick={onClose}
            className="text-foreground hover:bg-white/20 rounded-full p-2 transition-colors relative z-10"
          >
            <X size={24} />
          </button>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-xl opacity-50"></div>
        </div>

        <div className="p-6 space-y-6">
          <div className="neon-border p-4 rounded-lg bg-card/50 backdrop-blur-sm">
            <h4 className="font-semibold text-lg mb-2 neon-text">{product.title}</h4>
            <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
            <p className="text-2xl font-bold text-primary neon-text">{product.price}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nama Lengkap *</label>
              <Input 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Masukkan nama lengkap"
                className="neon-border bg-card/50 backdrop-blur-sm focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email *</label>
              <Input 
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="email@example.com"
                className="neon-border bg-card/50 backdrop-blur-sm focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Nomor Telepon *</label>
              <Input 
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="08123456789"
                className="neon-border bg-card/50 backdrop-blur-sm focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Pesan Tambahan</label>
              <Textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Ada pertanyaan atau permintaan khusus?"
                rows={4}
                className="neon-border bg-card/50 backdrop-blur-sm focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="flex-1 neon-border hover:bg-destructive/20"
              >
                Batal
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 relative group overflow-hidden"
              >
                <span className="relative z-10">Kirim Pesanan via WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
