import React, { useState } from "react";
import "../sass/header.scss";

function Explore() {
  const options = [
    { label: "Les Super-Catégories 🦸‍♂️", link: "https://example.com/page1" },
    { label: "Tous les Héros de A à Z", link: "https://example.com/page1" },
    { label: "Les plus populaires", link: "https://example.com/page1" },
    { label: "Tous les univers", link: "https://example.com/page1" },
    { label: "Les meilleures ventes", link: "https://example.com/page1" },
  ];
  const [menuOpen, setMenuOpen] = useState(false); // état pour le menu déroulant

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen); // inverse la valeur de l'état pour ouvrir ou fermer le menu
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setMenuOpen(!menuOpen); // inverse la valeur de l'état pour ouvrir ou fermer le menu
    }
  };

  return (
    <div className="Explore-container">
      <div className={`navigation ${menuOpen ? "menu-open" : ""}`}>
        <div>
          <div // div pour le menu déroulant
            className="select"
            onClick={handleMenuClick} // fonction pour ouvrir ou fermer le menu déroulant
            onKeyDown={handleKeyDown} // fonction pour gérer l'événement de touche enfoncée
            role="button" // ajoute un rôle d'élément interactif
            tabIndex={0} // ajoute la possibilité de naviguer avec la touche Tab
          >
            {menuOpen ? ( // affiche le texte sélectionné ou le texte par défaut en fonction de l'état de menuOpen
              <div className="selected-option">{options[0].label}</div>
            ) : (
              <button className="default-option" type="button">
                {" "}
                {/* Ajoute le type d'attribut pour le bouton */}
                EXPLORE
                <br />
              </button>
            )}

            <div className="options-container">
              {options.map((option, index) => {
                if (index === 0) return null;
                return (
                  <div key={option.label}>
                    {" "}
                    {/* Utilise le label de l'option comme clé au lieu de l'index */}
                    <br />
                    <a
                      href={option.link}
                      // target="_blank"
                    >
                      {option.label}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
