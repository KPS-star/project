import ProductCard from "../components/ProductCard";
import watch from "../assets/watch.jpg";
import earbuds from "../assets/ear buds.jpg";
import speaker from "../assets/speaker.jpg";

export default function HomePage() {
  const products = [
  { id: 1, name: "Smart Watch", price: 79, image: watch },
  { id: 2, name: "Wireless Earbuds", price: 49, image: earbuds },
  { id: 3, name: "Bluetooth Speaker", price: 99, image: speaker },
];

  return (
    <section>
      <h2 className="page-title">Featured Products</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
