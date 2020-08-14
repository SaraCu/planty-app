import React from "react";

import ItemsGallery from "../../components/items-gallery/items-gallery.component";

import "./shop.styles.scss";

const ShopPage = () => {
  document.body.style = "background: #cfe6e3;";

  return (
    <div>
      <ItemsGallery />
    </div>
  );
};

export default ShopPage;
