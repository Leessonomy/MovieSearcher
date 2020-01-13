import React from "react";
import {
  Genre,
  GenreWrapper,
  GenreList,
  GenresFormsList
} from "../Genre/style";
import { connect } from "react-redux";
import {
  requestSearchingMoviesByGenre,
  addGenreSucces,
  deleteGenreSucces,
} from "../../redux/reducers/MoviesReducer";
import { withRouter } from "react-router-dom";

interface GenresProps {
  genresId: string[];
  genres: [];
  genreList: string;
  history: any,
  location: any,
  addGenreSucces: (selected: string) => boolean;
  deleteGenreSucces: (selected: string) => boolean;
  requestSearchingMoviesByGenre: (selected: string) => boolean;
}

class GenreContainer extends React.Component<GenresProps> {
  handleChange = e => {
    const {
      addGenreSucces,
      deleteGenreSucces,
      requestSearchingMoviesByGenre,
      genresId
    } = this.props;

    let selected = e.target.value;

    if (e.target.checked) {
      addGenreSucces(selected);
    }
    if (!e.target.checked) {
      deleteGenreSucces(selected);
    }
    if (genresId.length > 0) {
      this.props.history.push(`/genres?=${genresId}`);
    } else if (genresId.length === 0) {
      this.props.history.push(`/`);
    }

    return requestSearchingMoviesByGenre(1, genresId);
  };

  render() {
    const { genres } = this.props;
    const genreList = genres.map((genre: any) => (
      <GenreList key={genre.name}>
        <Genre
          onChange={this.handleChange}
          value={genre.id || ""}
          checked={genre.active}
          id={genre.name}
          type="checkbox"
        />
        <GenresFormsList htmlFor={genre.name}>{genre.name}</GenresFormsList>
      </GenreList>
    ));
    return <GenreWrapper>{genreList}</GenreWrapper>;
  }
}

let mapStateToProps = state => ({
  totalPages: state.movies.totalPages,
  genresId: state.movies.genresId,
  genres: state.movies.genreList,
  page: state.movies.page,
  addGenreSucces: addGenreSucces(state),
  deleteGenreSucces: deleteGenreSucces(state),
  requestSearchingMoviesByGenre: requestSearchingMoviesByGenre(state)
});

export default withRouter(
  connect(mapStateToProps, {
    requestSearchingMoviesByGenre: requestSearchingMoviesByGenre,
    addGenreSucces: addGenreSucces,
    deleteGenreSucces: deleteGenreSucces
  })(GenreContainer)
);