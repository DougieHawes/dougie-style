import CategoryPage from "../../utils/CategoryPage";

import hats from "../../../db/hats";

import "./style.css";

const Hats = () => {
  return <CategoryPage category={hats} title="hats" />;
};

export default Hats;
