import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./signup.css";

class Signup extends Component {
  state = {
    username: "username",
    email: "email",
    password: "password",
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            {/* <div className="fadeIn first mb-3">
              <h1>Signup</h1>
            </div> */}
            <form action="/login" onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="login"
                className="fadeIn second mb-3 username-input-text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <input
                type="email"
                id="login"
                className="fadeIn second mb-3"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third mb-3"
                name="password"
                placeholder="password"
                onChange={this.handleChange}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third mb-3"
                name="c_password"
                placeholder="Confirm password"
              />
              <div className="submit-btn">
              <input type="submit" className="fadeIn fourth" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Signup;
