import { useBeers } from "../store/store";

const BeerCard = (props) => {
  const handleToggle = useBeers((state) => state.toggleRecipeSelection);
  const handleRecipeClick = (e, id) => {
    e.preventDefault();
    if (e.button === 2) {
      handleToggle(id);
    } else if (e.button === 0) {
      ("");
    }
  };

  return (
    <div
      className={`beer_card`}
      onContextMenu={(e) => {
        handleRecipeClick(e, props.id);
      }}
      onClick={(e) => handleRecipeClick(e, props.id)}
    >
      <h1 className="beer_card__header">{props.name}</h1>
      <img className="beer_card__image" src={props.image_url} alt="beer" />
      <p className="beer_card__description">{props.description}</p>
    </div>
  );
};

export default BeerCard;
