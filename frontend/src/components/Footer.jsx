import React from "react";
import "../sass/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>©Les héros de la vente en ligne</p>
      <div className="contact-link">
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
