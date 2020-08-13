import React from "react";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const Cart = ({ items }) => (
  <div className="cart">
    <div className="container">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default connect(mapStateToProps, null)(Cart);
