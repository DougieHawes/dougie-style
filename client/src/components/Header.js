import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-title">
        <Link to="/">
          <h1>DougieStyle</h1>
        </Link>
      </div>
      <ul className="header-links">
        <li>
          <Link to="/signin">sign-in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
