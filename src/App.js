import React from "react";

import AppHelmet from "./Helmets/AppHelmet";

import AppRouter from "./Router/AppRouter";
import Routes from "./Router/Routes";

import NavBar from "./Components/Navigation/NavBar";

const App = () => (
  <AppRouter>
    <AppHelmet />
    <NavBar />
    <Routes />
  </AppRouter>
);

export default App;
