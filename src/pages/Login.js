import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Keys/firebase";
import { db } from "../Keys/firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    // firebase login func
  };

  const register = (event) => {
    event.preventDefault();
    // firebase register func
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created new user
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign-in
          </button>
          <p>
            By continuing, you agree to Sven's FAKE Amazon's Conditions of Use
            and Privacy Notice.
          </p>
          <p className="login__newText">New to Amazon?</p>
          <button className="login__registerButton" onClick={register}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
