import React from "react";
import {
  Genre,
  GenreWrapper,
  GenreList,
  GenresFormsList,
  GenreName,
} from "../Genre/Style";
import { connect } from "react-redux";
import {
  requestSearchingMoviesByGenre,
  addGenreSucces,
  deleteGenreSucces,
  clearGenres,
} from "../../redux/index";
import { withRouter } from "react-router-dom";
import { RouteProps } from "react-router";
import { Location, History } from "history";

interface GenresProps {
  genresId: string;
  genres: [];
  genreList: string;
  history: History;
  location: Location;
  addGenreSucces: (selected: string) => void;
  deleteGenreSucces: (selected: string) => void;
  requestSearchingMoviesByGenre: (page: number, genresId: string) => void;
}

interface Genre {
  id: number;
  name: string;
  active: boolean;
}

class GenreContainer extends React.Component<GenresProps & RouteProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      addGenreSucces,
      deleteGenreSucces,
      requestSearchingMoviesByGenre,
      genresId,
      history,
    } = this.props;

    const page = 1;
    const selected = e.target.value;

    if (e.target.checked) {
      addGenreSucces(selected);
    } else if (!e.target.checked) {
      deleteGenreSucces(selected);
    }

    if (genresId.length > 0) {
      history.push(`/genres?=${genresId}`);
    } else if (genresId.length === 0) {
      history.push(`/best`);
    }

    return requestSearchingMoviesByGenre(page, genresId);
  };

  render() {
    const { genres } = this.props;
    const genreList = genres.map((genre: Genre) => (
      <GenreList key={genre.name}>
        <Genre
          onChange={this.handleChange}
          value={genre.id || ""}
          checked={genre.active}
          id={genre.name}
          type="checkbox"
        />
        <GenresFormsList htmlFor={genre.name}>
          <GenreName>{genre.name}</GenreName>
        </GenresFormsList>
      </GenreList>
    ));
    return <GenreWrapper>{genreList}</GenreWrapper>;
  }
}

let mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  genresId: state.movies.genresId,
  genres: state.movies.genreList,
  addGenreSucces: addGenreSucces(state),
  deleteGenreSucces: deleteGenreSucces(state),
  requestSearchingMoviesByGenre: requestSearchingMoviesByGenre(state),
});

export default withRouter(
  connect(mapStateToProps, {
    requestSearchingMoviesByGenre: requestSearchingMoviesByGenre,
    addGenreSucces: addGenreSucces,
    deleteGenreSucces: deleteGenreSucces,
    clearGenres: clearGenres,
  })(GenreContainer)
);
