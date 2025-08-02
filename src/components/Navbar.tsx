import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu,
  Store,
  Package
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [cartItems, setCartItems] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border shadow-card-elegant sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Store className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MarketPlace
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Button 
                variant="buy" 
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-4">
            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span className="hidden md:block">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Sign In</DropdownMenuItem>
                <DropdownMenuItem>Register</DropdownMenuItem>
                <DropdownMenuItem>Your Orders</DropdownMenuItem>
                <DropdownMenuItem>Seller Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-4 w-4" />
              <span className="hidden md:block ml-1">Wishlist</span>
              <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 text-xs">
                2
              </Badge>
            </Button>

            {/* Cart */}
            <Button variant="cart" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden md:block ml-1">Cart</span>
              {cartItems > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* Seller */}
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Package className="h-4 w-4 mr-1" />
              Sell
            </Button>

            {/* Mobile menu */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="justify-start">
                <Package className="h-4 w-4 mr-2" />
                Sell on MarketPlace
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Your Orders
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Customer Service
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;