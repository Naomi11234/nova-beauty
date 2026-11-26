import { useId, useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Item } from "./data/items";
type ProductCardProps = Omit<Item,"id"> & {isFavorite:boolean; onToggleFavorite:()=>void};
export default function ProductCard({title,description,image,price,brand,shade,category,isFavorite,onToggleFavorite}:ProductCardProps) {
 const [showDetails,setShowDetails]=useState(false);
 const detailsId=useId();
 return <article className="group overflow-hidden rounded-2xl border border-[#e8d9ce] bg-[#fffaf5] transition-shadow hover:shadow-lg"><div className="relative overflow-hidden"><img src={image} alt={title} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"/><button type="button" aria-label={isFavorite?"הסר ממועדפים":"הוסף למועדפים"} aria-pressed={isFavorite} onClick={onToggleFavorite} className="absolute left-3 top-3 rounded-full bg-white p-3 text-[#682f40] shadow"><Heart size={20} fill={isFavorite?"currentColor":"none"}/></button></div><div className="space-y-3 p-5"><p className="text-xs text-[#98665d]">{category}</p><h3 dir="ltr" className="text-right font-serif text-xl font-bold">{title}</h3><p className="min-h-10 text-sm leading-relaxed">{description}</p><p className="font-bold">{price} ₪</p><Button type="button" variant="outline" className="w-full" aria-expanded={showDetails} aria-controls={detailsId} onClick={()=>setShowDetails(open=>!open)}>{showDetails?"סגירת פרטים":"לצפייה בפרטים"}</Button><div id={detailsId} hidden={!showDetails} className="rounded-lg bg-[#f0e2dc] p-3 text-sm"><p>מותג: {brand}</p><p>גוון: {shade}</p></div></div></article>;
}