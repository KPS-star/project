import { useParams, Link } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  const product = {
    id,
    name: "Smart Watch",
    price: 79,
    description: "A stylish smartwatch with fitness tracking and notifications.",
    image: "watch.jpg",
  };

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <button className="btn">Add to Cart</button>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}
