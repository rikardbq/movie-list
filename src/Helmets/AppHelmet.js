import React from "react";
import { Helmet } from "react-helmet";

const AppHelmet = () => (
  <Helmet titleTemplate="%s - Sci-fi movies" defaultTitle="Sci-fi movies">
    <meta name="description" content="Sci-fi movies you should watch" />
    <meta name="theme-color" content="#000000" />
  </Helmet>
);

export default AppHelmet;
