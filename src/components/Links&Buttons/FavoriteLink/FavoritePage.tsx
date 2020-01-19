import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { FavoriteWrapper, CounterFavoriteList } from "./Style";
import { connect } from "react-redux";
import { getFavorites } from "../../../redux/reducers/MoviesReducer";

const FavoritePage = ({ favoriteMovies, getFavorites }) => {
  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <FavoriteWrapper>
      <Link to={"/favorite"}>Favorite List</Link>
      <CounterFavoriteList>{`(${favoriteMovies.length})`}</CounterFavoriteList>
    </FavoriteWrapper>
  );
};

const mapStateToProps = state => ({
  favoriteMovies: state.movies.favoriteMovies,
  getFavorites: getFavorites(state)
});

export default withRouter(
  connect(mapStateToProps, { getFavorites: getFavorites })(FavoritePage)
);
