import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          MIETAAF
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-smooth hover:text-accent ${
              isActive("/") ? "text-accent" : "text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/men"
            className={`text-sm font-medium transition-smooth hover:text-accent ${
              isActive("/men") ? "text-accent" : "text-foreground"
            }`}
          >
            Men
          </Link>
          <Link
            to="/women"
            className={`text-sm font-medium transition-smooth hover:text-accent ${
              isActive("/women") ? "text-accent" : "text-foreground"
            }`}
          >
            Women
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={onCartClick}
        >
          <ShoppingCart className="h-5 w-5" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-xs font-semibold text-accent-foreground flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Button>
      </div>

      <nav className="md:hidden flex items-center justify-center gap-6 pb-3 px-4">
        <Link
          to="/"
          className={`text-sm font-medium transition-smooth hover:text-accent ${
            isActive("/") ? "text-accent" : "text-foreground"
          }`}
        >
          Home
        </Link>
        <Link
          to="/men"
          className={`text-sm font-medium transition-smooth hover:text-accent ${
            isActive("/men") ? "text-accent" : "text-foreground"
          }`}
        >
          Men
        </Link>
        <Link
          to="/women"
          className={`text-sm font-medium transition-smooth hover:text-accent ${
            isActive("/women") ? "text-accent" : "text-foreground"
          }`}
        >
          Women
        </Link>
      </nav>
    </header>
  );
};

export default Header;
