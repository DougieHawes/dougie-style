import { useState } from "react";

// import utility components
import { Input1 } from "./utils/inputs.js";
import { Button1 } from "./utils/buttons.js";

const Signin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    showpassword: false,
    buttontext: "submit",
    loading: false,
    success: false,
    error: "",
  });

  const { email, password, showpassword, buttontext } = state;

  const handleChange = (name) => (e) =>
    setState({
      ...state,
      loading: false,
      success: false,
      error: "",
      [name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setState({ ...state, error: "please complete all fields" });
    }

    console.log(state);
  };

  return (
    <nav className="signin">
      Signin
      <form onSubmit={handleSubmit}>
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
        <Button1 text={buttontext} />
      </form>
    </nav>
  );
};

export default Signin;
