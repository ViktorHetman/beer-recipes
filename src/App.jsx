import React from "react";

import Hero from "./components/Hero";

import { useBeers } from "./store/store";
import { WEB_URL } from "./utils/constants";

import "./App.css";

const App = () => {
  const beers = useBeers((state) => state.beers);
  const loadRecipes = useBeers((state) => state.loadRecipes);
  const removeFirstFiveRecipes = useBeers(
    (state) => state.removeFirstFiveRecipes
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const sectionRef = React.useRef(null);

  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      removeFirstFiveRecipes();
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    if (beers.length < 15) {
      loadRecipes(`${WEB_URL}?page=${currentPage}`);
      setCurrentPage((prev) => prev + 1);
    }
    return () => document.removeEventListener("scroll", handleScroll);
  }, [beers.length]);

  return (
    <section ref={sectionRef} onScroll={(e) => handleScroll(e)}>
      <Hero setCurrentPage={setCurrentPage} />
    </section>
  );
};

export default App;
