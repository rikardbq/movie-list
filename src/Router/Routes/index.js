import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </>
);

export default Routes;
