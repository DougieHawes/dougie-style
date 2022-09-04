import accessories from "../../db/accessories";
import hats from "../../db/hats";
import jackets from "../../db/jackets";
import shirts from "../../db/shirts";
import shoes from "../../db/shoes";
import trousers from "../../db/trousers";

import "./style.css";

const ItemPage = ({ params }) => {
  let item;

  return <div className="item-page">{item && item.name}</div>;
};

export default ItemPage;
