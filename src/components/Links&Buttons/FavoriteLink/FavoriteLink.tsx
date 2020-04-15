import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { FavoriteWrapper, CounterFavoriteList } from "./Style";
import { connect } from "react-redux";
import { getFavorites } from "../../../redux/index";

interface FavoriteLinkProps {
  favoriteMovies: {}[];
  getFavorites: () => void;
}

const FavoriteLink = ({ favoriteMovies, getFavorites }: FavoriteLinkProps) => {
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
  getFavorites: getFavorites()
});

export default withRouter(
  connect(mapStateToProps, { getFavorites: getFavorites })(FavoriteLink)
);
