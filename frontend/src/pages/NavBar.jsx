import "../sass/header.scss";
import Explore from "../components/Explore";
import Apropos from "../components/Apropos";
import SearchBar from "../components/SearchBar";

function NavBar() {
  return (
    <div className="navigation-container">
      <Explore />
      <SearchBar />
      <Apropos />
    </div>
  );
}

export default NavBar;
