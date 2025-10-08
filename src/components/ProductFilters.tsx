import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

interface ProductFiltersProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  priceRange: string;
  onPriceRangeChange: (value: string) => void;
}

const ProductFilters = ({
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
}: ProductFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 p-4 bg-secondary rounded-lg animate-fade-in">
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
        <span className="font-medium">Filters</span>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name">Name: A to Z</SelectItem>
          </SelectContent>
        </Select>

        <Select value={priceRange} onValueChange={onPriceRangeChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Price range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-50">Under $50</SelectItem>
            <SelectItem value="50-100">$50 - $100</SelectItem>
            <SelectItem value="100-200">$100 - $200</SelectItem>
            <SelectItem value="200+">$200+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductFilters;
