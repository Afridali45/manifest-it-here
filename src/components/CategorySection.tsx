import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  Book, 
  Gamepad2,
  Watch,
  Headphones
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, color: "text-blue-500", bgColor: "bg-blue-50" },
  { name: "Computers", icon: Laptop, color: "text-purple-500", bgColor: "bg-purple-50" },
  { name: "Fashion", icon: Shirt, color: "text-pink-500", bgColor: "bg-pink-50" },
  { name: "Home & Garden", icon: Home, color: "text-green-500", bgColor: "bg-green-50" },
  { name: "Books", icon: Book, color: "text-orange-500", bgColor: "bg-orange-50" },
  { name: "Gaming", icon: Gamepad2, color: "text-red-500", bgColor: "bg-red-50" },
  { name: "Watches", icon: Watch, color: "text-yellow-500", bgColor: "bg-yellow-50" },
  { name: "Audio", icon: Headphones, color: "text-indigo-500", bgColor: "bg-indigo-50" },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground">
            Discover millions of products across all categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="group hover:shadow-card-elegant transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full ${category.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;