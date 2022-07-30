import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = async (event) => {
    // event.preventDefault()
    // const { email, password } = event.target
    // const loginURL = "http://localhost:8000/auth/login/"
    // const response = await axios.post(registerURL, {
    //   username: username.value,
    //   email: email.value,
    //   password: password.value
    // })
    // if(response) {
    //   console.log(response)
    //   window.location.replace('http://localhost:3000/login');
    // }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <form onSubmit={this.handleSubmit} className="login-form-wrapper" autocomplete="off" action="/">
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
