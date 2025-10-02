import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

const ProductCard = ({ product, onOrder }: ProductCardProps) => {
  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan produk: ${product.title} (${product.price}). Mohon informasi lebih lanjut.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Card className="glow-card group transition-all duration-500 overflow-hidden">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={product.image} 
          alt={product.title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-semibold neon-border neon-text">
            {product.category}
          </span>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors neon-text">
          {product.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="text-2xl font-bold text-primary neon-text">{product.price}</div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button 
          className="flex-1 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 relative group/btn overflow-hidden"
          onClick={() => onOrder(product)}
        >
          <span className="relative z-10 flex items-center">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Pesan
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity"></div>
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 neon-border hover:bg-primary/10 relative group/btn"
          onClick={handleWhatsApp}
        >
          <span className="relative z-10">WhatsApp</span>
          <div className="absolute inset-0 bg-accent/5 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
