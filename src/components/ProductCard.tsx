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
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={product.image} 
          alt={product.title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {product.category}
          </span>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
          {product.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="text-2xl font-bold text-primary">{product.price}</div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button 
          className="flex-1 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
          onClick={() => onOrder(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Pesan
        </Button>
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={handleWhatsApp}
        >
          WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
