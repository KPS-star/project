import CartItem from "../components/CartItem";


export default function CartPage() {
  const cartItems = [
    { id: 1, name: "Smart Watch", price: 79, image: "watch.jpg" },
    { id: 2, name: "Wireless Earbuds", price: 49, image: "ear buds.jpg" },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section>
      <h2 className="page-title">Your Cart</h2>
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total}</h3>
        <button className="btn">Proceed to Checkout</button>
      </div>
    </section>
  );
}
