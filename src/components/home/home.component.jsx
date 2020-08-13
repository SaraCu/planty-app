import React from "react";
import plantsImg from "../../images/Plants.png";
import "./home.styles.scss";
import { Element } from "react-scroll";

const Home = () => (
  <Element name="home">
    {" "}
    <div className="home">
      <div className="container">
        {" "}
        <div className="image-container">
          <img className="image" src={plantsImg} alt="potted plants"></img>
        </div>
        <div className="logo-container">
          <h1 className="logo">Planty</h1>
          <p className="logo-text">Order Plants from Heaven.</p>
        </div>
      </div>
    </div>
  </Element>
);

export default Home;
