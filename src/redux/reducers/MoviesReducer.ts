import { movieAPI } from "../../api/Api";
import genres from "../../constants/genreList";

const GET_MOVIES = "GET_MOVIES";
const GET_SEARCH_MOVIES = "GET_SEARCH_MOVIES";
const GET_TEXT = "GET_TEXT";
const GET_MOVIE = "GET_MOVIE";
const GET_SIMILAR_MOVIES = "GET_SIMILAR_MOVIES";
const GET_GENRE = "GET_GENRE";
const GET_MOVIE_WITH_GENRE = "GET_MOVIE_WITH_GENRE";
const DELETE_GENRE = "DELETE_GENRE";
const GET_GALLERY = "GET_GALLERY";
const GET_TOTAL_PAGES = "GET_TOTAL_RESULTS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  movies: [],
  movie: [],
  similarMovies: [],
  gallery: [],
  page: 1,
  totalPages: 0,
  text: "",
  genresId: [],
  genreList: genres.map(genres => ({
    ...genres,
    active: false
  })),
  isFetching: false
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...action.movies]
      };
    case GET_SEARCH_MOVIES:
      return {
        ...state,
        movies: [...action.movies]
      };
    case GET_TEXT:
      return {
        ...state,
        text: action.text
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.movie
      };
    case GET_GENRE:
      let newGenre = {
        ...state.genresId.push(action.genre)
      };
      return {
        ...state,
        newGenre,
        genresId: [...state.genresId],
        genreList: [...genres]
      };
    case DELETE_GENRE:
      let index = state.genresId.indexOf(action.genre);
      let newGenreDelete = {
        ...state.genresId.splice(index, 1)
      };
      return {
        ...state,
        newGenreDelete,
        genresId: [...state.genresId]
      };
    case GET_MOVIE_WITH_GENRE:
      return {
        ...state,
        movies: [...action.movies]
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.similarMovies
      };
    case GET_GALLERY:
      return {
        ...state,
        gallery: action.gallery
      };

    case GET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
};

export const addGenreSucces = genre => ({ type: GET_GENRE, genre });
export const deleteGenreSucces = genre => ({ type: DELETE_GENRE, genre });
///
export const getMoviePageSucces = movie => ({ type: GET_MOVIE, movie });
export const getSimilarMovies = similarMovies => ({ type: GET_SIMILAR_MOVIES, similarMovies });
export const getGallery = gallery => ({ type: GET_GALLERY, gallery });
///
export const getMoviesSucces = movies => ({ type: GET_MOVIES, movies });
export const getMoviesWithGenreSucces = movies => ({ type: GET_MOVIE_WITH_GENRE, movies });
export const getSearchSucces = movies => ({ type: GET_SEARCH_MOVIES, movies });
///
export const getSearchText = text => dispatch => dispatch({ type: GET_TEXT, text });
export const getTotalPages = totalPages => ({ type: GET_TOTAL_PAGES, totalPages });
///
export const setIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });



export const requestMoviePage = id => {
  return async dispatch => {
    dispatch(setIsFetching(false));
    let dataMoviePage = await movieAPI.getMoviePage(id);
    dispatch(getMoviePageSucces(dataMoviePage));
    dispatch(setIsFetching(true));
  };
};

export const requestSimilarMovies = id => {
  return async dispatch => {
    let dataSimilarMovies = await movieAPI.getSimilarMovies(id);
    dispatch(getSimilarMovies(dataSimilarMovies));
  };
};

export const requestGallery = id => {
  return async dispatch => {
    let dataGallery = await movieAPI.getGallery(id);
    dispatch(getGallery(dataGallery));
  };
};

export const requestMovies = page => {
  return async dispatch => {
    dispatch(setIsFetching(false));
    let dataSearch = await movieAPI.getTopRatedMovies(page);
    dispatch(getMoviesSucces(dataSearch.results));
    dispatch(getTotalPages(dataSearch.total_pages));
    dispatch(setIsFetching(true));
  };
};

export const requestSearchingMovies = (page, text) => {
  return async dispatch => {
    dispatch(setIsFetching(false));
    let dataSearch = await movieAPI.searchMovie(page, text);
    dispatch(getMoviesSucces(dataSearch.results));
    dispatch(getTotalPages(dataSearch.total_pages));
    dispatch(setIsFetching(true));
  };
};

export const requestSearchingMoviesByGenre = (page, movies) => {
  return async dispatch => {
    dispatch(setIsFetching(false));
    let dataMovieGanre = await movieAPI.getSearchMovieSortGanre(page, movies);
    dispatch(getMoviesWithGenreSucces(dataMovieGanre.results));
    dispatch(getTotalPages(dataMovieGanre.total_pages));
    dispatch(setIsFetching(true));
  };
};

export default moviesReducer;
