import { useId, useState } from "react";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  brand: string;
  shade: string;
  category?: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export default function ProductCard({
  title,
  description,
  image,
  price,
  brand,
  shade,
  category = "איפור",
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const detailsId = useId();

  return (
    <article className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <img
        src={image}
        alt={`${title} בגוון ${shade}`}
        className="h-52 w-full bg-white object-contain p-3"
      />

      <div className="space-y-3 p-5">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-rose-50 px-3 py-1 text-sm text-rose-900">
            {category}
          </span>
          <span className="font-bold text-slate-900">{price} ₪</span>
        </div>

        <Button
          type="button"
          variant="outline"
          className={
            isFavorite
              ? "w-full border-rose-700 bg-rose-700 text-white hover:bg-rose-800 hover:text-white"
              : "w-full"
          }
          aria-pressed={isFavorite}
          onClick={onToggleFavorite}
        >
          {isFavorite ? "הסר ממועדפים" : "הוסף למועדפים"}
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          aria-expanded={showDetails}
          aria-controls={detailsId}
          onClick={() => setShowDetails((open) => !open)}
        >
          {showDetails ? "סגירת פרטים" : "לצפייה בפרטים"}
        </Button>

        <div
          id={detailsId}
          hidden={!showDetails}
          className="rounded-lg bg-rose-50 p-3 text-sm text-slate-700"
        >
          <p>מותג: {brand}</p>
          <p>גוון: {shade}</p>
        </div>
      </div>
    </article>
  );
}