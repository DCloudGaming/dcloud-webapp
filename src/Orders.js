import React, { useState } from "react";
import "./Orders.css";
import Order from "./Order";

function Orders() {
  const [orders] = useState([]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
