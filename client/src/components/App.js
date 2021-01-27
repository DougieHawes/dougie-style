import "./style.min.css";

import { Switch, Route } from "react-router-dom";

// import layout components
import Header from "./Header";

// import 404 route
import NotFound from "./NotFound";

// import route components
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="route-box">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
