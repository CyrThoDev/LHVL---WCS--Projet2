import "../sass/header.scss";
import Explore from "./Explore";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="navigation-container">
      <Explore />
      <SearchBar />
    </div>
  );
}

export default NavBar;
