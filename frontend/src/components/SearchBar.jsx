import "../sass/header.scss";
import { useState } from "react";

function SearchBar() {
  const [recherche, setRecherche] = useState("");
  return (
    <div className="SearchBar">
      <div className="box">
        <form name="search">
          <input
            type="text"
            className="input"
            name="txt"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
