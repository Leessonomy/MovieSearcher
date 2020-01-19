import React from "react";
import { Link, withRouter } from "react-router-dom";
import { HomeWrapper } from "./Style";

const HomePage = () => (
  <HomeWrapper>
    <Link to={"/"}>Home Page</Link>
  </HomeWrapper>
);

export default withRouter(HomePage);
