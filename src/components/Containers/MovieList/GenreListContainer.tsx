import React from "react";
import {
  requestSearchingMoviesByGenre,
  addGenreSucces
} from "../../../redux/index";
import PreloaderMovies from "../../Common/Preloader/PreloaderMovies";
import { MoviesWrapper, MainPageContainer, MovieListStub } from "../../MovieList/Style";
import MovieList from "../../MovieList/MovieList";
import Pagination from "../../Common/Pagination/Pagination";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Location, History } from "history";
import Movie from "./MovieType";

interface GenreListContainerProps {
  location: Location;
  history: History;
  genresId: number[];
  totalPages: number;
  isFetching: boolean;
  movies: [];
  requestSearchingMoviesByGenre: (page: number, genresId: number[]) => void;
  addGenreSucces: (convertedId: number[]) => void;
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
    const {
      requestSearchingMoviesByGenre,
      addGenreSucces,
      location
    } = this.props;
    window.addEventListener("keydown", this.navKeyboard);

    const id = location.search.split("=")[1].split("/")[0];
    const page = location.search.split("=")[2];
    const convertedId = id.split(",").map(Number);
    const convertedPage = isNaN(Number(page)) ? 1 : Number(page);

    this.setState({ currentPage: convertedPage }, () => {
      requestSearchingMoviesByGenre(convertedPage, convertedId);
    });

    if (this.props.genresId.length !== convertedId.length) {
      addGenreSucces(convertedId);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.navKeyboard);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
    if (this.props.location.search !== prevProps.location.search) {
      if (this.props.genresId !== prevProps.genresId) {
        this.onRouteChanged();
      }
    }
  }

  onRouteChanged() {
    this.setState(GenreListContainer.initialState);
  }

  handlerTransition = (type: string) => {
    const { 
      requestSearchingMoviesByGenre, 
      history, 
      genresId 
    } = this.props;
    let counterPage = this.state.currentPage;

    if (type === "next") {
      ++counterPage;
    } else if (type === "prev") {
      --counterPage;
    }

    this.setState({ currentPage: counterPage }, () => {
      requestSearchingMoviesByGenre(this.state.currentPage, genresId);
    });
    history.push(`/genres?=${genresId}/page=${counterPage}`);
  };

  navKeyboard = (e: KeyboardEvent) => {
    const { totalPages } = this.props;
    const { currentPage } = this.state;
    if (e.code == "ArrowRight") {
      if (currentPage < totalPages) {
        this.handlerTransition("next");
      }
    }
    if (e.code == "ArrowLeft") {
      if (currentPage > 1) {
        this.handlerTransition("prev");
      }
    }
    return false;
  };
  render() {
    const { movies, isFetching, totalPages  } = this.props;
    const { currentPage } = this.state;
    const content = movies.map((movie: Movie) => {
      const sortedOverview =
        movie.overview.length > 360
          ? movie.overview.slice(0, 360) + "..."
          : movie.overview;
      const sortedTitle = 
        movie.title.length > 34
          ? movie.title.slice(0, 34) + "..."
          : movie.title;
      return (
        <MovieList
          key={movie.id}
          title={sortedTitle}
          id={movie.id}
          imageUrl={movie.poster_path}
          overview={sortedOverview}
          votes={movie.vote_average}
        />
      );
    });
    return (
      <>
      {!movies.length ? <MovieListStub>No result. Please try another search request.</MovieListStub> : (
      <MainPageContainer>
        <MoviesWrapper>{content}</MoviesWrapper>
        {!isFetching ? <PreloaderMovies /> : null}
        {totalPages > 1 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrevClick={() => this.handlerTransition("prev")}
            handleNextClick={() => this.handlerTransition("next")}
          />
        ) : (
          null
        )}
      </MainPageContainer>
      )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  totalPages: state.movies.totalPages,
  genresId: state.movies.genresId,
  isFetching: state.movies.isFetching,
  addGenreSucces: addGenreSucces(state),
  requestSearchingMoviesByGenre: requestSearchingMoviesByGenre(state)
});

export default withRouter(
  connect(mapStateToProps, {
    requestSearchingMoviesByGenre: requestSearchingMoviesByGenre,
    addGenreSucces: addGenreSucces
  })(GenreListContainer)
);
