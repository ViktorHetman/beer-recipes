import { useBeers } from "../store/store";

const BeerCard = (props) => {
  const handleDelete = useBeers((state) => state.deleteRecipeSelection);
  const handleToggle = useBeers((state) => state.toggleRecipeSelection);

  return (
    <div>
      <p>{props.name}</p>
      <img src={props.image_url} alt="beer" />
      <p>{props.description}</p>
    </div>
  );
};

export default BeerCard;
