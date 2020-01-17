import React from "react";
import { Link, withRouter } from 'react-router-dom';


const HomePage = () => (
    <Link to={'/'}>
    Revert to homepage
    </Link>
)

export default withRouter(HomePage);