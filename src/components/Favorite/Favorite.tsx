import React from "react";
import { Link, withRouter} from 'react-router-dom';

const Favorite = () => (
    <Link to={'/favorite'}>
    Go to Favorite
    </Link>
)

export default withRouter(Favorite);