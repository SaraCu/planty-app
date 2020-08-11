import React from "react";

import "./logo.styles.scss";

const Logo = ({ small }) => (
  <div className={`logo ${small ? "small" : ""}`}>
    <h1>Planty</h1>
  </div>
);

export default Logo;
