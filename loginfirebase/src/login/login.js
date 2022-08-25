import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  //login Form
  const navigate = useNavigate();

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState("jay");
  // const [pass, setUserPass] = useState("jay@123");
  const user = "alvish";
  const pass = "alvish@123";

  const loginHandler = () => {
    if (user === userName && pass === password) {
      navigate("/dashboard");
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("username", user);
    } else {
      localStorage.clear();
    }
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("loggedIn", true);
        navigate("/dashboard");
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-inner">
      <div className="login-form">
        <h3>Login here</h3>
        <label>UserName</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginHandler} className="submit">
          Submit
        </button>
        OR
        <button className="google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
