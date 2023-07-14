import React from "react";

import Hero from "./components/Hero";

import { useBeers } from "./store/store";
import { WEB_URL } from "./utils/constants";

import "./App.css";

const App = () => {
  const fetchBeers = useBeers((state) => state.fetchBeers);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    fetchBeers(`${WEB_URL}page=1`);
  }, []);
  console.log(currentPage);

  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
    </>
  );
};

export default App;
