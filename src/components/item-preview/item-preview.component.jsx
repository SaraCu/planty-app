import React from "react";

import "./item-preview.styles.scss";

const ItemPreview = ({ item: { url, price, name } }) => (
  <div className="item">
    <img className="image" src={url} alt="item" />
    <div className="add-to-cart">
      {price} &euro; &bull; {"  "}
      <button className="btn-transparent">
        <div className="cart"></div>
      </button>
    </div>
    <span className="name">{name}</span>
  </div>
);

export default ItemPreview;
