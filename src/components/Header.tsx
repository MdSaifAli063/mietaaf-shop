import { ShoppingCart, User, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  const location = useLocation();
  const { user, signOut, isAdmin } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold tracking-tight hover-scale transition-smooth text-primary">
          MIETAAF
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground/70"
            }`}
          >
            Home
          </Link>
          <Link
            to="/men"
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              isActive("/men") ? "text-primary" : "text-foreground/70"
            }`}
          >
            Men
          </Link>
          <Link
            to="/women"
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              isActive("/women") ? "text-primary" : "text-foreground/70"
            }`}
          >
            Women
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              isActive("/about") ? "text-primary" : "text-foreground/70"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              isActive("/contact") ? "text-primary" : "text-foreground/70"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative hover-scale"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs font-semibold text-primary-foreground flex items-center justify-center animate-scale-in">
                {cartItemCount}
              </span>
            )}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isAdmin && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="default" size="sm">
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </div>
      </div>

      <nav className="md:hidden flex items-center justify-center gap-6 pb-3 px-4">
        <Link
          to="/"
          className={`text-sm font-medium transition-smooth hover:text-primary ${
            isActive("/") ? "text-primary" : "text-foreground/70"
          }`}
        >
          Home
        </Link>
        <Link
          to="/men"
          className={`text-sm font-medium transition-smooth hover:text-primary ${
            isActive("/men") ? "text-primary" : "text-foreground/70"
          }`}
        >
          Men
        </Link>
        <Link
          to="/women"
          className={`text-sm font-medium transition-smooth hover:text-primary ${
            isActive("/women") ? "text-primary" : "text-foreground/70"
          }`}
        >
          Women
        </Link>
        <Link
          to="/about"
          className={`text-sm font-medium transition-smooth hover:text-primary ${
            isActive("/about") ? "text-primary" : "text-foreground/70"
          }`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`text-sm font-medium transition-smooth hover:text-primary ${
            isActive("/contact") ? "text-primary" : "text-foreground/70"
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
