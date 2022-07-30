import React from "react";
import "./stylesheets/authentication.css";
import Login from "../components/login";
import Signup from "../components/signup";
import { Route, Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../middlewares/isUserAuthenticated";

function Authentication() {
    return (
        isAuthenticated() ? <Redirect to="/" /> :
        <>
            <div className="header">
                <div className="header-btn">
                <Link to="/login" className="login-header-btn">Login</Link>
                <div className="header-btn-gap"></div>
                <Link to="/signup" className="signup-header-btn">Signup</Link>
                </div>
            </div>
            <Route component={Signup} exact path="/signup" />
            <Route component={Login} exact path="/login" />
        </>
  );
}

export default Authentication;
