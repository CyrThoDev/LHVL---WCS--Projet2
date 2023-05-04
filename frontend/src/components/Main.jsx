import React from "react";
import "../sass/main.scss";
import { Link } from "react-router-dom";
import superheromain from "../assets/images/superheromain.png";

function Main() {
  return (
    <div className="main-container">
      <div className="story-container">
        <img
          src={superheromain}
          alt="superheromain"
          width="500px"
          height="500px"
        />
        <div className="text-container">
          <h2>Bienvenue sur le site des héros de la vente en ligne</h2>
          <p>
            LE site de référence pour l'achat en ligne de vos cartes de Super
            Héros.
          </p>
          <p>
            {" "}
            Newbie ou aguerri , vous trouverez toutes les cartes que vous
            souhaitez dans notre vaste choix de plus de 700 cartes.
          </p>
        </div>
      </div>
      <div className="categories-container">
        <Link className="allcards-button" to="/all">
          <button type="button">Voir tous les héros</button>
        </Link>
        <Link className="categories-button" to="/categories">
          <button type="button">Voir toutes les catégories</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
