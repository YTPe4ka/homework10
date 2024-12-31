import React, { useEffect, useState } from "react";
import "../styles/Orders.css"
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Product: {order.product}, User: {order.user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
