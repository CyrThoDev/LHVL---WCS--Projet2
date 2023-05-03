import "../sass/header.scss";
import { useState } from "react";
import search from "../assets/images/search.svg";

function SearchBar() {
  const [recherche, setRecherche] = useState("");
  return (
    <div className="searchbar">
      <form className="formsearchbar" name="search">
        <input
          type="text"
          className="input"
          name="txt"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
        <img src={search} alt="search" width="40px" height="40px" />
      </form>
    </div>
  );
}

export default SearchBar;
