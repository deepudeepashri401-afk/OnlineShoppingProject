import { useEffect, useState } from "react";
import { addProduct, deleteProduct, getProducts } from "../services/api";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", category: "", price: "", stock: "", active: true });

  const load = () => getProducts().then((r) => setProducts(r.data)).catch(() => setProducts([]));
  useEffect(load, []);

  const submit = async (e) => {
    e.preventDefault();
    await addProduct({ ...form, price: Number(form.price), stock: Number(form.stock) });
    setForm({ name: "", category: "", price: "", stock: "", active: true });
    load();
  };

  return (
    <section>
      <h2>Manage Products</h2>
      <form className="inline-form" onSubmit={submit}>
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required />
        <input type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        <input type="number" placeholder="Stock" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} required />
        <button className="button">Add Product</button>
      </form>

      {products.map((p) => (
        <div className="order-row" key={p.id}>
          <span>{p.name}</span><span>₹{p.price}</span><span>Stock: {p.stock}</span>
          <button className="button danger" onClick={async () => { await deleteProduct(p.id); load(); }}>Delete</button>
        </div>
      ))}
    </section>
  );
}