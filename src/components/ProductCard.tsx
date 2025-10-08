import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-elegant">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <Button
            size="sm"
            onClick={() => onAddToCart(product)}
            className="gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
