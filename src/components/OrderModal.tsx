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
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border transform transition-all animate-in fade-in zoom-in-95 duration-300">
        <div className="sticky top-0 bg-gradient-to-r from-primary to-primary-dark p-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-primary-foreground">Form Pemesanan</h3>
          <button 
            onClick={onClose}
            className="text-primary-foreground hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">{product.title}</h4>
            <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
            <p className="text-2xl font-bold text-primary">{product.price}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nama Lengkap *</label>
              <Input 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Masukkan nama lengkap"
                className="border-2 focus:border-primary transition-colors"
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
                className="border-2 focus:border-primary transition-colors"
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
                className="border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Pesan Tambahan</label>
              <Textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Ada pertanyaan atau permintaan khusus?"
                rows={4}
                className="border-2 focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="flex-1"
              >
                Batal
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
              >
                Kirim Pesanan via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
