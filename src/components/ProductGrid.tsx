import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, SlidersHorizontal } from "lucide-react";

// Sample product data
const sampleProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones with Noise Cancellation",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.5,
    reviewCount: 1234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    seller: "TechStore Pro",
    inStock: true,
    freeShipping: true
  },
  {
    id: "2",
    name: "Smart Fitness Watch with Heart Rate Monitor",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.3,
    reviewCount: 856,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Watches",
    seller: "FitTech",
    inStock: true,
    freeShipping: true
  },
  {
    id: "3",
    name: "Professional Gaming Mechanical Keyboard",
    price: 149.99,
    rating: 4.7,
    reviewCount: 2341,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    category: "Gaming",
    seller: "GameGear",
    inStock: true,
    freeShipping: false
  },
  {
    id: "4",
    name: "Ultra-Slim Laptop 14-inch with SSD Storage",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.6,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    category: "Computers",
    seller: "CompuWorld",
    inStock: false,
    freeShipping: true
  },
  {
    id: "5",
    name: "Designer Leather Handbag - Premium Collection",
    price: 179.99,
    originalPrice: 299.99,
    rating: 4.4,
    reviewCount: 789,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Fashion",
    seller: "LuxuryBags",
    inStock: true,
    freeShipping: true
  },
  {
    id: "6",
    name: "4K Action Camera with Waterproof Case",
    price: 249.99,
    rating: 4.2,
    reviewCount: 432,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    category: "Electronics",
    seller: "CameraPro",
    inStock: true,
    freeShipping: false
  },
  {
    id: "7",
    name: "Organic Cotton T-Shirt - Eco-Friendly",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.1,
    reviewCount: 1567,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Fashion",
    seller: "EcoWear",
    inStock: true,
    freeShipping: false
  },
  {
    id: "8",
    name: "Smart Home Security Camera System",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviewCount: 923,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "Home & Garden",
    seller: "SmartHome",
    inStock: true,
    freeShipping: true
  }
];

const ProductGrid = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [...new Set(sampleProducts.map(p => p.category))];

  const filteredProducts = sampleProducts.filter(product => 
    filterCategory === "all" || product.category === filterCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">
              Showing {sortedProducts.length} products
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button
              variant="filter"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-1" />
              Filters
            </Button>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filters */}
        <div className={`mb-8 ${showFilters ? "block" : "hidden md:block"}`}>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={filterCategory === "all" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              onClick={() => setFilterCategory("all")}
            >
              All Products
            </Badge>
            {categories.map(category => (
              <Badge
                key={category}
                variant={filterCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => setFilterCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;