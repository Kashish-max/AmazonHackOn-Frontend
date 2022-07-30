import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const { username, password } = event.target
    const accessTokenURL = "http://localhost:8000/auth/token/"
    const response = await axios.post(accessTokenURL, {
      username: username.value,
      password: password.value
    })
    if(response) {
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh)
      
      // window.location.replace('http://localhost:3000/token');
      return false
    }
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
