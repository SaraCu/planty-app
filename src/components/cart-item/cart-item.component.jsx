import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { X } from "react-bootstrap-icons";

import {
  addToCart,
  removeFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

import "./cart-item.styles.scss";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartItem = ({
  currentUser,
  item,
  addToCart,
  removeFromCart,
  clearItemFromCart,
  cartItems,
}) => {
  const { url, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img className="image" src={url} alt="cart item"></img>
      <div className="cart-item-details">
        <div className="name">{name}</div>
        <div className="price">{price} &euro;</div>
      </div>
      <div className="quantity">
        <button
          className="remove-button"
          onClick={() => removeFromCart(item, currentUser?.id, cartItems)}
        >
          -
        </button>
        <div className="quantity-value">{quantity}</div>
        <button
          className="add-button"
          onClick={() => addToCart(item, currentUser?.id, cartItems)}
        >
          +
        </button>
      </div>
      <button
        className="clear-button"
        onClick={() => clearItemFromCart(item, currentUser?.id)}
      >
        <X width="1.5em" height="1.5em" className="bi bi-x"></X>
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item, id, cartItems) => dispatch(addToCart(item, id, cartItems)),
  removeFromCart: (item, id, cartItems) =>
    dispatch(removeFromCart(item, id, cartItems)),
  clearItemFromCart: (item, id) => dispatch(clearItemFromCart(item, id)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
