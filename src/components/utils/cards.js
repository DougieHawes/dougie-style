import { Link } from "react-router-dom";

import "./style.css";

// represents a category on the landing page
export const Card1 = ({ category, title, route }) => {
  const selected = category[Math.floor(Math.random() * category.length)];

  return (
    <div className="card">
      <Link to={route}>
        <img className="card-image" src={selected.image} alt={title} />
        <div className="card-veneer"></div>
        <h2 className="card-title card-title-light">{title}</h2>
        <h2 className="card-title card-title-medium">{title}</h2>
        <h2 className="card-title card-title-dark">{title}</h2>
      </Link>
      <Link to={`/item/${title}/${selected.id}`} className="card1-link">
        &#x1F6CD;
      </Link>
    </div>
  );
};

// represent an item on a category page
export const Card2 = ({ item }) => {
  const { category, id, image, name } = item;

  return (
    <div className="card2">
      <Link to={`/item/${category}/${id - 1}`}>
        <img className="card2-image" src={image} alt={name} />
        <h3 className="card2-title">{name}</h3>
      </Link>
    </div>
  );
};
