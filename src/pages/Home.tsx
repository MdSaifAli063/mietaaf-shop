import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fashion.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Fashion Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            MIETAAF
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Premium Fashion for Everyone
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/men">
              <Button size="lg" variant="default" className="gradient-accent">
                Shop Men
              </Button>
            </Link>
            <Link to="/women">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-black">
                Shop Women
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and reliable shipping to your doorstep
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Carefully curated collection of high-quality fashion
              </p>
            </div>
            <div className="p-6">
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
          <h2 className="text-4xl font-bold text-center mb-12">
            Shop By Category
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/men" className="group relative h-96 overflow-hidden rounded-lg shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800"
                alt="Men's Collection"
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Men's Collection</h3>
                  <p className="text-lg">Explore Now →</p>
                </div>
              </div>
            </Link>
            <Link to="/women" className="group relative h-96 overflow-hidden rounded-lg shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
                alt="Women's Collection"
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Women's Collection</h3>
                  <p className="text-lg">Explore Now →</p>
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
