import accessories from "../../db/accessories";
import hats from "../../db/hats";
import jackets from "../../db/jackets";
import shirts from "../../db/shirts";
import shoes from "../../db/shoes";
import trousers from "../../db/trousers";

import "./style.css";

const ItemPage = ({ params }) => {
  let category = params.category;
  let id = params.id;

  switch (category) {
    case "accessories":
      category = accessories;
      break;
    case "hats":
      category = hats;
      break;
    case "jackets":
      category = jackets;
      break;
    case "shirts":
      category = shirts;
      break;
    case "shoes":
      category = shoes;
      break;
    case "trousers":
      category = trousers;
      break;
    default:
      break;
  }

  let item = category[id];

  const { designer, image, name, price, qty } = item;

  const qtyNote = (q) => {
    if (q >= 100) {
      return "well stocked";
    } else if (q < 100) {
      return "selling well";
    } else if (q < 10) {
      return "selling out";
    } else {
      return "sold out";
    }
  };

  return (
    <div className="item-page">
      <h3>{name}</h3>
      <p>{designer}</p>
      <img src={image} alt="" />
      <p>£{price}</p>
      <p>{qtyNote(qty)}</p>
    </div>
  );
};

export default ItemPage;
