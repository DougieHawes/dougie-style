import accessories from "../../../db/accessories";
import hats from "../../../db/hats";
import jackets from "../../../db/jackets";
import shirts from "../../../db/shirts";
import shoes from "../../../db/shoes";
import trousers from "../../../db/trousers";

import { Card1 } from "../../utils/cards";

import "./style.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-grid">
        <Card1 route="/jackets" title="jackets" category={jackets} />
        <Card1 route="/shoes" title="shoes" category={shoes} />
        <Card1 route="/shirts" title="shirts" category={shirts} />
        <Card1 route="/trousers" title="trousers" category={trousers} />
        <Card1 route="/hats" title="hats" category={hats} />
        <Card1
          route="/accessories"
          title="accessories"
          category={accessories}
        />
      </div>
    </div>
  );
};

export default Landing;
