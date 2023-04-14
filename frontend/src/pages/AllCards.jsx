import "../sass/allcards.scss";
import CardHero from "../components/CardHero";
import SuperHeroes from "../assets/data/data";

export default function AllCards() {
  return (
    <div className="allCards">
      {SuperHeroes.map((superhero) => (
        <CardHero superhero={superhero} />
      ))}
    </div>
  );
}
