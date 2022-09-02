import CategoryPage from "../../utils/CategoryPage";

import jackets from "../../../db/jackets";

import "./style.css";

const Jackets = () => {
  return <CategoryPage category={jackets} title="jackets" />;
};

export default Jackets;
