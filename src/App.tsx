import { useState } from "react";
import AppLayout from "./AppLayout";
import HomePage from "./HomePage";
export default function App() {
 const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
 function toggleFavorite(id: number) {
  setFavoriteIds(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]);
 }
 return <AppLayout favoriteCount={favoriteIds.length}><HomePage favoriteIds={favoriteIds} toggleFavorite={toggleFavorite}/></AppLayout>;
}