import React, { useEffect, useState } from "react";
import { getOrders } from "../services/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then((response) => setOrders(response.data))
      .catch(() => setOrders([]));
  }, []);

  return (
    <section>
      <h2>Order History</h2>

      {!orders.length && <p>No orders found.</p>}

      {orders.map((order) => (
        <div className="order-row" key={order.id}>
          <strong>ORD{order.id}</strong>
          <span>{order.orderDate}</span>
          <span>₹{order.totalAmount}</span>
          <span className="badge">{order.status}</span>
        </div>
      ))}
    </section>
  );
}