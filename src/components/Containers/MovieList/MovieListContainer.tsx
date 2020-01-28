import React from "react";
import MovieList from "../../MovieList/MovieList";
import { MoviesWrapper, MainPageContainer } from "../../MovieList/Style";
import { connect } from "react-redux";
import { requestMovies } from "../../../redux/index";
import Pagination from "../../Common/Pagination/Pagination";
import PreloaderMovies from "../../Common/Preloader/PreloaderMovies";
import { withRouter } from "react-router-dom";
import { Location, History } from "history";

interface MoviesContainerProps {
  location: Location;
  history: History;
  totalPages: number;
  isFetching: boolean;
  movies: any[];
  requestMovies: (page: number) => void;
}

interface StateType {
  currentPage: number;
}

class MoviesListContainer extends React.Component<MoviesContainerProps, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }
  componentDidMount() {
    const { requestMovies, location } = this.props;
    window.addEventListener("keydown", this.navKeyboard);

    const page = location.pathname.split("=")[1];
    const convertedPage = isNaN(Number(page)) ? 1 : Number(page);

    this.setState({ currentPage: convertedPage }, () => {
      requestMovies(convertedPage);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.navKeyboard);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  handlerTransition = (type: string) => {
    const { requestMovies, history } = this.props;
    let counterPage = this.state.currentPage;

    if (type === "next") {
      ++counterPage;
    } else if (type === "prev") {
      --counterPage;
    }

    this.setState({ currentPage: counterPage }, () => {
      requestMovies(this.state.currentPage);
    });
    history.push(`/best/page=${counterPage}`);
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
    let content = movies.map((movie: any) => {
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
  totalPages: state.movies.totalPages,
  isFetching: state.movies.isFetching,
  requestMovies: requestMovies(state)
});

export default withRouter(
  connect(mapStateToProps, { requestMovies: requestMovies })(
    MoviesListContainer
  )
);
