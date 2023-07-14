import BeerCard from "./BeerCard";

import { useBeers } from "../store/store";

const Hero = () => {
  const beers = useBeers((state) => state.beers);
  const selectedRecipes = useBeers((state) => state.selectedRecipes);
  const handleDelete = useBeers((state) => state.deleteRecipeSelection);
  const slicedBeers = beers.slice(0, 15);

  return (
    <section>
      {selectedRecipes.length > 0 && (
        <button className="delete_btn" onClick={() => handleDelete()}>
          Delete choosed recipes
        </button>
      )}
      <div className="container">
        {slicedBeers.map((beer) => (
          <BeerCard key={beer.id} {...beer} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
