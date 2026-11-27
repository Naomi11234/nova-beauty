import { useState } from "react";
import AppLayout from "./AppLayout";
import HomePage from "./HomePage";

export default function App() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  function toggleFavorite(id: number) {
    setFavoriteIds(previous => previous.includes(id)
      ? previous.filter(itemId => itemId !== id)
      : [...previous, id]);
  }

  return (
    <AppLayout favoriteCount={favoriteIds.length}>
      <HomePage favoriteIds={favoriteIds} toggleFavorite={toggleFavorite} />
    </AppLayout>
  );
}