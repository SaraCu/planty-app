import React from "react";

import Cart from "../../components/cart/cart.component";

import "./cart.styles.scss";

const CartPage = () => {
  document.body.style = "background: #fbffb0;";

  return (
    <div className="checkout">
      <Cart />
    </div>
  );
};

export default CartPage;
