import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./login.css";

class Login extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            {/* <div className="fadeIn first mb-3">
              <h1>Login</h1>
            </div> */}
            <form onSubmit={this.handleSubmit} className="login-form-wrapper" autocomplete="off">
              <div>
              <input
                type="text"
                id="login"
                className="fadeIn second mb-3"
                name="username"
                placeholder="Username"
              />
              </div>
              <input
                type="password"
                id="password"
                className="fadeIn third mb-3"
                name="password"
                placeholder="Password"
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
