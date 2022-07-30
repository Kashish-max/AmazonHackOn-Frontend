import React from "react";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="header-btn">
        <Link to="/login" className="login-header-btn">Login</Link>
        <div className="header-btn-gap"></div>
        <Link to="/signup" className="signup-header-btn">Signup</Link>
        </div>
      </div>
      <Route component={Signup} path="/signup" />
      <Route component={Login} exact path={["/", "/login"]} />
    </BrowserRouter>
  );
}

export default App;
