import "../sass/allcards.scss";
import { useState, useEffect } from "react";
import CardHero from "../components/CardHero";

export default function AllCards() {
  const [SuperHeroes, setSuperHeroes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/superheroes`)
      .then((result) => result.json())
      .then((superheroes) => {
        setSuperHeroes(superheroes);
      });
  }, []);

  return (
    <div className="allCards">
      {SuperHeroes.map((superhero) => (
        <CardHero superhero={superhero} />
      ))}
    </div>
  );
}
