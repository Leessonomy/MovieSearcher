import React from "react";
import { MoviesWrapper, MainPageContainer, MovieListStub } from "../../MovieList/Style";
import { connect } from "react-redux";
import Pagination from "../../Common/Pagination/Pagination";
import MovieList from "../../MovieList/MovieList";
import { requestSearchingMovies, getSearchText } from "../../../redux/index";
import { withRouter } from "react-router-dom";
import PreloaderMovies from "../../Common/Preloader/PreloaderMovies";
import { Location, History } from "history";

interface SearchListContainerProps {
  history: History;
  location: Location;
  text: string;
  totalPages: number;
  isFetching: boolean;
  movies: any[];
  requestSearchingMovies: (currentPage: number, text: string) => void;
  getSearchText: (query: string) => void;
}

interface StateType {
  currentPage: number;
}

class SearchListContainer extends React.Component<SearchListContainerProps, StateType> {
  static initialState: StateType = {
    currentPage: 1
  };
  constructor(props) {
    super(props);
    this.state = SearchListContainer.initialState;
  }

  componentDidMount() {
    const { 
      requestSearchingMovies, 
      getSearchText, 
      location 
    } = this.props;
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
      if (this.props.location.search.length < prevProps.location.search.length) {
        this.onRouteChanged();
      }
    }
  }

  onRouteChanged() {
    this.setState(SearchListContainer.initialState);
  }

  handlerTransition = (type: string) => {
    const { 
      requestSearchingMovies, 
      history, 
      text 
    } = this.props;
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
    if (e.code == "ArrowRight") {
      if (this.state.currentPage < this.props.totalPages) {
        this.handlerTransition("next");
      }
    }
    if (e.code == "ArrowLeft") {
      if (this.state.currentPage > 1) {
        this.handlerTransition("prev");
      }
    }
    return false;
  };

  render() {
    const { movies } = this.props;
    const content = movies.map((movie: any) => {
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
      {!this.props.movies.length ? <MovieListStub>No result. Please try another search request.</MovieListStub> : (
      <MainPageContainer>
        <MoviesWrapper>{content}</MoviesWrapper>
        {!this.props.isFetching ? <PreloaderMovies /> : null}
        {this.props.totalPages > 1 ? (
          <Pagination
            currentPage={this.state.currentPage}
            totalPages={this.props.totalPages}
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

const mapStateToProps = state => ({
  movies: state.movies.movies,
  text: state.movies.text,
  totalPages: state.movies.totalPages,
  isFetching: state.movies.isFetching,
  getSearchText: getSearchText(state),
  requestSearchingMovies: requestSearchingMovies(state)
});

export default withRouter(
  connect(mapStateToProps, {
    requestSearchingMovies: requestSearchingMovies,
    getSearchText: getSearchText
  })(SearchListContainer)
);
