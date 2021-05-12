import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  MoviesWrapper,
  MainPageContainer,
  MovieListStub,
} from "../../MovieList/Style";
import { requestSearchingMovies, getSearchText } from "../../../redux/index";
import { ISearchListContainerProps, IState } from "./Types";
import PreloaderMovies from "../../Common/Preloader/PreloaderMovies";
import Pagination from "../../Common/Pagination/Pagination";
import MovieList from "../../MovieList/MovieList";

class SearchListContainer extends React.Component<
  ISearchListContainerProps,
  IState
> {
  static initialState = {
    currentPage: 1,
  };

  constructor(props) {
    super(props);
    this.state = SearchListContainer.initialState;
  }

  componentDidMount() {
    const { requestSearchingMovies, getSearchText, location } = this.props;
    window.addEventListener("keydown", this.navKeyboard);

    const query = location.search.split("=")[1].split("/")[0];
    const page = location.search.split("=")[2];
    const convertedPage = isNaN(Number(page)) ? 1 : Number(page);

    this.setState({ currentPage: convertedPage }, () => {
      requestSearchingMovies(convertedPage, query);
    });
    getSearchText(query);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.navKeyboard);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      if (
        this.props.location.search.length < prevProps.location.search.length
      ) {
        this.onRouteChanged();
      }
    }
  }

  onRouteChanged() {
    this.setState(SearchListContainer.initialState);
  }

  handlerTransition = (type: string) => {
    const { requestSearchingMovies, history, text } = this.props;
    let counterPage = this.state.currentPage;

    if (type === "next") {
      ++counterPage;
    } else if (type === "prev") {
      --counterPage;
    }

    this.setState({ currentPage: counterPage }, () => {
      requestSearchingMovies(this.state.currentPage, text);
    });
    history.push(`/search?q=${text}/page=${counterPage}`);
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
    const { movies, isFetching, totalPages } = this.props;
    const { currentPage } = this.state;
    const content = movies.map((movie) => {
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
          imageURL={movie.poster_path}
          overview={sortedOverview}
          raiting={movie.vote_average}
        />
      );
    });

    return (
      <>
        {!movies.length ? (
          <MovieListStub>
            No result. Please try another search request.
          </MovieListStub>
        ) : (
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
            ) : null}
          </MainPageContainer>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  text: state.movies.text,
  totalPages: state.movies.totalPages,
  isFetching: state.movies.isFetching,
  getSearchText: getSearchText(state),
  requestSearchingMovies: requestSearchingMovies(state),
});

export default withRouter(
  connect(mapStateToProps, {
    requestSearchingMovies: requestSearchingMovies,
    getSearchText: getSearchText,
  })(SearchListContainer)
);
