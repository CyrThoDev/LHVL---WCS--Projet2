import React from "react";
import { Link } from "react-router-dom";
import "../sass/header.scss";
import superhero from "./superhero.png";
import jeudecarte from "./jeudecarte.png";

function Logo() {
  return (
    <div>
      <div>
        <div className="logo-container">
          <Link to="/">
            <h1>LHVL</h1>
          </Link>
          <Link to="/">
            <img src={superhero} alt="superhero" height="100" width="100" />
          </Link>
        </div>
        <div className="slogan-logo-container">
          <Link to="/apropos">
            <p>Les héros de la vente en ligne</p>
          </Link>
          <Link to="/">
            <img src={jeudecarte} alt="jeudecarte" height="50" width="50" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logo;
