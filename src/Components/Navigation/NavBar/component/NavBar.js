import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../Layout/Header";
import List from "../../../Layout/List";
import ListItem from "../../../Layout/ListItem";

import "./styles/NavBar.css";

const NavBar = props => (
  <Header>
    <List>
      <ListItem>
        <Link to="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link to="/about">About</Link>
      </ListItem>
    </List>
  </Header>
);

export default NavBar;
