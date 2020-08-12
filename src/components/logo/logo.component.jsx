import React from "react";

import "./logo.styles.scss";

const Logo = ({ small, pink }) => (
  <div className={`logo ${small ? "small" : ""} ${pink ? "pink" : ""}`}>
    <h1>Planty</h1>
  </div>
);

export default Logo;
