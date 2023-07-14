import { useInView } from "react-intersection-observer";

import BeerCard from "./BeerCard";

import { useBeers } from "../store/store";

const Hero = () => {
  const beers = useBeers((state) => state.beers);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <>
      {beers.map((beer) => (
        <BeerCard key={beer.id} {...beer} />
      ))}
      <div ref={ref}>123</div>
    </>
  );
};

export default Hero;
