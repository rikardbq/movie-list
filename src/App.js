import React from "react";

import AppHelmet from "./Helmets/AppHelmet";
import AppRouter from "./Router/AppRouter";
import Routes from "./Router/Routes";

const App = () => (
  <AppRouter>
    <AppHelmet />
    <Routes />
  </AppRouter>
);

export default App;
