import React from "react";
import { connect } from "react-redux";
import { getFavorites } from "../../../redux/index";
import { IFavoriteListContainerProps } from "./Types";
import {
  MoviesFavoriteWrapper,
  MainPageContainer,
} from "../../MovieList/Style";
import MovieList from "../../MovieList/MovieList";

class FavoriteListContainer extends React.Component<IFavoriteListContainerProps> {
  componentDidMount() {
    const { getFavorites } = this.props;
    getFavorites();
  }

  render() {
    const { favoriteMovies } = this.props;
    const content = favoriteMovies.map((movie) => {
      return (
        <MovieList
          key={movie.id}
          title={movie.title}
          id={movie.id}
          imageURL={movie.imageURL}
          overview={movie.overview}
          raiting={movie.raiting}
        />
      );
    });
    return (
      <MainPageContainer>
        <MoviesFavoriteWrapper>{content}</MoviesFavoriteWrapper>
      </MainPageContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteMovies: state.movies.favoriteMovies,
  getFavorites: getFavorites(),
});

export default connect(mapStateToProps, { getFavorites })(
  FavoriteListContainer
);
