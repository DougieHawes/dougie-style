import { useState } from "react";

// import utility components
import { Input1 } from "./utils/inputs.js";
import { Button1 } from "./utils/buttons.js";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    showpassword: false,
    buttontext: "submit",
    loading: false,
    success: false,
    error: false,
  });

  const {
    username,
    email,
    password,
    confirmpassword,
    showpassword,
    buttontext,
  } = state;

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
        <Button1 text={buttontext} />
      </form>
    </nav>
  );
};

export default Signup;
