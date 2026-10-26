import React from "react";
import { Link } from "react-router-dom";

export default function SellerDashboard() {
  return (
    <section>
      <h1>Seller Dashboard</h1>
      <div className="stats">
        <div className="stat"><strong>12</strong><span>Products</span></div>
        <div className="stat"><strong>28</strong><span>Orders</span></div>
        <div className="stat"><strong>₹45,500</strong><span>Sales</span></div>
      </div>
      <Link className="button" to="/seller/products">Manage Products</Link>
    </section>
  );
}