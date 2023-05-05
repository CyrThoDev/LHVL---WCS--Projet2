import "../sass/header.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import background from "../assets/images/background.png"

function Header() {
  return (
    <div
      className="header-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="apropos">
        <Link to="/apropos">A PROPOS</Link>
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
