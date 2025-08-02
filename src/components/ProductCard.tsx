import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  seller: string;
  inStock: boolean;
  freeShipping?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviewCount, 
  image, 
  category,
  seller,
  inStock,
  freeShipping 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card border-border hover:shadow-product transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discountPercentage > 0 && (
            <Badge variant="destructive" className="text-xs">
              -{discountPercentage}%
            </Badge>
          )}
          {freeShipping && (
            <Badge variant="secondary" className="text-xs">
              Free Shipping
            </Badge>
          )}
          {!inStock && (
            <Badge variant="outline" className="text-xs bg-background">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm transition-all duration-200 ${
            isWishlisted ? "text-red-500" : "text-muted-foreground hover:text-red-500"
          }`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>

        {/* Quick Actions (shown on hover) */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300">
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="backdrop-blur-sm">
                <Eye className="h-4 w-4 mr-1" />
                Quick View
              </Button>
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <p className="text-xs text-muted-foreground mb-1">{category}</p>
        
        {/* Product Name */}
        <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating)
                    ? "text-rating fill-current"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-price">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Seller */}
        <p className="text-xs text-muted-foreground mb-3">
          Sold by <span className="text-primary font-medium">{seller}</span>
        </p>

        {/* Add to Cart Button */}
        <Button 
          variant={inStock ? "cart" : "outline"} 
          size="sm" 
          className="w-full"
          disabled={!inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;