import React from "react";
import "../sass/headerpages.scss";
import { Link } from "react-router-dom";
import superhero from "../assets/images/superhero.png";
import panier from "../assets/images/panier.png";
import background from "../assets/images/background.png";

function HeaderPages() {
  return (
    <div
      className="headerpages-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Link to="/">
        <div className="logopages">
          <p>LHVL</p>
          <img src={superhero} alt="superhero" height="100px" width="100px" />
        </div>
      </Link>
      <Link className="imgheader" to="/panier">
        <img src={panier} alt="panier" width="30px" height="30px" />
      </Link>
    </div>
  );
}

export default HeaderPages;
