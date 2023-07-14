import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Hero from "./components/Hero";
import CertainBeer from "./components/CertainBeer";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beers.length]);
  console.log(beers);

  return (
    <BrowserRouter>
      <section ref={sectionRef} onScroll={(e) => handleScroll(e)}>
        <Routes>
          <Route
            path="*"
            element={<Hero setCurrentPage={setCurrentPage} />}
          ></Route>
          <Route path="/beer/:id" element={<CertainBeer {...beers} />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default App;
