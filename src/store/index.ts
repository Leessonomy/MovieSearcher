import {
  requestMoviePage,
  requestSimilarMovies,
  requestGallery,
  requestMovies,
  requestSearchingMovies,
  requestSearchingMoviesByGenre,
} from "./Middleware/Middleware";
import { actions } from "./Actions/Actions";

export const addGenreSucces = actions.addGenreSucces;
export const deleteGenreSucces = actions.deleteGenreSucces;
export const clearGenres = actions.clearGenres;
export const getMoviePageSucces = actions.getMoviePageSucces;
export const getSimilarMovies = actions.getSimilarMovies;
export const getGallery = actions.getGallery;
export const getMoviesSucces = actions.getMoviesSucces;
export const getMoviesWithGenreSucces = actions.getMoviesWithGenreSucces;
export const getSearchingSucces = actions.getMoviesWithGenreSucces;
export const getSearchText = actions.getSearchText;
export const getTotalPages = actions.getTotalPages;
export const setIsFetching = actions.setIsFetching;
export const getFavorites = actions.getFavorites;
export const addFavorites = actions.addFavorites;
export const deleteFavorites = actions.deleteFavorites;

export {
  requestMoviePage,
  requestSimilarMovies,
  requestGallery,
  requestMovies,
  requestSearchingMovies,
  requestSearchingMoviesByGenre,
};
