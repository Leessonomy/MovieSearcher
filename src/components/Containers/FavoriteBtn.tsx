import React from 'react';
import { connect } from 'react-redux';
import {
    addFavorites,
    deleteFavorites,
    getFavorites
  } from "../../redux/reducers/MoviesReducer";


interface FavoriteButtonProps {
  id: number | string, 
  imageURL: string,
  raiting: number | string,
  title: string,
  overwiev: string,
  favoriteMovies: [],
  addFavorites: (movieListPages: object) => void;
  deleteFavorites: (id: number | string) => void;
}

class FavoriteButton extends React.Component<FavoriteButtonProps> {

  componentDidUpdate(prevProps) {
    if (this.props.favoriteMovies !== prevProps.favoriteMovies) {
     localStorage.setItem('favoriteList', JSON.stringify(this.props.favoriteMovies));
    }
  }

  checked() {
    if (this.props.favoriteMovies.length > 0) {
      return this.props.favoriteMovies.find((ids: any) => ids.id == this.props.id)
    }
    return false;
  }

  handlerClick = () => {
    const sortedOverview =
    this.props.overwiev.length > 360
    ? this.props.overwiev.slice(0, 360) + "..."
    : this.props.overwiev;

  const movieListPages = {
    id: this.props.id, 
    imageURL: this.props.imageURL,
    raiting: this.props.raiting,
    title: this.props.title,
    overwiev: sortedOverview
  }
    if(!this.checked()) {
      this.props.addFavorites(movieListPages)
    } else {
      this.props.deleteFavorites(this.props.id)
    }
    
}

  render() {
    const toggleText = this.checked();
    return(
      <button onClick={this.handlerClick}>{toggleText ? 'Delete Favorite List': 'Add Favorite List'}</button>
        )
      }
}

const mapStateToProps = state => ({
    favoriteMovies: state.movies.favoriteMovies,
    getFavorites: getFavorites(state),
    addFavorites: addFavorites(state),
    deleteFavorites: deleteFavorites(state)
  });
  

export default connect(mapStateToProps, {getFavorites: getFavorites, addFavorites: addFavorites, deleteFavorites: deleteFavorites})(FavoriteButton);
