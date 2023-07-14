import React from "react";

import Hero from "./components/Hero";

import { useBeers } from "./store/store";
import { WEB_URL } from "./utils/constants";

import "./App.css";

const App = () => {
  const beers = useBeers((state) => state.beers);
  const loadRecipes = useBeers((state) => state.loadRecipes);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    if (beers.length < 15) {
      loadRecipes(`${WEB_URL}?page=${currentPage}`);
      setCurrentPage((prev) => prev + 1);
    }
  }, [beers.length]);

  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
    </>
  );
};

export default App;
