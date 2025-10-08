export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "men" | "women";
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}
