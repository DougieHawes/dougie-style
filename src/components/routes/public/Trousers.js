import CategoryPage from "../../utils/CategoryPage";

import trousers from "../../../db/trousers";

import "./style.css";

const Trousers = () => {
  return <CategoryPage category={trousers} title="trousers" />;
};

export default Trousers;
