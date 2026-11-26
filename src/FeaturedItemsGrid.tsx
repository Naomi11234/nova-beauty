import ProductCard from "./ProductCard";
import { items } from "./data/items";
type Props = { favoriteIds: number[]; toggleFavorite: (id:number)=>void };
export default function FeaturedItemsGrid({favoriteIds,toggleFavorite}: Props) {
 return <section id="products" className="scroll-mt-24 space-y-6"><p className="text-xs tracking-[.3em] text-[#98665d]" dir="ltr">THE NOVA EDIT</p><h2 className="text-3xl font-bold">הקולקציה שלנו</h2><div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-4">{items.map(item => <ProductCard key={item.id} {...item} isFavorite={favoriteIds.includes(item.id)} onToggleFavorite={()=>toggleFavorite(item.id)}/>)}</div></section>;
}