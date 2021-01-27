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
    success: "",
    error: "",
  });

  const {
    username,
    email,
    password,
    confirmpassword,
    showpassword,
    buttontext,
    loading,
    success,
    error,
  } = state;

  const handleChange = (name) => (e) =>
    setState({
      ...state,
      loading: false,
      success: "",
      error: "",
      [name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      setState({ ...state, error: "please complete all fields" });
    } else if (password !== confirmpassword) {
      setState({ ...state, error: "passwords do not match" });
    } else {
      setState({ ...state, buttontext: "submitting" });
    }
  };

  return (
    <nav className="signup">
      Signup
      <form onSubmit={handleSubmit}>
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
      {loading && <div>LOADING...</div>}
      {success && <div>{success}</div>}
      {error && <div>{error}</div>}
    </nav>
  );
};

export default Signup;
