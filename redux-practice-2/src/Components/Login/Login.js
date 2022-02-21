import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { login } from "../../features/actions/action";

export const Login = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    dispatch(login({ email: email, password: password }));
  };
  return (
    <div className="loginCard">
      <form action="" className="loginForm" onSubmit={submitHandler}>
        <h1>Login</h1>
        <input
          className="input"
          type="email"
          placeholder="Email"
          ref={emailInput}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          ref={passwordInput}
        />
        <input className="loginBtn" type="submit" value="Login" />
      </form>
    </div>
  );
};
