import { Link } from "react-router-dom";

import "./style.css";

// represents a category on the landing page
export const Card1 = ({ category, title, route }) => {
  const selected = category[Math.floor(Math.random() * category.length)];

  return (
    <div className="card">
      <Link to={route}>
        <img className="card-image" src={selected.image} alt={title} />
        <h3 className="card-title card-title-light">{title}</h3>
        <h3 className="card-title card-title-middle">{title}</h3>
        <h3 className="card-title card-title-dark">{title}</h3>
      </Link>
      <Link to={`/${title}/${selected.id}`} className="card1-link">
        &#x1F6CD;
      </Link>
    </div>
  );
};
