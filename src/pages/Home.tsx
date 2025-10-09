import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import heroImage from "@/assets/hero-fashion.jpg";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface HomeProps {
  onAddToCart?: (product: Product) => void;
}

const Home = ({ onAddToCart }: HomeProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("featured", true)
        .limit(8);

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Fashion Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            MIETAAF
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Premium Fashion for Everyone
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/men">
              <Button size="lg" variant="default" className="shadow-elegant hover-scale transition-smooth">
                Shop Men
              </Button>
            </Link>
            <Link to="/women">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-black shadow-elegant hover-scale transition-smooth backdrop-blur-sm">
                Shop Women
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground text-lg">
              Discover our handpicked selection of premium items
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-fade-in"
                >
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart || (() => {})}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 hover-scale transition-smooth">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and reliable shipping to your doorstep
              </p>
            </div>
            <div className="p-6 hover-scale transition-smooth">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Carefully curated collection of high-quality fashion
              </p>
            </div>
            <div className="p-6 hover-scale transition-smooth">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Orders</h3>
              <p className="text-muted-foreground">
                Easy ordering directly through WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Shop By Category
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/men" className="group relative h-96 overflow-hidden rounded-lg shadow-elegant hover:shadow-2xl transition-all">
              <img
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800"
                alt="Men's Collection"
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-center justify-center">
                <div className="text-center text-white transform group-hover:scale-110 transition-smooth">
                  <h3 className="text-3xl font-bold mb-2">Men's Collection</h3>
                  <p className="text-lg group-hover:translate-x-2 transition-smooth">Explore Now →</p>
                </div>
              </div>
            </Link>
            <Link to="/women" className="group relative h-96 overflow-hidden rounded-lg shadow-elegant hover:shadow-2xl transition-all">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
                alt="Women's Collection"
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-center justify-center">
                <div className="text-center text-white transform group-hover:scale-110 transition-smooth">
                  <h3 className="text-3xl font-bold mb-2">Women's Collection</h3>
                  <p className="text-lg group-hover:translate-x-2 transition-smooth">Explore Now →</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
