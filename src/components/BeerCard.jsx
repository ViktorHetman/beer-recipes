import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";

import { useBeers } from "../store/store";

const BeerCard = ({ name, id, description, image_url, choosed }) => {
  const handleToggle = useBeers((state) => state.toggleRecipeSelection);
  const navigate = useNavigate();
  const handleRecipeClick = (e, id, choosed) => {
    e.preventDefault();
    if (e.button === 2) {
      handleToggle(id, choosed);
    } else if (e.button === 0) {
      navigate(`beer/:${id}`);
    }
  };

  return (
    <div
      className={`beer_card ${choosed ? "choosed_recipe" : ""}`}
      onContextMenu={(e) => {
        handleRecipeClick(e, id, choosed);
      }}
      onClick={(e) => handleRecipeClick(e, id)}
    >
      <h1 className="beer_card__header">{name}</h1>
      <LazyLoad>
        <img className="beer_card__image" src={image_url} alt="beer" />
      </LazyLoad>
      <p className="beer_card__description">{description}</p>
    </div>
  );
};

export default BeerCard;
