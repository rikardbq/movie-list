import React from "react";
import { HashRouter } from "react-router-dom";

const AppRouter = props => (
  <HashRouter baseName="/">{props.children}</HashRouter>
);

export default AppRouter;
