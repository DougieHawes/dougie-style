import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className="home">
      <h1>DougieStyle</h1>
      <Link to="/signup">sign-up</Link>
    </nav>
  );
};

export default Home;
