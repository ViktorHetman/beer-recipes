import { useParams } from "react-router-dom";

const CertainBeer = () => {
  const { id } = useParams();

  return <div>This is beer number {id.substring(1)}</div>;
};

export default CertainBeer;
