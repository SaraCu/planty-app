import React from "react";
import "./items-gallery.styles.scss";
import { selectItemsCollection } from "../../redux/items/items.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const ItemsGallery = ({ items }) => (
  <div className="gallery">
    <h1 className="title">Gallery</h1>
    <div className="container">
      {items.map((item) => (
        <div className="item">item</div>
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectItemsCollection,
});

export default connect(mapStateToProps)(ItemsGallery);
