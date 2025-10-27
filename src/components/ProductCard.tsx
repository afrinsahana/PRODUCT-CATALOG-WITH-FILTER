import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard = ({ name, price, category, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-gradient-to-b from-card to-card/50 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <Badge variant="secondary" className="mb-3 text-xs font-medium">
          {category}
        </Badge>
        <h3 className="mb-2 text-lg font-semibold text-foreground line-clamp-1">
          {name}
        </h3>
        <p className="text-2xl font-bold text-secondary">${price.toFixed(2)}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
