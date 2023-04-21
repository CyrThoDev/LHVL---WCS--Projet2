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
      <div className="navigation">
        <div
          className="select"
          onClick={handleMenuClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          <button
            className={`default-option ${menuOpen ? "menu-open" : ""}`}
            type="button"
          >
            EXPLORE
          </button>
          <div className={`options-container ${menuOpen ? "menu-open" : ""}`}>
            {options.map((option, index) => {
              if (index === 0) return null;
              return (
                <div key={option.label}>
                  <br />
                  <a href={option.link}>{option.label}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
