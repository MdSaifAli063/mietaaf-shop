import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";
import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Men from "./pages/Men";
import Women from "./pages/Women";
import NotFound from "./pages/NotFound";
import { Product, CartItem } from "@/types/product";

const queryClient = new QueryClient();

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        toast.success("Updated quantity in cart");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success("Added to cart");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Removed from cart");
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header
              cartItemCount={cartItemCount}
              onCartClick={() => setIsCartOpen(true)}
            />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index onAddToCart={handleAddToCart} />} />
                <Route
                  path="/men"
                  element={<Men onAddToCart={handleAddToCart} />}
                />
                <Route
                  path="/women"
                  element={<Women onAddToCart={handleAddToCart} />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
