import ProductCard from "./ProductCard";

export default function FeaturedItemsGrid() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="products" className="scroll-mt-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        מוצרים נבחרים
      </h2>

      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          title="שפתון בגוון ניוד"
          description="שפתון בגוון ניוד חמים למראה יומיומי."
          image={`${baseUrl}33000117-001.webp`}
          price={79}
          brand="Flormar"
          shade="ניוד חמים"
          category="איפור שפתיים"
        />

        <ProductCard
          title="מסקרה Longer Than Ever"
          description="מסקרה שחורה להדגשת הריסים."
          image={`${baseUrl}32000163-001-2.webp`}
          price={69}
          brand="Flormar"
          shade="שחור"
          category="איפור עיניים"
        />

        <ProductCard
          title="סומק נוזלי Puffy"
          description="סומק נוזלי בגוון קורל, עם ספוגית למריחה."
          image={`${baseUrl}31000273-001-2-2.webp`}
          price={59}
          brand="Flormar"
          shade="קורל"
          category="איפור פנים"
        />

        <ProductCard
          title="פודרה שקופה"
          description="פודרה בתפזורת לקיבוע האיפור."
          image={`${baseUrl}0111083-1.png`}
          price={89}
          brand="Flormar"
          shade="שקוף"
        />
      </div>
    </section>
  );
}