import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="grid items-center gap-8 rounded-3xl bg-rose-100 px-6 py-10 sm:px-10 md:grid-cols-2">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold text-rose-950 sm:text-5xl">
          NOVA Beauty
        </h1>
        <p className="text-lg leading-relaxed text-rose-950">
          גלי מוצרי איפור וגוונים שמתאימים למראה שלך.
        </p>
        <Button
          type="button"
          className="bg-rose-900 text-white hover:bg-rose-800"
          onClick={() => document.getElementById("products")?.scrollIntoView()}
        >
          לכל המוצרים
        </Button>
      </div>

      <img
        src={`${import.meta.env.BASE_URL}33000183-001-3.webp`}
        alt="שפתון ורוד מקולקציית האיפור"
        className="h-56 w-full rounded-2xl bg-white object-contain p-4 sm:h-64"
      />
    </section>
  );
}