import React, { Component } from "react";
import "./items-gallery.styles.scss";
import { selectItemsCollection } from "../../redux/items/items.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import ItemPreview from "../item-preview/item-preview.component";
import { fetchData } from "../../redux/items/items.actions";

class ItemsGallery extends Component {
  componentDidMount() {
    fetchData();
  }

  render() {
    const { items } = this.props;
    return (
      <div className="gallery">
        <h1 className="title">Gallery</h1>
        <div className="container">
          {items
            ? items.map((item) => (
                <ItemPreview key={item.id} item={item}></ItemPreview>
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  items: selectItemsCollection,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsGallery);
