import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardHero from "../components/CardHero";
import "../sass/Panier.scss";
import SuperHeroes from "../assets/data/data";

function Panier() {
  const [cardsData, setCardsData] = useState(SuperHeroes.slice(0, 3));
  const [quantities, setQuantities] = useState([0, 0, 0]);

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const handleDeleteCard = (index) => {
    const newCardsData = [...cardsData];
    const newQuantities = [...quantities];
    newCardsData.splice(index, 1);
    newQuantities.splice(index, 1);
    setCardsData(newCardsData);
    setQuantities(newQuantities);
  };

  const randomPrice = () => {
    return (Math.random() * (30 - 20) + 20).toFixed(2);
  };

  return (
    <>
      <header>Ici viendra le header</header>
      <div className="panier-container">
        <h1 className="panier-title">Voici ton super PANIER pour gagner !</h1>
        <div className="content-container">
          <div className="cards-container">
            {cardsData.map((superhero, index) => (
              <div key={superhero.id} className="card-container">
                <CardHero superhero={superhero} />
                <div className="info-container">
                  <div className="price">Prix : ${randomPrice()}</div>
                  <div className="quantity-container">
                    <span>Quantité :</span>
                    <input
                      type="number"
                      min="0"
                      value={quantities[index]}
                      onChange={(e) =>
                        handleQuantityChange(
                          index,
                          parseInt(e.target.value, 10)
                        )
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => handleDeleteCard(index)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="rectangles-container">
            <div className="summary-container">
              <div className="summary-details">
                <p>T'es super cartes 0€</p>
                <p>Ta super livraison 0€</p>
                <p>Total 0€</p>
              </div>
              <button type="button" className="validate-button">
                VALIDER MA COMMANDE
              </button>
            </div>
            <div className="additional-rectangle">
              <p>TON CODE PROMO</p>
              <input />
              <button type="button" className="validate-button">
                Submit
              </button>
            </div>
            <div className="additional-rectangle">
              <p>TON CODE D'AFFILIATION</p>
              <input />
              <button type="button" className="validate-button">
                Submit
              </button>
            </div>
          </div>
        </div>
        <Link to="/">
          <button type="button" className="return-button">
            Retour à mes achats
          </button>
        </Link>
        <footer>Ici viendra le footer</footer>
      </div>
    </>
  );
}

export default Panier;
