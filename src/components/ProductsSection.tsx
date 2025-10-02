import { useState } from "react";
import ProductCard from "./ProductCard";
import OrderModal from "./OrderModal";
import { products, Product } from "@/data/products";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold neon-text">
            Toko Digital
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Produk digital berkualitas tinggi untuk mengembangkan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onOrder={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      <OrderModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductsSection;
