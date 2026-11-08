import ProductCard from './ProductCard'

export default function HomePage() {
  return (
    <main dir="rtl">
      <h1>NOVA Beauty</h1>
      <p>ברוכה הבאה לאתר האיפור שלי</p>

      <section>
        <h2>המוצרים שלנו</h2>
        <ProductCard />
      </section>
    </main>
  )
}