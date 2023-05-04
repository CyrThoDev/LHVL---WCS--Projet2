import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardHero from "../components/CardHero";
import "../sass/Panier.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Panier({ basket }) {
  const [cardsData, setCardsData] = useState([]);
  const [quantities, setQuantities] = useState([0, 0, 0]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/basket?list=${basket}`)
      .then((res) => res.json())
      .then((heroes) => setCardsData(heroes))
      .catch((err) => console.error(err));
  }, []);

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
      <Header />
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
                    <label>
                      Quantité :
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
                    </label>
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
