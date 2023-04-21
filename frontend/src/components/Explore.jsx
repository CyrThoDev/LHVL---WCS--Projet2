import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/header.scss";

function Explore() {
  const options = [
    { label: "Les Super-Catégories 🦸‍♂️", link: "/page1" },
    { label: "Tous les Héros de A à Z", link: "/page2" },
    { label: "Les plus populaires", link: "/page3" },
    { label: "Tous les univers", link: "/page4" },
    { label: "Les meilleures ventes", link: "/page5" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setMenuOpen(!menuOpen);
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
                  <Link to={option.link}>{option.label}</Link>
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
