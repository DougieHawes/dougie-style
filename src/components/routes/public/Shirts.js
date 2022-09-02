import CategoryPage from "../../utils/CategoryPage";

import shirts from "../../../db/shirts";

import "./style.css";

const Shirts = () => {
  return <CategoryPage category={shirts} title="shirts" />;
};

export default Shirts;
