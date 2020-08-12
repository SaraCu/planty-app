import React from "react";
import "./item.styles.scss";
import grayCart from "../../Images/cartGray.png";
import blueCart from "../../Images/cartBlue.png";
import { createStructuredSelector } from "reselect";

const Item = ({ imageSrc, price, name }) => (
  <div className="item">
    <img className="image" src={this.props.imgSrc} alt="plant" />
    <div>
      {this.props.price} &euro; &bull; {"  "}
      <button
        className="btn-transparent"
        onClick={() =>
          this.props.addToCart({
            name: this.props.plantName,
            src: this.props.imgSrc,
            price: this.props.price,
            quantity: 1,
          })
        }
      >
        <img
          className="cart"
          src={this.state.cartHovered ? blueCart : grayCart}
          alt="shopping cart"
        ></img>
      </button>
    </div>
    <span className="plant-name">{this.props.plantName}</span>
  </div>
);

export default Item;
