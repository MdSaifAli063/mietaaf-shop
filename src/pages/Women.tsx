import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Product } from "@/types/product";

interface WomenProps {
  onAddToCart: (product: Product) => void;
}

const Women = ({ onAddToCart }: WomenProps) => {
  const womenProducts = products.filter((p) => p.category === "women");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Women's Collection</h1>
        <p className="text-muted-foreground text-lg">
          Discover our curated selection of premium women's fashion
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {womenProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Women;
