import React from "react";
import MovieList from "../../MovieList/MovieList";
import { MoviesWrapper, MainPageContainer } from "../../MovieList/Style";
import { connect } from "react-redux";
import { requestMovies } from "../../../redux/reducers/MoviesReducer";
import Pagination from "../../Common/Pagination/Pagination";
import PreloaderMovies from "../../Common/Preloader/PreloaderMovies";
import { withRouter } from "react-router-dom";

interface MoviesContainerProps {
  location: object;
  totalPages: number;
  isFetching: boolean;
  movies: any[];
  history: any;
  requestMovies: (page: number) => void;
}

interface StateType {
  currentPage: number;
}

class MoviesListContainer extends React.Component<
  MoviesContainerProps,
  StateType
> {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    const { requestMovies } = this.props;
    requestMovies(this.state.currentPage);
    window.addEventListener("keydown", this.navKeyboard);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.navKeyboard);
  }

  handlerTransition = (type: string) => {
    let counterPage = this.state.currentPage;
    if (type === "next") {
      ++counterPage;
    } else if (type === "prev") {
      --counterPage;
    }
    this.setState({ currentPage: counterPage }, () => {
      this.props.requestMovies(this.state.currentPage);
    });
    this.props.history.push(`/page=${this.state.currentPage}`);
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
  totalPages: state.movies.totalPages,
  isFetching: state.movies.isFetching,
  requestMovies: requestMovies(state)
});

export default withRouter(
  connect(mapStateToProps, { requestMovies: requestMovies })(
    MoviesListContainer
  )
);
