import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./login/login";
import Dashboard from "./dashboard/dashboard";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedIn");
    if (loggedUser) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
