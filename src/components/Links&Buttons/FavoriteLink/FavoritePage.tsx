import React from "react";
import { Link, withRouter} from 'react-router-dom';
import {FavoriteWrapper} from './Style'

const FavoritePage = () => (
    <FavoriteWrapper>
    <Link to={'/favorite'}>
    Favorite List
    </Link>
    </FavoriteWrapper>
)

export default withRouter(FavoritePage);