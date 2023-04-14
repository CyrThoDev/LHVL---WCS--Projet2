import "../sass/cards.scss";
import SuperCard from "./SuperCard";

export default function AllCards({ superheroes }) {
  return (
    <div>
      <div className="superHeroes">
        {superheroes.map((superhero) => (
          <SuperCard card={superhero} />
        ))}
      </div>
    </div>
  );
}
