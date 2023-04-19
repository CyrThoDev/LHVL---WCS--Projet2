import React from "react";
import "../sass/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>Les héros de la vente en ligne</p>
      <Link to="/contact">Contact</Link>
    </footer>
  );
}

export default Footer;
