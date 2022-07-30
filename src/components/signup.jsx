import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./stylesheets/signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordMatching: true,
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const { username, email, password, c_password } = event.target
    if (password.value != c_password.value) {
      this.setState({ passwordMatching: false })
      setTimeout(() => {
        this.setState({ passwordMatching: true })
      }, 2000)
      return false;
    }
    const registerURL = "http://localhost:8000/auth/register/"
    const response = await axios.post(registerURL, {
      username: username.value,
      email: email.value,
      password: password.value
    })
    if(response) {
      console.log(response)
      window.location.replace('/login');
    }
  };

  checkPassword = (event) => {
    if(document.querySelector('#password-textfield').value !== event.target.value)
    {
      document.querySelector('#confirm-password-textfield').classList.add("confirm-password-wrong-entry");
    }

    else
    {
      document.querySelector('#confirm-password-textfield').classList.remove("confirm-password-wrong-entry");
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            { !this.state.passwordMatching &&
              <div className="alert alert-danger password-confirmation">
              The password confirmation does not match!
              </div>
            }
            <form onSubmit={this.handleSubmit} action="/login" className="signup-form-wrapper">
              <input
                type="text"
                className="fadeIn second mb-3"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                required
              />
              <input
                type="email"
                className="fadeIn second mb-3"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
              <input
                type="password"
                className="fadeIn third mb-3"
                id="password-textfield"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
              <input
                type="password"
                className="fadeIn third mb-3"
                id="confirm-password-textfield"
                name="c_password"
                placeholder="Confirm Password"
                onKeyUp={this.checkPassword}
                required
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
