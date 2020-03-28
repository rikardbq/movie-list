import React from "react";

import RouteHelmet from "../../Helmets/RouteHelmet";

import { Heading, Paragraph } from "../../Components/Typography";

const Home = () => (
  <>
    <RouteHelmet
      title="Home"
      description="This page is about home"
      themeColor="#ff0000"
    />
    <Heading content="Home" />
    <Paragraph content="Some text about home here" />
  </>
);

export default Home;
