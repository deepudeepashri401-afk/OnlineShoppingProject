import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  const placeOrder = (e) => {
    e.preventDefault();
    if (!cart.length) return;
    alert("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <form className="form-card" onSubmit={placeOrder}>
      <h2>Checkout</h2>
      <input placeholder="Delivery address" required />
      <input placeholder="Phone number" required />
      <select><option>Cash on Delivery</option><option>Demo Card Payment</option></select>
      <h3>Total: ₹{total}</h3>
      <button className="button">Place Order</button>
    </form>
  );
}