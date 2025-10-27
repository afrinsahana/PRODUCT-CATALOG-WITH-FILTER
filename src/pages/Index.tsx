import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import heroImage from "@/assets/hero-catalog.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productSpeaker from "@/assets/product-speaker.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productTablet from "@/assets/product-tablet.jpg";

const products = [
  { id: 1, name: "Premium Wireless Headphones", price: 299.99, category: "Audio", image: productHeadphones },
  { id: 2, name: "Smart Watch Pro", price: 399.99, category: "Wearables", image: productWatch },
  { id: 3, name: "Ultra Slim Laptop", price: 1299.99, category: "Computers", image: productLaptop },
  { id: 4, name: "Flagship Smartphone", price: 899.99, category: "Mobile", image: productPhone },
  { id: 5, name: "Portable Bluetooth Speaker", price: 149.99, category: "Audio", image: productSpeaker },
  { id: 6, name: "Professional Camera", price: 1499.99, category: "Photography", image: productCamera },
  { id: 7, name: "True Wireless Earbuds", price: 179.99, category: "Audio", image: productEarbuds },
  { id: 8, name: "Pro Tablet", price: 699.99, category: "Computers", image: productTablet },
];

const categories = ["All", "Audio", "Wearables", "Computers", "Mobile", "Photography"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1500]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Hero" className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary-foreground md:text-6xl">
            Discover Premium Products
          </h1>
          <p className="max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Explore our curated collection of cutting-edge technology and accessories
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {filteredProducts.length} Products
            </h2>
            <p className="text-muted-foreground">Find your perfect match</p>
          </div>
          
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] overflow-y-auto">
              <div className="py-6">
                <FilterSidebar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  categories={categories}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <FilterSidebar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                categories={categories}
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-xl text-muted-foreground">No products found</p>
                <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
