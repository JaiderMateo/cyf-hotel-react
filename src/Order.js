import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ type }) => {
  const [orders, setOrders] = useState(0);
  return (
    <li>
      {type}: {orders}
      <RestaurantButton orders={orders} setOrders={setOrders} />
    </li>
  );
};
export default Order;
