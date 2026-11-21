import FeaturedItemsGrid from "./FeaturedItemsGrid";
import HeroBanner from "./HeroBanner";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-5 py-8 sm:px-8 sm:py-12">
      <HeroBanner />
      <FeaturedItemsGrid />
    </main>
  );
}