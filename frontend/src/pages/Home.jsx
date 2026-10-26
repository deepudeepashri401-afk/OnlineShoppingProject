import React from "react";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";

const demoProducts = [
  { id: 1, name: "Branded Bag", category: "Fashion", price: 999, stock: 10, active: true },
  { id: 2, name: "Smart Watch", category: "Electronics", price: 1499, stock: 8, active: true },
  { id: 3, name: "Running Shoes", category: "Footwear", price: 1999, stock: 12, active: true }
];

export default function Home() {
  const [products, setProducts] = useState(demoProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.data))
      .catch(() => setError("Backend is not running, so demo products are shown."));
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) =>
      (category === "ALL" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search, category]);

  const categories = ["ALL", ...new Set(products.map((p) => p.category))];

  return (
    <>
      <section className="hero">
        <h1>Online Shopping System</h1>
        <p>Simple shopping experience for customers and sellers.</p>
      </section>

      {error && <p className="notice">{error}</p>}

      <section className="toolbar">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </section>

      <div className="grid">
        {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
}