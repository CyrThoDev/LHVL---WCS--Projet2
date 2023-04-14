import "../sass/superhero.scss";

export default function CardHero({ superhero }) {
  return (
    <figure className="superhero-container">
      <img src={superhero.image_sm} alt={superhero.name} />
      <figcaption>{superhero.name}</figcaption>
      <button type="button">Description</button>
    </figure>
  );
}
