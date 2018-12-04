import React, { Component } from "react";
import { LoginContext } from "../contexts/loginContext";

class Navbar extends Component {
  render() {
    const loginContextUser = this.context;
    return (
      <nav className="header" key="nav">
        <p>{`Hello ${loginContextUser.username}`}</p>
      </nav>
    );
  }
}
Navbar.contextType = LoginContext;

export default Navbar;
