import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then((r) => setProduct(r.data))
      .catch(() => setProduct({
        id: Number(id), name: "Demo Product", category: "General",
        price: 999, stock: 10, active: true
      }));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <section className="detail">
      <div className="product-image large">🛍️</div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.category}</p>
        <h2>₹{product.price}</h2>
        <p>Available stock: {product.stock}</p>
        <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </section>
  );
}