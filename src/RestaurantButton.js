import React from "react";

function RestaurantButton(props) {
  const { orders, setOrders } = props;
  return (
    <button
      onClick={() => {
        setOrders(orders + 1);
      }}
      className="btn btn-primary"
    >
      Add
    </button>
  );
}

export default RestaurantButton;
