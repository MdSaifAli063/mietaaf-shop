import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { products } from "@/data/products";
import { Product } from "@/types/product";

interface WomenProps {
  onAddToCart: (product: Product) => void;
}

const Women = ({ onAddToCart }: WomenProps) => {
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");

  const womenProducts = useMemo(() => {
    let filtered = products.filter((p) => p.category === "women");

    // Apply price filter
    if (priceRange !== "all") {
      if (priceRange === "0-50") {
        filtered = filtered.filter((p) => p.price < 50);
      } else if (priceRange === "50-100") {
        filtered = filtered.filter((p) => p.price >= 50 && p.price < 100);
      } else if (priceRange === "100-200") {
        filtered = filtered.filter((p) => p.price >= 100 && p.price < 200);
      } else if (priceRange === "200+") {
        filtered = filtered.filter((p) => p.price >= 200);
      }
    }

    // Apply sorting
    const sorted = [...filtered];
    if (sortBy === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [sortBy, priceRange]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Women's Collection</h1>
        <p className="text-muted-foreground text-lg">
          Discover our curated selection of premium women's fashion
        </p>
      </div>

      <ProductFilters
        sortBy={sortBy}
        onSortChange={setSortBy}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {womenProducts.map((product, index) => (
          <div key={product.id} style={{ animationDelay: `${index * 50}ms` }}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>

      {womenProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No products found matching your filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default Women;
