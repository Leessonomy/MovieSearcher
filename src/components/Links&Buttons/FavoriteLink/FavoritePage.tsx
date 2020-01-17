import React from "react";
import { Link, withRouter} from 'react-router-dom';

const FavoritePage = () => (
    <Link to={'/favorite'}>
    Go to Favorite
    </Link>
)

export default withRouter(FavoritePage);