import "../sass/header.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import panier from "../assets/images/panier.png";
import Apropos from "../pages/APropos";

function Header() {
  return (
    <div className="header-container">
      <div className="apropos">
        <Apropos />
        <Link to="/panier">
          <img src={panier} alt="panier" width="30px" height="30px" />
        </Link>
      </div>
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;
