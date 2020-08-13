import React from "react";

import "./item-preview.styles.scss";
import { addToCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const ItemPreview = ({ item, addToCart }) => {
  const { url, price, name } = item;
  return (
    <div className="item">
      <img className="image" src={url} alt="item" />
      <div className="add-to-cart">
        {price} &euro; &bull; {"  "}
        <button className="btn-transparent" onClick={() => addToCart(item)}>
          <div className="cart" onClick={() => addToCart(item)}></div>
        </button>
      </div>
      <span className="name">{name}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(ItemPreview);
