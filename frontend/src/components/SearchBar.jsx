import "../sass/header.scss";
import { useState } from "react";

function SearchBar() {
  const [recherche, setRecherche] = useState("");
  return (
    <div className="SearchBar">
      <div>
        <label htmlFor="searchInput">
          <input
            type="text"
            placeholder="recherche"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
