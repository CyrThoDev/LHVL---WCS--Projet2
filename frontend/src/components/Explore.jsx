import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/header.scss";

function Explore() {
  const options = [
    { label: "Tous les héros de A à Z 🦸‍♂️", link: "/page1" },
    { label: "Les Super-Catégories", link: "/page2" },
    { label: "Les plus populaires", link: "/page3" },
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
          MENU ↓
        </button>
        <div className={`options-container ${menuOpen ? "menu-open" : ""}`}>
          {options.map((option) => {
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
  );
}

export default Explore;
