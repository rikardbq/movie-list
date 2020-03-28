import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

const NavBar = props => (
  <Header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Header>
);

export default NavBar;
