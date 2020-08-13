import React from "react";
import { connect } from "react-redux";

import {
  addToCart,
  removeFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

const CartItem = ({ item, addToCart, removeFromCart, clearItemFromCart }) => {
  const { url, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img className="image" src={url} alt="cart item"></img>
      <div className="cart-item-details">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        <div className="quantity">
          <button
            className="remove-button"
            onClick={() => removeFromCart(item)}
          >
            +
          </button>
          <span>{quantity}</span>
          <button className="add-button" onClick={() => addToCart(item)}>
            -
          </button>
        </div>
        <button
          className="clear-button"
          onClick={() => clearItemFromCart(item)}
        >
          x
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
