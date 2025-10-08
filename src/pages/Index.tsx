import Home from "./Home";
import { Product } from "@/types/product";

interface IndexProps {
  onAddToCart: (product: Product) => void;
}

const Index = ({ onAddToCart }: IndexProps) => {
  return <Home onAddToCart={onAddToCart} />;
};

export default Index;
