import { useParams } from "react-router-dom";

import ItemPage from "../../utils/ItemPage";

const Item = () => {
  const params = useParams();

  return <ItemPage params={params} />;
};

export default Item;
