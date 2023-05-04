import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardHero from "../components/CardHero";
import "../sass/Panier.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Panier({ basket, handleBasket }) {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/basket?list=${basket.map(
        (el) => el.id
      )}`
    )
      .then((res) => res.json())
      .then((heroes) => setCardsData(heroes))
      .catch((err) => console.error(err));
  }, [basket]);

  const randomPrice = () => {
    return (Math.random() * (30 - 20) + 20).toFixed(2);
  };

  return (
    <>
      <Header />
      <div className="panier-container">
        <h1 className="panier-title">Voici ton super PANIER pour gagner !</h1>
        <div className="content-container">
          <div className="cards-container">
            {cardsData.length > 0 &&
              basket.map((superhero) => (
                <div key={superhero.id} className="card-container">
                  <CardHero
                    superhero={cardsData.find((el) => el.id === superhero.id)}
                  />
                  <div className="info-container">
                    <div className="price">Prix : ${randomPrice()}</div>
                    <div className="quantity-container">
                      <label>
                        Quantité :
                        <input
                          type="number"
                          min="0"
                          value={superhero.value}
                          onChange={(e) =>
                            handleBasket(
                              superhero,
                              parseInt(e.target.value, 10)
                            )
                          }
                        />
                      </label>
                    </div>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => handleBasket(superhero, 0)}
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
              <button type="button" className="validate-button">
                Submit
              </button>
            </div>
            <div className="additional-rectangle">
              <p>TON CODE D'AFFILIATION</p>
              <button type="button" className="validate-button">
                Submit
              </button>
            </div>
          </div>
        </div>
        <Link to="/" className="return-button">
          Home
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Panier;
