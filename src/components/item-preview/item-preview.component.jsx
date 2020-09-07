import React from "react";

import "./item-preview.styles.scss";
import { addToCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const ItemPreview = ({ currentUser, item, addToCart, cartItems }) => {
  const { url, price, name } = item;
  return (
    <div className="item">
      <img className="image" src={url} alt="item" />
      <div className="add-to-cart">
        {price} &euro; &bull; {"  "}
        <button
          className="btn-transparent"
          onClick={() => addToCart(item, currentUser.id, cartItems)}
        >
          <div className="cart"></div>
        </button>
      </div>
      <span className="name">{name}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item, id, cartItems) => dispatch(addToCart(item, id, cartItems)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPreview);
