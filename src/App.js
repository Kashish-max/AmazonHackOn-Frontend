import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      <Route component={Signup} path="/signup" />
      <Route component={Login} path="/login" />
    </BrowserRouter>
  );
}

export default App;
