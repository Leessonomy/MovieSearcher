import React from "react";
import { MoviesWrapper, MainPageContainer } from "../../MovieList/Style";
import { connect } from "react-redux";
import Pagination from "../../Common/Pagination/Pagination";
import MovieList from "../../MovieList/MovieList";
import { requestSearchingMovies } from "../../../redux/reducers/MoviesReducer";
import { withRouter } from "react-router-dom";
import PreloaderMovies from "../../Common/Preloader/PreloaderMovies";

interface SearchListContainerProps {
  location: object;
  text: string,
  totalPages: number,
  isFetching: boolean,
  movies: any[],
  requestSearchingMovies: (currentPage: number, text: string) => void
}

interface StateType {
  currentPage: number
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
    console.log(this.props.location);
    window.addEventListener("keydown", this.navKeyboard);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.navKeyboard);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    this.setState(SearchListContainer.initialState);
  }

  handlerTransition = (type: string) => {
    let counterPage = this.state.currentPage;
    if (type === "next") {
      ++counterPage;
    } else if (type === "prev") {
      --counterPage;
    }
    this.setState({ currentPage: counterPage }, () => {
      this.props.requestSearchingMovies(this.state.currentPage, this.props.text);
    });
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
    console.log(movies);
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
  text: state.movies.text,
  totalPages: state.movies.totalPages,
  isFetching: state.movies.isFetching,
  requestSearchingMovies: requestSearchingMovies(state)
});

export default withRouter(
  connect(mapStateToProps, { requestSearchingMovies: requestSearchingMovies })(
    SearchListContainer
  )
);
