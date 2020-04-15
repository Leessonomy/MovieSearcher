import React from "react";
import MoviePage from "../MoviePage/MoviePage";
import { connect } from "react-redux";
import {
  requestMoviePage,
  requestSimilarMovies,
  requestGallery,
  setIsFetching,
} from "../../redux/index";
import { withRouter } from "react-router-dom";
import PreloaderMovies from "../Common/Preloader/PreloaderMovies";

interface MoviePageContainerProps {
  movie: object;
  gallery: object[];
  isFetching: boolean;
  match: any;
  similarMovies: object[];
  requestMoviePage: (id: number) => void;
  requestSimilarMovies: (id: number) => void;
  requestGallery: (id: number) => void;
}

class MoviePageContainer extends React.Component<MoviePageContainerProps> {
  componentDidMount() {
    const {
      requestMoviePage,
      requestSimilarMovies,
      requestGallery,
      match,
    } = this.props;
    requestMoviePage(match.params.id);
    requestSimilarMovies(match.params.id);
    requestGallery(match.params.id);
  }

  render() {
    const { movie, similarMovies, gallery } = this.props;
    return [movie].map((data: any, index: number) => {
      return (
        <>
          {!this.props.isFetching ? <PreloaderMovies /> : null}
          <MoviePage
            key={index}
            imageURL={data.poster_path}
            title={data.original_title}
            tagline={data.tagline}
            raiting={data.vote_average}
            release={data.release_date}
            votes={data.vote_count}
            popularity={data.popularity}
            overview={data.overview}
            similarMovies={similarMovies}
            gallery={gallery}
            budget={data.budget}
            runtime={data.runtime}
            status={data.status}
            genres={data.genres}
            productionCompanies={data.production_companies}
            spokenLanguages={data.spoken_languages}
          />
        </>
      );
    });
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  gallery: state.movies.gallery,
  isFetching: state.movies.isFetching,
  similarMovies: state.movies.similarMovies.slice(0, 5),
  requestSimilarMovies: requestSimilarMovies(state),
  requestGallery: requestGallery(state),
  requestMoviePage: requestMoviePage(state),
});

export default withRouter(
  connect(mapStateToProps, {
    setIsFetching: setIsFetching,
    requestMoviePage: requestMoviePage,
    requestSimilarMovies: requestSimilarMovies,
    requestGallery: requestGallery,
  })(MoviePageContainer)
);
