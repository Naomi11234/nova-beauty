import FeaturedItemsGrid from "./FeaturedItemsGrid";
import HeroBanner from "./HeroBanner";
type Props = { favoriteIds: number[]; toggleFavorite: (id:number)=>void };
export default function HomePage(props: Props) {
 return <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-5 py-8 sm:px-8 sm:py-12"><HeroBanner/><FeaturedItemsGrid {...props}/></main>;
}