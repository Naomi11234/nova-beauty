import { items } from "./items";
import ProductCard from "./ProductCard";

type FeaturedItemsGridProps = {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
};

export default function FeaturedItemsGrid({ favoriteIds, toggleFavorite }: FeaturedItemsGridProps) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="products" className="scroll-mt-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        מוצרים נבחרים
      </h2>

      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(item => (
          <ProductCard
            key={item.id}
            {...item}
            image={`${baseUrl}${item.image}`}
            isFavorite={favoriteIds.includes(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
          />
        ))}
      </div>
    </section>
  );
}