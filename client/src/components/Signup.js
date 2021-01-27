import { useState } from "react";

import { Input1 } from "./utils/inputs.js";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    showpassword: false,
  });

  const { username, email, password, confirmpassword, showpassword } = state;

  const handleChange = (name) => (e) =>
    setState({ ...state, [name]: e.target.value });

  return (
    <nav className="signup">
      Signup
      <form>
        <Input1
          value={username}
          type="text"
          placeholder="enter username..."
          onChange={handleChange("username")}
        />
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
        <Input1
          value={confirmpassword}
          type={showpassword ? "text" : "password"}
          placeholder="confirm password..."
          onChange={handleChange("confirmpassword")}
        />
      </form>
    </nav>
  );
};

export default Signup;
