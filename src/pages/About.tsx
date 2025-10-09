import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Users, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About Mietaaf
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-fade-in-up">
            Your premium destination for contemporary fashion
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
            <p>
              Founded with a passion for timeless elegance and modern style, Mietaaf has become 
              a trusted name in fashion retail. We believe that great style should be accessible 
              to everyone, which is why we carefully curate our collections to offer the perfect 
              blend of quality, affordability, and trendsetting designs.
            </p>
            <p>
              Our journey began with a simple mission: to create a shopping experience that puts 
              our customers first. Every piece in our collection is selected with care, ensuring 
              that you receive only the finest quality products that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-elegant hover-scale transition-smooth">
              <CardContent className="pt-6 text-center">
                <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality, ensuring every product meets our high standards
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover-scale transition-smooth">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Customer Focused</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority, from browsing to delivery
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover-scale transition-smooth">
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our business
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover-scale transition-smooth">
              <CardContent className="pt-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  Fashion is our passion, and it shows in everything we do
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To empower individuals to express their unique style through carefully curated, 
            high-quality fashion that combines contemporary trends with timeless elegance. 
            We're committed to making exceptional style accessible to everyone while 
            maintaining the highest standards of quality and customer service.
          </p>
        </div>
      </section>
    </div>
  );
}
