import React from "react";

const Order = ({closeHour, openHour}) => {

  return (
    <div className="order">
      <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order</p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
