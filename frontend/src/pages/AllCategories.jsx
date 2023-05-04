import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../sass/allcategories.scss";
import HeaderPages from "../components/HeaderPages";
import CardHero from "../components/CardHero";
import "../sass/allcards.scss";

function Allcategories() {
  const [searchParams] = useSearchParams();
  const [Superheroes, setSuperHeroes] = useState([]);
  const [Filters, setFilters] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const type = searchParams.get("type");

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/superheroes?${type}=${userSearch}`
    )
      .then((result) => result.json())
      .then((superheroes) => {
        setSuperHeroes(superheroes);
      });
  }, [userSearch]);

  useEffect(() => {
    if (type === "gender" || type === "race") {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/categories?type=${type}`)
        .then((result) => result.json())
        .then((filters) => {
          setFilters(filters);
        });
    }
  }, []);

  return (
    <div className="allcategories-container">
      <HeaderPages />
      <h2>Trouvez votre héro par catégorie</h2>
      <label htmlFor="Select">
        Sélectionnez le genre :
        <select
          id="Select"
          onChange={(event) => setUserSearch(event.target.value)}
          value={userSearch}
        >
          <option value="">---</option>
          {Filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </label>
      <div className="allCards">
        {Superheroes.map((superhero) => (
          <CardHero key={superhero.id} superhero={superhero} />
        ))}
      </div>
    </div>
  );
}

export default Allcategories;
