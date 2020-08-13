import React from "react";

import "./logo.styles.scss";

const Logo = ({ small, white }) => (
  <div className={`logo ${small ? "small" : ""} ${white ? "white" : ""}`}>
    <h1>Planty</h1>
  </div>
);

export default Logo;
