import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Landing from "./components/routes/public/Landing";

import "./style.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
