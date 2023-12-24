import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let [invalidCredentials, setInvalidCredentials] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setTimeout(() => {
        navigate("/details");
      }, 2000);
    }
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    if (email.length === 0 || password.length === 0) {
      setInvalidCredentials(true);
      return;
    } else {
      setInvalidCredentials(false);
      loadData();
    }
  }

  function loadData() {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Invalid credentials") {
          setInvalidCredentials(true);
          return;
        }
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/details");
      });
  }

  return (
    <div id="form-container">
      <hr />
      <form onSubmit={handleLogin}>
        <div>
          <p style={{ color: "hsla(0, 0%, 20%, 1)" }}>Welcome back! 👋</p>
          <h1 style={{ color: "hsla(0, 0%, 20%, 1)" }}>
            Sign in to your account
          </h1>
        </div>
        <div>
          <label htmlFor="email">your email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        {invalidCredentials && (
          <p style={{ color: "red" }}>invalid email or password</p>
        )}
        <button id="login-button" type="submit" onClick={handleLogin}>
          CONTINUE
        </button>
        <p style={{ color: "#625BF7", textAlign: "center", cursor: "pointer" }}>
          Forget your password?
        </p>
      </form>
      <p style={{ marginTop: "50px", cursor: "pointer" }}>
        Don’t have an account?<span style={{ color: "#625BF7" }}>Sign up</span>
      </p>
    </div>
  );
}

export default Login;
