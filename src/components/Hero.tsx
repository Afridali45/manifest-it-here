import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, TrendingUp, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-ecommerce.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                <TrendingUp className="h-3 w-3 mr-1" />
                #1 E-commerce Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Amazing
                <span className="block text-secondary">Products</span>
                <span className="block">Worldwide</span>
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                Shop from millions of products with fast delivery, secure payments, 
                and unbeatable prices. Your one-stop marketplace for everything.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cart" size="xl" className="bg-white text-primary hover:bg-white/90">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Start Shopping
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Become a Seller
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-secondary" />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5 text-secondary" />
                <span className="text-sm">Easy Returns</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="E-commerce shopping experience"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Sellers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;