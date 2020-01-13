import React from "react";
import { Link, withRouter} from 'react-router-dom';


const Home = () => (
    <Link to={'/'}>
    Revert to homepage
    </Link>
)

export default withRouter(Home);