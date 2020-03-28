import React from "react";

import RouteHelmet from "../../Helmets/RouteHelmet";

import { Heading, Paragraph } from "../../Components/Typography";

const About = () => (
  <>
    <RouteHelmet
      title="About"
      description="This page is about about"
      themeColor="#0000ff"
    />
    <Heading content="About" />
    <Paragraph content="Some text about about here" />
  </>
);

export default About;
