import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Landing from "./components/routes/public/Landing";

import Accessories from "./components/routes/public/Accessories";
import Hats from "./components/routes/public/Hats";
import Jackets from "./components/routes/public/Jackets";
import Shirts from "./components/routes/public/Shirts";
import Shoes from "./components/routes/public/Shoes";
import Trousers from "./components/routes/public/Trousers";

import "./style.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            {/* category pages */}
            <Route exact path="/accessories" element={<Accessories />} />
            <Route exact path="/hats" element={<Hats />} />
            <Route exact path="/jackets" element={<Jackets />} />
            <Route exact path="/shirts" element={<Shirts />} />
            <Route exact path="/shoes" element={<Shoes />} />
            <Route exact path="/trousers" element={<Trousers />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
