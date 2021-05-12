import genres from "../../constants/genreList";
import { ActionType } from "../Actions/ActionType";
import { IState } from "../Types/Types";
import * as fromActions from "../Actions/Actions";

const initialState: IState = {
  movie: [],
  movies: [],
  similarMovies: [],
  favoriteMovies: [],
  gallery: [],
  page: 1,
  totalPages: 0,
  text: "",
  genresId: [],
  genreList: genres.map((genres) => ({
    ...genres,
    active: false,
  })),
  isFetching: false,
};

const moviesReducer = (state = initialState, action: fromActions.Actions) => {
  switch (action.type) {
    case ActionType.GET_MOVIES: {
      const { action: movies } = action;
      return {
        ...state,
        movies: [...movies],
      };
    }
    case ActionType.GET_SEARCHING_MOVIES: {
      const { action: movies } = action;
      return {
        ...state,
        movies: [...movies],
      };
    }
    case ActionType.GET_TEXT:
      const { action: text } = action;
      return {
        ...state,
        text: text,
      };
    case ActionType.GET_MOVIE:
      const { action: movie } = action;
      return {
        ...state,
        movie: movie,
      };
    case ActionType.GET_GENRE:
      const { action: genre } = action;
      const newGenre = state.genresId.push(genre);
      return {
        ...state,
        newGenre,
        genresId: [...state.genresId],
        genreList: [...genres],
      };
    case ActionType.DELETE_GENRE: {
      const { action: genre } = action;
      const index = state.genresId.indexOf(genre);
      const newGenreDelete = {
        ...state.genresId.splice(index, 1),
      };
      return {
        ...state,
        newGenreDelete,
        genresId: [...state.genresId],
      };
    }
    case ActionType.GET_MOVIE_WITH_GENRE: {
      const { action: movies } = action;
      return {
        ...state,
        movies: [...movies],
      };
    }
    case ActionType.GET_SIMILAR_MOVIES: {
      const { action: similarMovies } = action;
      return {
        ...state,
        similarMovies: similarMovies,
      };
    }
    case ActionType.GET_GALLERY: {
      const { action: gallery } = action;
      return {
        ...state,
        gallery: gallery,
      };
    }
    case ActionType.GET_TOTAL_PAGES: {
      const { action: totalPages } = action;
      return {
        ...state,
        totalPages: totalPages,
      };
    }
    case ActionType.TOGGLE_IS_FETCHING: {
      const { action: isFetching } = action;
      return {
        ...state,
        isFetching: isFetching,
      };
    }
    case ActionType.GET_FAVORITE_LIST: {
      const storage = localStorage.getItem("favoriteList") as string;
      const getSavedList = JSON.parse(storage);
      return {
        ...state,
        favoriteMovies: getSavedList || state.favoriteMovies,
      };
    }
    case ActionType.ADD_FAVORITE_LIST: {
      const { action: favorite } = action;
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.concat(favorite),
      };
    }
    case ActionType.DELETE_FAVORITE_LIST: {
      const { action: id } = action;
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie: { id: string | number }) => movie.id !== id
        ),
      };
    }
    case ActionType.CLEAR_GENRES: {
      return {
        ...state,
        genresId: [],
      };
    }
    default:
      return state;
  }
};

export default moviesReducer;
