export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "men" | "women";
}

export interface CartItem extends Product {
  quantity: number;
}
