import React from "react";
import { Link, withRouter } from "react-router-dom";
import { HomeWrapper } from "./Style";

const HomeLink= () => (
  <HomeWrapper>
    <Link to={"/best"}>Home Page</Link>
  </HomeWrapper>
);

export default withRouter(HomeLink);
