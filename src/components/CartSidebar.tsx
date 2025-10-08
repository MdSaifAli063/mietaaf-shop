import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem } from "@/types/product";
import { toast } from "sonner";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: CartSidebarProps) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    let message = "Hello! I'd like to order:\n\n";
    cartItems.forEach((item) => {
      message += `${item.name} - Quantity: ${item.quantity} - $${(
        item.price * item.quantity
      ).toFixed(2)}\n`;
    });
    message += `\nTotal: $${total.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Your cart is empty
            </p>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-lg border bg-card"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        ${item.price}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 ml-auto text-destructive"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button
                  className="w-full gap-2 gradient-accent"
                  size="lg"
                  onClick={handleWhatsAppOrder}
                >
                  Place Order via WhatsApp
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
