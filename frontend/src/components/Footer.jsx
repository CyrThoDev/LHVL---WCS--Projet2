import React from "react";
import "../sass/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>Les héros de la vente en ligne</div>
      <div className="contact">
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
