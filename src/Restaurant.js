import React from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  const types = ["Pizzas", "Salads", "Chocolate cake"];
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {types.map(i => (
          <Order type={i} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
