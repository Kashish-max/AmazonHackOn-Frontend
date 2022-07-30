import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { LogIn } from "../middlewares/logInUser";
import "./stylesheets/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = (event) => {
    event.preventDefault()
    let data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    LogIn(data)
  };

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <form onSubmit={this.handleSubmit} className="login-form-wrapper" autoComplete="off" action="/">
              <div>
              <input
                type="text"
                id="login"
                className="fadeIn second mb-3"
                name="username"
                placeholder="Username"
                required
              />
              </div>
              <input
                type="password"
                id="password"
                className="fadeIn third mb-3"
                name="password"
                placeholder="Password"
                required
              /><div className="submit-btn">
              <input type="submit" className="fadeIn fourth" value="Log In" />
              </div>
            </form>

            <div id="formFooter">
              <a className="underlineHover" href="/">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Login;
