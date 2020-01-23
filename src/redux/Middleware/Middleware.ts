import { movieAPI } from "../../api/Api";
import * as fromActions from '../Actions/Actions'

export const requestMoviePage = (id?) => {
    return async dispatch => {
      dispatch(fromActions.actions.setIsFetching(false));
      let dataMoviePage = await movieAPI.getMoviePage(id);
      dispatch(fromActions.actions.getMoviePageSucces(dataMoviePage));
      dispatch(fromActions.actions.setIsFetching(true));
    };
  };
  
  export const requestSimilarMovies = (id?) => {
    return async dispatch => {
      let dataSimilarMovies = await movieAPI.getSimilarMovies(id);
      dispatch(fromActions.actions.getSimilarMovies(dataSimilarMovies));
    };
  };
  
  export const requestGallery = (id?) => {
    return async dispatch => {
      let dataGallery = await movieAPI.getGallery(id);
      dispatch(fromActions.actions.getGallery(dataGallery));
    };
  };
  
  export const requestMovies = (page?) => {
    return async dispatch => {
      dispatch(fromActions.actions.setIsFetching(false));
      let dataSearch = await movieAPI.getTopRatedMovies(page);
      dispatch(fromActions.actions.getMoviesSucces(dataSearch.results));
      dispatch(fromActions.actions.getTotalPages(dataSearch.total_pages));
      dispatch(fromActions.actions.setIsFetching(true));
    };
  };
  
  export const requestSearchingMovies = (page?, text?) => {
    return async dispatch => {
      dispatch(fromActions.actions.setIsFetching(false));
      let dataSearch = await movieAPI.searchMovie(page, text);
      dispatch(fromActions.actions.getMoviesSucces(dataSearch.results));
      dispatch(fromActions.actions.getTotalPages(dataSearch.total_pages));
      dispatch(fromActions.actions.setIsFetching(true));
    };
  };
  
  export const requestSearchingMoviesByGenre = (page?, id?) => {
    return async dispatch => {
      dispatch(fromActions.actions.setIsFetching(false));
      let dataMovieGanre = await movieAPI.getSearchMovieSortGanre(page, id);
      dispatch(fromActions.actions.getMoviesWithGenreSucces(dataMovieGanre.results));
      dispatch(fromActions.actions.getTotalPages(dataMovieGanre.total_pages));
      dispatch(fromActions.actions.setIsFetching(true));
    };
  };