import React from "react";
import "../sass/header.scss";
import superhero from "./superhero.png";
import jeudecarte from "./jeudecarte.png";

function Logo() {
  return (
    <div>
      <div>
        <div className="logo-container">
          <h1>LHVL</h1>
          <img src={superhero} alt="superhero" height="100" width="100" />
        </div>
        <div className="slogan-logo-container">
          <p>Les héros de la vente en ligne</p>
          <img src={jeudecarte} alt="jeudecarte" height="50" width="50" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
