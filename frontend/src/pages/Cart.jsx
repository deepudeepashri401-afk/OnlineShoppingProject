import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, total, updateQuantity, removeFromCart } = useCart();

  if (!cart.length) return <section><h2>Your Cart</h2><p>Your cart is empty.</p><Link className="button" to="/">Continue Shopping</Link></section>;

  return (
    <section>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div className="cart-row" key={item.id}>
          <div>
            <strong>{item.name}</strong>
            <p>₹{item.price}</p>
          </div>
          <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.id, Number(e.target.value))} />
          <strong>₹{item.price * item.quantity}</strong>
          <button className="button danger" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ₹{total}</h2>
      <Link className="button" to="/checkout">Checkout</Link>
    </section>
  );
}