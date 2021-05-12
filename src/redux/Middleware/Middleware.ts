import { movieAPI } from "../../api/Api";
import * as fromActions from "../Actions/Actions";
import { ThunkAction } from "redux-thunk";

type ThunkType = ThunkAction<
  Promise<void>,
  fromActions.Actions,
  unknown,
  fromActions.Actions
>;

export const requestMoviePage = (id: number): ThunkType => {
  return async (dispatch) => {
    dispatch(fromActions.actions.setIsFetching(false));
    const dataMoviePage = await movieAPI.getMoviePage(id);
    dispatch(fromActions.actions.getMoviePageSucces(dataMoviePage));
    dispatch(fromActions.actions.setIsFetching(true));
  };
};

export const requestSimilarMovies = (id: number): ThunkType => {
  return async (dispatch) => {
    const dataSimilarMovies = await movieAPI.getSimilarMovies(id);
    dispatch(fromActions.actions.getSimilarMovies(dataSimilarMovies));
  };
};

export const requestGallery = (id: number): ThunkType => {
  return async (dispatch) => {
    const dataGallery = await movieAPI.getGallery(id);
    dispatch(fromActions.actions.getGallery(dataGallery));
  };
};

export const requestMovies = (page: number): ThunkType => {
  return async (dispatch) => {
    dispatch(fromActions.actions.setIsFetching(false));
    const dataTop = await movieAPI.getTopRatedMovies(page);
    dispatch(fromActions.actions.getMoviesSucces(dataTop.results));
    dispatch(fromActions.actions.getTotalPages(dataTop.total_pages));
    dispatch(fromActions.actions.setIsFetching(true));
  };
};

export const requestSearchingMovies = (page?, text?): ThunkType => {
  return async (dispatch) => {
    dispatch(fromActions.actions.setIsFetching(false));
    const dataSearch = await movieAPI.searchMovie(page, text);
    dispatch(fromActions.actions.getMoviesSucces(dataSearch.results));
    dispatch(fromActions.actions.getTotalPages(dataSearch.total_pages));
    dispatch(fromActions.actions.setIsFetching(true));
  };
};

export const requestSearchingMoviesByGenre = (page?, id?): ThunkType => {
  return async (dispatch) => {
    dispatch(fromActions.actions.setIsFetching(false));
    const dataGenres = await movieAPI.getSearchMovieSortGenre(page, id);
    dispatch(fromActions.actions.getMoviesWithGenreSucces(dataGenres.results));
    dispatch(fromActions.actions.getTotalPages(dataGenres.total_pages));
    dispatch(fromActions.actions.setIsFetching(true));
  };
};
