import React from "react";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites, getFavorites } from "../../redux/index";
import FavoriteBtn from "../Links&Buttons/FavoriteBtn/FavoriteBtn";

interface FavoriteButtonProps {
  id: string;
  imageURL: string;
  raiting: number;
  title: string;
  overwiev: string;
  favoriteMovies: [];
  addFavorites: (movieListPages: object) => void;
  deleteFavorites: (id: string) => void;
}

interface Favorite {
  id: string;
  imageURL: string;
  raiting: number;
  title: string;
  overwiev: string;
}

class FavoriteButtonContainer extends React.Component<FavoriteButtonProps> {
  componentDidUpdate(prevProps) {
    if (this.props.favoriteMovies !== prevProps.favoriteMovies) {
      localStorage.setItem(
        "favoriteList",
        JSON.stringify(this.props.favoriteMovies)
      );
    }
  }

  checked() {
    const { favoriteMovies } = this.props;
    if (this.props.favoriteMovies.length > 0) {
      return favoriteMovies.find((favorite: Favorite) => favorite.id === this.props.id);
    }
    return false;
  }

  handlerClick = () => {
    const { addFavorites, deleteFavorites } = this.props;
    const sortedOverview =
      this.props.overwiev.length > 360
        ? this.props.overwiev.slice(0, 360) + "..."
        : this.props.overwiev;
    const sortedTitle =
      this.props.title.length > 34
        ? this.props.title.slice(0, 34) + "..."
        : this.props.title;
    const movieListPages = {
      id: this.props.id,
      imageURL: this.props.imageURL,
      raiting: this.props.raiting,
      title: sortedTitle,
      overwiev: sortedOverview,
    };
    if (!this.checked()) {
      addFavorites(movieListPages);
    } else {
      deleteFavorites(this.props.id);
    }
  };

  render() {
    const toggleText = this.checked();
    return (
      <FavoriteBtn toggleText={toggleText} handlerClick={this.handlerClick} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  favoriteMovies: state.movies.favoriteMovies,
  getFavorites: getFavorites(),
  addFavorites: addFavorites(state),
  deleteFavorites: deleteFavorites(state),
});

export default connect(mapStateToProps, {
  getFavorites: getFavorites,
  addFavorites: addFavorites,
  deleteFavorites: deleteFavorites,
})(FavoriteButtonContainer);
