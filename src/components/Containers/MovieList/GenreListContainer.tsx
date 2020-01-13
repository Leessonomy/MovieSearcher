import React from "react";
import { requestSearchingMoviesByGenre } from "../../../redux/reducers/MoviesReducer";
import MovieList from "../../MovieList/MovieList";
import Pagination from "../../Common/Pagination/Pagination";
import { MoviesWrapper, MainPageContainer } from "../../MovieList/Style";
import { connect } from "react-redux";
import PreloaderMovies from "../../Common/Preloader/PreloaderMovies";
import { withRouter } from "react-router-dom";

interface GenreListContainerProps {
  genresId: number[],
  location: object;
  totalPages: number,
  isFetching: boolean,
  history: any,
  movies: any[],
  requestSearchingMoviesByGenre: (page: number, genresId: number[]) => void;
}

interface StateType {
  currentPage: number;
}

class GenreListContainer extends React.Component<GenreListContainerProps, StateType> {
  static initialState = {
    currentPage: 1
  };
  constructor(props) {
    super(props);
    this.state = GenreListContainer.initialState;
  }

  componentDidMount() {
    window.addEventListener("keydown", this.navKeyboard);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.navKeyboard);
  }

  componentDidUpdate(prevProps) {
    if (this.props.genresId !== prevProps.genresId) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    this.setState(GenreListContainer.initialState);
  }

  handlerTransition = (type: string) => {
    let counterPage = this.state.currentPage;
    if (type === "next") {
      ++counterPage;
    } else if (type === "prev") {
      --counterPage;
    }
    this.setState({ currentPage: counterPage }, () => {
      this.props.requestSearchingMoviesByGenre(
        this.state.currentPage,
        this.props.genresId
      );
    });
    this.props.history.push(`/genres?=${this.props.genresId}/page=${this.state.currentPage}`)
  };

  navKeyboard = (e: KeyboardEvent) => {
    if (e.code == "ArrowRight") {
      if (this.state.currentPage < this.props.totalPages) {
        this.handlerTransition("next");
      }
      return false;
    }
    if (e.code == "ArrowLeft") {
      if (this.state.currentPage > 1) {
        this.handlerTransition("prev");
      }
      return false;
    }
    return false;
  };

  render() {
    const { movies } = this.props;
    let content = movies.map(movie => {
      let sortedOverview =
        movie.overview.length > 360
          ? movie.overview.slice(0, 360) + "..."
          : movie.overview;
      return (
        <MovieList
          key={movie.id}
          title={movie.title}
          id={movie.id}
          imageUrl={movie.poster_path}
          overview={sortedOverview}
          votes={movie.vote_average}
        />
      );
    });
    return (
      <MainPageContainer>
        <MoviesWrapper>{content}</MoviesWrapper>
        {!this.props.isFetching ? <PreloaderMovies /> : null}
        {this.props.totalPages > 1 ? (
          <div>
            {" "}
            <Pagination
              currentPage={this.state.currentPage}
              totalPages={this.props.totalPages}
              handlePrevClick={() => this.handlerTransition("prev")}
              handleNextClick={() => this.handlerTransition("next")}
            />
          </div>
        ) : (
          ""
        )}
      </MainPageContainer>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  totalPages: state.movies.totalPages,
  genresId: state.movies.genresId,
  isFetching: state.movies.isFetching,
  requestSearchingMoviesByGenre: requestSearchingMoviesByGenre(state)
});

export default withRouter(connect(mapStateToProps, {
  requestSearchingMoviesByGenre: requestSearchingMoviesByGenre
})(GenreListContainer));
