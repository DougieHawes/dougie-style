import { useState } from "react";

import { Input1 } from "./utils/inputs.js";

const Signin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    showpassword: false,
  });

  const { email, password, showpassword } = state;

  const handleChange = (name) => (e) =>
    setState({ ...state, [name]: e.target.value });

  return (
    <nav className="signin">
      Signin
      <form>
        <Input1
          value={email}
          type="email"
          placeholder="enter email..."
          onChange={handleChange("email")}
        />
        <p
          onClick={() =>
            setState({ ...state, showpassword: !state.showpassword })
          }
        >
          showpassword
        </p>
        <Input1
          value={password}
          type={showpassword ? "text" : "password"}
          placeholder="enter password..."
          onChange={handleChange("password")}
        />
      </form>
    </nav>
  );
};

export default Signin;
