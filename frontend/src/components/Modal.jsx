import React from "react";
import "../sass/modal.scss";

function Modal({ superhero, setOpenModal }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="modalBackground">
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        role="button"
      >
        <div className="titleCloseBtn">
          <button
            type="button"
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
            <p>
              <strong>Name:</strong> {superhero.name}
            </p>
            {}
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
          <button type="button">ajout au panier</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
