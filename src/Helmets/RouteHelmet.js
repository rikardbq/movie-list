import React from "react";
import { Helmet } from "react-helmet";

const RouteHelmet = ({ title, description, themeColor }) =>
  title ||
  description ||
  (themeColor && (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {themeColor && <meta name="theme-color" content={themeColor} />}
    </Helmet>
  ));

export default RouteHelmet;
