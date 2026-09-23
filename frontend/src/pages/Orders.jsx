export default function Orders() {
  const orders = [
    { id: "ORD001", date: "20 Sep 2026", total: 2498, status: "PLACED" }
  ];

  return (
    <section>
      <h2>Order History</h2>
      {orders.map((order) => (
        <div className="order-row" key={order.id}>
          <strong>{order.id}</strong>
          <span>{order.date}</span>
          <span>₹{order.total}</span>
          <span className="badge">{order.status}</span>
        </div>
      ))}
    </section>
  );
}