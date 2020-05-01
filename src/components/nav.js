import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink className="li" activeClassName="is-active" to="/">
          Home
        </NavLink>
        <NavLink className="li" activeClassName="is-active" to="/top-movies">
          Top Movies
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
