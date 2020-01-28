import React from "react";
import MovieList from "../../MovieList/MovieList";
import { MoviesWrapper, MoviesFavoriteWrapper, MainPageContainer } from "../../MovieList/Style";
import { getFavorites } from "../../../redux/index";
import { connect } from "react-redux";

interface FavoriteListContainerProps {
  favoriteMovies: [];
  getFavorites: () => void;
}

class FavoriteListContainer extends React.Component<FavoriteListContainerProps> {
  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    const { favoriteMovies } = this.props;
    const content = favoriteMovies.map((movie: any, index: any) => {
      return (
        <MovieList
          key={movie.id}
          title={movie.title}
          id={movie.id}
          imageUrl={movie.imageURL}
          overview={movie.overwiev}
          votes={movie.raiting}
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

const mapStateToProps = state => ({
  favoriteMovies: state.movies.favoriteMovies,
  getFavorites: getFavorites()
});

export default connect(mapStateToProps, { getFavorites })(
  FavoriteListContainer
);
