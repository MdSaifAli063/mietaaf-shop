import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  // Random rating for demo purposes
  const rating = (4 + Math.random()).toFixed(1);
  
  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-elegant hover:-translate-y-1 animate-fade-in">
      <CardContent className="p-0 relative">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-smooth group-hover:scale-110"
          />
          {product.featured && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({Math.floor(Math.random() * 100 + 20)} reviews)
            </span>
          </div>
          <h3 className="font-semibold text-lg group-hover:text-accent transition-smooth">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            onClick={() => onAddToCart(product)}
            className="gap-2 hover:gap-3 transition-all"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
