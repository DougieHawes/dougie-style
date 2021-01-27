import { useState } from "react";

import { signup } from "../api/auth";

import { Redirect } from "react-router-dom";

// import utility components
import { Input1 } from "./utils/inputs.js";
import { Button1 } from "./utils/buttons.js";

const Signup = () => {
  const [state, setState] = useState({
    username: "Dougie Hawes",
    email: "dougiehawes@hotmail.com",
    password: "123456",
    confirmpassword: "123456",
    showpassword: false,
    buttontext: "submit",
    loading: false,
    redirect: false,
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
    redirect,
    error,
  } = state;

  const handleChange = (name) => (e) =>
    setState({
      ...state,
      loading: false,
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
      const data = { username, email, password };

      setState({ ...state, buttontext: "submitting", loading: true });

      console.log(data);

      signup(data)
        .then((response) => {
          console.log("SUCCESS: " + response);
          setState({
            ...state,
            redirect: true,
          });
        })
        .catch((err) => {
          console.log("ERROR: " + err);
          setState({
            ...state,
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            buttontext: "submit",
            loading: false,
            error: "register error, please try again",
          });
        });
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
      {redirect && <Redirect to="/signin" />}
      {error && <div>{error}</div>}
    </nav>
  );
};

export default Signup;
