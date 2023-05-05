import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../sass/allcategories.scss";
import HeaderPages from "../components/HeaderPages";
import CardHero from "../components/CardHero";
import "../sass/allcards.scss";

function Allcategories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [Superheroes, setSuperHeroes] = useState([]);
  const [Filters, setFilters] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const type = searchParams.get("type");

  const handleParam = (param) => {
    setSearchParams({ type: param });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/superheroes?${type}=${userSearch}`)
      .then((result) => result.json())
      .then((superheroes) => {
        setSuperHeroes(superheroes);
      });
  }, [userSearch]);

  useEffect(() => {
    if (type === "gender" || type === "race") {
      fetch(`http://localhost:5000/categories?type=${type}`)
        .then((result) => result.json())
        .then((filters) => {
          setFilters(filters);
        });
    }
  }, [type]);

  return (
    <div className="allcategories-container">
      <HeaderPages />
      <h2>Selectionnez votre catégorie</h2>
      <button type="button" onClick={() => handleParam("gender")}>
        Genre
      </button>
      <button type="button" onClick={() => handleParam("race")}>
        Race
      </button>
      {Filters.length > 0 && (
        <label htmlFor="GenderSelect">
          Filtrer par
          <select
            id="Select"
            onChange={(event) => setUserSearch(event.target.value)}
            value={userSearch}
          >
            <option value="">---</option>
            {Filters.map((filter) => (
              <option value={filter}>{filter}</option>
            ))}
          </select>
        </label>
      )}
      <div className="allCards">
        {Superheroes.map((superhero) => (
          <CardHero superhero={superhero} />
        ))}
      </div>
    </div>
  );
}

export default Allcategories;
