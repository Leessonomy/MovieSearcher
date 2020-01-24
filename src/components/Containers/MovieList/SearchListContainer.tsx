import React from "react";
import { MoviesWrapper, MainPageContainer } from "../../MovieList/Style";
import { connect } from "react-redux";
import Pagination from "../../Common/Pagination/Pagination";
import MovieList from "../../MovieList/MovieList";
import { requestSearchingMovies } from "../../../redux/index";
import { withRouter } from "react-router-dom";
import PreloaderMovies from "../../Common/Preloader/PreloaderMovies";
import { Location, History } from "history";

interface SearchListContainerProps {
  history: History;
  location: any;
  text: string;
  totalPages: number;
  isFetching: boolean;
  movies: any[];
  requestSearchingMovies: (currentPage: number, text: string) => void;
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
    console.log(this.props.location);
    window.addEventListener("keydown", this.navKeyboard);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.navKeyboard);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (this.props.location.search.length < prevProps.location.search.length) {
        this.onRouteChanged();
      }
    }
    if (this.props.location!== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  onRouteChanged() {
    this.setState(SearchListContainer.initialState);
  }

  handlerTransition = (type: string) => {
    const {requestSearchingMovies, history, text} = this.props;
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
    const content = movies.map((movie: any, index: any) => {
      const sortedOverview =
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
          <Pagination
            currentPage={this.state.currentPage}
            totalPages={this.props.totalPages}
            handlePrevClick={() => this.handlerTransition("prev")}
            handleNextClick={() => this.handlerTransition("next")}
          />
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
