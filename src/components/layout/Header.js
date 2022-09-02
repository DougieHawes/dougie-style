import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="title-box">
        <Link to="/">
          <h1 className="title">DougieStyle</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
