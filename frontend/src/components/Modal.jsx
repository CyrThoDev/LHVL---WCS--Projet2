import React from "react";
import "../sass/modal.scss";

function Modal({ superhero, setOpenModal, addToBasket }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{superhero.name}</h1>
        </div>
        <div className="body">
          <div className="superhero-info">
            <p>Voici les informations de {superhero.name}:</p>
            <p>
              <strong>Name:</strong> {superhero.name}
            </p>
          </div>
          <img
            className="superhero-image"
            src={superhero.image_sm}
            alt={superhero.name}
          />
        </div>
        <div className="footer">
          <button
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            annuler
          </button>
          <button type="button" onClick={addToBasket}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
