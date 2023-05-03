import React from "react";
import { Link } from "react-router-dom";
import "../sass/header.scss";
import superhero from "../assets/images/superhero.png";
import jeudecarte from "../assets/images/jeudecarteblanc.png";

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo">
        <Link to="/">
          <h1>LHVL</h1>
        </Link>
        <Link className="logoimage" to="/">
          <img src={superhero} alt="superhero" height="150px" width="150px" />
        </Link>
      </div>
      <div className="slogan">
        <Link to="/apropos">
          <h2>Les héros de la vente en ligne</h2>
        </Link>
        <Link className="jeudecarte" to="/">
          <img src={jeudecarte} alt="jeudecarte" height="75px" width="75px" />
        </Link>
      </div>
    </div>
  );
}

export default Logo;
