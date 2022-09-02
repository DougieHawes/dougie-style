import CategoryPage from "../../utils/CategoryPage";

import accessories from "../../../db/accessories";

import "./style.css";

const Accessories = () => {
  return <CategoryPage category={accessories} title="accessories" />;
};

export default Accessories;
