import React from "react";
import "../sass/Modal.scss";

function Modal({ superhero, setOpenModal }) {
  return (
    <div className="modalBackground">
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="titleCloseBtn">
          <button
            onClick={() => {
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
            <p><strong>Name:</strong> {superhero.name}</p>
            {}
          </div>
          <img className="superhero-image" src={superhero.image_sm} alt={superhero.name} />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            annuler
          </button>
          <button>ajout au panier</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
