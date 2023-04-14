import "../sass/cards.scss";

export default function SuperCard({ card }) {
  return (
    <figure className="card-container">
      <img src={card.image_sm} alt={card.name} />
      <figcaption>{card.name}</figcaption>
      <button type="button">Description</button>
    </figure>
  );
}
