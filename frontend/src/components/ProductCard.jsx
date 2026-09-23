import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="card">
      <div className="product-image">🛍️</div>
      <h3>{product.name}</h3>
      <p className="muted">{product.category}</p>
      <h3>₹{product.price}</h3>
      <p>Stock: {product.stock}</p>
      <div className="actions">
        <Link className="button secondary" to={`/products/${product.id}`}>Details</Link>
        <button className="button" onClick={() => addToCart(product)} disabled={!product.active || product.stock < 1}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}