import { useBeers } from "../store/store";

const BeerCard = (props) => {
  const handleDelete = useBeers((state) => state.deleteRecipeSelection);
  const handleToggle = useBeers((state) => state.toggleRecipeSelection);

  return (
    <div className="beer_card">
      <h1 className="beer_card__header">{props.name}</h1>
      <img className="beer_card__image" src={props.image_url} alt="beer" />
      <p className="beer_card__description">{props.description}</p>
    </div>
  );
};

export default BeerCard;
