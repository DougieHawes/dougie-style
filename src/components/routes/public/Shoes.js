import CategoryPage from "../../utils/CategoryPage";

import shoes from "../../../db/shoes";

import "./style.css";

const Shoes = () => {
  return <CategoryPage category={shoes} title="shoes" />;
};

export default Shoes;
