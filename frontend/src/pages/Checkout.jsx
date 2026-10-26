import React from "react";
import { placeOrder as placeOrderApi } from "../services/api";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, total } = useCart();
  const navigate = useNavigate();

 const placeOrder = async (e) => {
  e.preventDefault();

  if (!cart.length) return;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  try {
    await placeOrderApi(savedUser.id, total);
    alert("Order placed successfully!");
    navigate("/orders");
  } catch (error) {
    alert("Failed to place order");
  }
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