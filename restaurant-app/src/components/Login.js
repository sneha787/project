import React, { Component } from "react";
import NavbarMenu from "./NavbarMenu";
import { Button } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }

  login() {
    console.log(this.state);
    fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          localStorage.setItem("login", JSON.stringify(resp));
          console.warn(this.props.history.push("list"));
        } else {
          alert("Please check Username and Password.");
        }
      });
    });
  }

  render() {
    return (
      <div>
        <NavbarMenu />
        <br />
        <br />
        <input
          type="text"
          name="userName"
          onChange={(event) => this.setState({ name: event.target.value })}
          placeholder="Enter Username"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          onChange={(event) => this.setState({ password: event.target.value })}
          placeholder="Enter Password"
        />
        <br />
        <br />
        <Button
          variant="primary"
          onClick={() => this.login()}
          type="submit"
          value="Login"
        >
          Login
        </Button>
      </div>
    );
  }
}

export default Login;
