import React from "react";
import MovieList from "../../MovieList/MovieList";
import { MoviesWrapper, MainPageContainer } from "../../MovieList/Style";
import PreloaderMovies from "../../Common/Preloader/PreloaderMovies";
import { getFavorites } from "../../../redux/reducers/MoviesReducer";
import { connect } from "react-redux";



class FavoriteListContainer extends React.Component {
componentDidMount() {
      this.props.getFavorites();
    }

    render() {
        console.log(this.props.favoriteMovies);
        let {favoriteMovies} = this.props;
        let content = favoriteMovies.map(movie => {
          return (
            <MovieList
              key={movie.id}
              title={movie.title}
              id={movie.id}
              imageUrl={movie.imageURL}
              overview={movie.overwiev}
              votes={movie.raiting}
            />
          )
        });
        return (
          <MainPageContainer>
            <MoviesWrapper>{content}</MoviesWrapper>
          </MainPageContainer>
        );
      }
}

const mapStateToProps = state => ({
    favoriteMovies: state.movies.favoriteMovies,
    getFavorites: getFavorites(state),
    isFetching: state.movies.isFetching,
  });

export default connect(mapStateToProps, {getFavorites})(FavoriteListContainer);