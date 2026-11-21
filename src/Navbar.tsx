export default function Navbar() {
  return (
    <nav aria-label="תפריט ראשי" className="border-b border-rose-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#home" className="text-xl font-bold text-rose-950">
          NOVA Beauty
        </a>

        <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-700">
          <a href="#home" className="hover:text-rose-700">בית</a>
          <a href="#products" className="hover:text-rose-700">מוצרים</a>
          <a href="#about" className="hover:text-rose-700">אודות</a>
        </div>
      </div>
    </nav>
  );
}