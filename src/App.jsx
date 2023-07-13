import React from "react";

import { useBeers } from "./store/store";
import { WEB_URL } from "./utils/constants";

const App = () => {
  const { fetchBeers, beers } = useBeers((state) => ({
    loading: state.loading,
    error: state.error,
    fetchBeers: state.fetchBeers,
    beers: state.beers,
  }));

  React.useEffect(() => {
    fetchBeers(WEB_URL);
  }, []);

  return (
    <div>
      {beers.map((beer) => (
        <div key={beer.id}>
          <p>{beer.name}</p>
          <img src={beer.image_url} alt="beer" />
          <span>{beer.description}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
